const regionSelect = document.getElementById("region-select");
const roundMode = document.getElementById("round-mode");
const difficultyMode = document.getElementById("difficulty-mode");
const startButton = document.getElementById("flag-start-button");
const introScreen = document.getElementById("flag-intro");
const setupScreen = document.getElementById("setup-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const regionLabel = document.getElementById("flag-region-label");
const roundElement = document.getElementById("flag-round");
const scoreElement = document.getElementById("flag-score");
const streakElement = document.getElementById("flag-streak");
const flagImage = document.getElementById("flag-image");
const answerOptions = document.getElementById("flag-options");
const feedbackElement = document.getElementById("flag-feedback");
const nextButton = document.getElementById("flag-next-button");
const backButton = document.getElementById("flag-back-button");
const compactBackButton = document.getElementById("flag-compact-back");
const playAgainButton = document.getElementById("flag-play-again");
const resultsBackButton = document.getElementById("flag-results-back");
const highscoreElement = document.getElementById("flag-highscore");
const highscoreRegion = document.getElementById("flag-highscore-region");

const state = {
    region: "all",
    mode: "10",
    difficulty: "easy",
    questionQueue: [],
    current: null,
    choices: [],
    answered: false,
    score: 0,
    streak: 0,
    bestStreak: 0,
    roundIndex: 0,
    correct: 0,
    wrong: 0,
    selectedCode: ""
};

const flagCatalog = {};
for (const country of FLAG_QUIZ_DATA) {
    flagCatalog[`flag.country.${country.code}`] = country.names;
}
if (window.JB_I18N) window.JB_I18N.registerCatalog(flagCatalog);

function text(key, fallback, values) {
    return window.JB_I18N ? window.JB_I18N.t(key, fallback, values) : fallback;
}

function countryName(country) {
    return text(`flag.country.${country.code}`, country.names.en);
}

function regionName(region, uppercase = false) {
    const names = {
        all: ["All Regions", "ALL REGIONS"],
        europe: ["Europe", "EUROPE"],
        asia: ["Asia", "ASIA"],
        americas: ["Americas", "AMERICAS"],
        "africa-oceania": ["Africa & Oceania", "AFRICA & OCEANIA"]
    };
    const pair = names[region] || names.all;
    return text(pair[uppercase ? 1 : 0], pair[uppercase ? 1 : 0]);
}

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getHighscore(region, difficulty) {
    return Number(localStorage.getItem(`jb_flag_quiz_highscore_${region}_${difficulty}`)) || 0;
}

function saveHighscore() {
    const key = `jb_flag_quiz_highscore_${state.region}_${state.difficulty}`;
    const best = getHighscore(state.region, state.difficulty);
    if (state.score > best) localStorage.setItem(key, String(state.score));
}

function updateHighscore() {
    const region = regionSelect.value;
    const difficulty = difficultyMode.querySelector(".is-selected")?.dataset.difficulty || "easy";
    highscoreElement.textContent = String(getHighscore(region, difficulty));
    highscoreRegion.textContent = `${regionName(region)} · ${difficultyName(difficulty)}`;
}

function difficultyName(difficulty) {
    return text(difficulty === "easy" ? "Easy" : difficulty === "medium" ? "Medium" : "Hard",
        difficulty === "easy" ? "Easy" : difficulty === "medium" ? "Medium" : "Hard");
}

function renderStaticUi() {
    document.querySelector(".back-link").textContent = text("← back home", "← back home");
    document.querySelector(".flag-intro .eyebrow").textContent = text("A LITTLE GAME · NO. 08", "A LITTLE GAME · NO. 08");
    const title = document.querySelector(".flag-intro h1");
    title.firstChild.textContent = text("Flag", "Flag") + " ";
    title.querySelector("span").textContent = text("Quiz.", "Quiz.");
    document.querySelector(".flag-intro > p:not(.eyebrow)").textContent =
        text("How well do you know the flags of the world?", "How well do you know the flags of the world?");
    document.querySelector(".footer p").textContent =
        text("made for no particular reason.", "made for no particular reason.");

    document.querySelector(".flag-panel-heading .eyebrow").textContent = text("SET UP YOUR GAME", "SET UP YOUR GAME");
    document.querySelector(".flag-panel-heading h2").textContent = text("Choose a region.", "Choose a region.");
    document.querySelector(".flag-setup-note").textContent =
        state.mode === "endless"
            ? text("Endless", "Endless")
            : text(`${state.mode} questions · no repeats`, `${state.mode} questions · no repeats`);

    document.querySelector(".flag-settings label .eyebrow").textContent = text("REGION", "REGION");
    document.querySelector(".flag-settings .flag-field:nth-child(2) > .eyebrow").textContent = text("ROUNDS", "ROUNDS");
    document.querySelector(".flag-difficulty-field > .eyebrow").textContent = text("HOW TRICKY?", "HOW TRICKY?");
    document.querySelector(".flag-best-panel .eyebrow").textContent = text("PERSONAL BEST", "PERSONAL BEST");

    const currentRegion = regionSelect.value;
    Array.from(regionSelect.options).forEach(option => {
        option.textContent = regionName(option.value);
    });
    regionSelect.value = currentRegion;

    roundMode.querySelectorAll(".flag-mode-button").forEach(button => {
        const value = button.dataset.mode;
        button.textContent = value === "10" ? text("10 questions", "10 questions")
            : value === "15" ? text("15 questions", "15 questions")
            : text("Endless", "Endless");
    });
    difficultyMode.querySelectorAll(".flag-difficulty-button").forEach(button => {
        button.textContent = difficultyName(button.dataset.difficulty);
    });

    document.querySelector("#flag-start-button span").textContent = text("START PLAYING", "START PLAYING");
    document.querySelector(".flag-question h2").textContent =
        text("Which country does this flag belong to?", "Which country does this flag belong to?");
    document.querySelector(".flag-question p").textContent =
        text("Choose one of the four answers.", "Choose one of the four answers.");
    nextButton.querySelector("span").textContent = text("Next Question", "Next Question");
    backButton.textContent = text("← Back to settings", "← Back to settings");
    compactBackButton.querySelector("span").textContent = text("Back to settings", "Back to settings");
    playAgainButton.querySelector("span").textContent = text("PLAY AGAIN", "PLAY AGAIN");
    resultsBackButton.textContent = text("← Back to settings", "← Back to settings");
    document.querySelector(".flag-results > .eyebrow").textContent = text("THAT'S A WRAP", "THAT'S A WRAP");
    document.querySelector(".flag-final-score span").textContent = text("POINTS", "POINTS");
    const resultLabels = document.querySelectorAll(".flag-result-stats span");
    [ "CORRECT", "WRONG", "ACCURACY", "BEST STREAK" ].forEach((key, index) => {
        if (resultLabels[index]) resultLabels[index].textContent = text(key, key);
    });
    if (state.answered && state.current) {
        if (state.selectedCode === state.current.code) {
            feedbackElement.textContent = text("Correct!", "Correct!");
        } else {
            feedbackElement.textContent = `${text("Not quite!", "Not quite!")} ${text(
                "The answer is {name}.",
                `The answer is ${countryName(state.current)}.`,
                { name: countryName(state.current) }
            )}`;
        }
    }
    regionLabel.textContent = regionName(state.region, true);
    updateHighscore();
    renderAnswers();
}

function filteredCountries(region, difficulty = state.difficulty) {
    const regional = region === "all" ? [...FLAG_QUIZ_DATA] : FLAG_QUIZ_DATA.filter(country => country.region === region);
    const globalDifficultyPool = countriesForDifficulty(difficulty);
    const countries = regional.filter(country => globalDifficultyPool.some(item => item.code === country.code));
    for (const country of shuffle(globalDifficultyPool.filter(item => !countries.some(selected => selected.code === item.code)))) {
        if (countries.length >= 20) break;
        countries.push(country);
    }
    return countries;
}

function countriesForDifficulty(difficulty) {
    return FLAG_QUIZ_DATA.filter(country => {
        if (difficulty === "easy") return FLAG_QUIZ_EASY.has(country.code);
        if (difficulty === "hard") return FLAG_QUIZ_HARD.has(country.code) && !FLAG_QUIZ_EASY.has(country.code);
        return !FLAG_QUIZ_EASY.has(country.code) && !FLAG_QUIZ_HARD.has(country.code);
    });
}

function startGame() {
    state.region = regionSelect.value;
    state.mode = roundMode.querySelector(".is-selected").dataset.mode;
    state.difficulty = difficultyMode.querySelector(".is-selected").dataset.difficulty;
    state.questionQueue = shuffle(filteredCountries(state.region, state.difficulty));
    state.score = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.roundIndex = 0;
    state.correct = 0;
    state.wrong = 0;

    introScreen.classList.add("is-hidden");
    setupScreen.hidden = true;
    resultsScreen.hidden = true;
    gameScreen.hidden = false;
    regionLabel.textContent = regionName(state.region, true);
    scoreElement.textContent = "0";
    streakElement.textContent = "0";
    showQuestion();
}

function showQuestion() {
    state.answered = false;
    state.selectedCode = "";
    if (!state.questionQueue.length) {
        showResults();
        return;
    }
    state.current = state.questionQueue.shift();
    const candidateCodes = new Set([state.current.code]);
    const candidates = [];
    const addCandidates = countries => {
        if (candidates.length >= 3) return;
        for (const country of shuffle(countries)) {
            if (candidateCodes.has(country.code)) continue;
            candidateCodes.add(country.code);
            candidates.push(country);
            if (candidates.length >= 3) break;
        }
    };

    if (state.difficulty === "hard") {
        const lookalikeGroup = FLAG_QUIZ_LOOKALIKES.find(group => group.includes(state.current.code));
        if (lookalikeGroup) {
            addCandidates(FLAG_QUIZ_DATA.filter(country =>
                lookalikeGroup.includes(country.code) && country.code !== state.current.code
            ));
        }
    }
    addCandidates(countriesForDifficulty(state.difficulty));
    if (candidates.length < 3) addCandidates(FLAG_QUIZ_DATA);
    state.choices = shuffle([state.current, ...candidates]);

    flagImage.src = `https://flagcdn.com/w640/${state.current.code}.png`;
    flagImage.alt = text("Country flag", "Country flag");
    feedbackElement.hidden = true;
    nextButton.hidden = true;
    renderAnswers();
    updateRoundStats();
}

function renderAnswers() {
    if (!state.current) return;
    answerOptions.replaceChildren();
    state.choices.forEach(country => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "flag-answer";
        button.dataset.code = country.code;
        button.textContent = countryName(country);
        button.disabled = state.answered;
        button.addEventListener("click", () => answerQuestion(country, button));
        answerOptions.appendChild(button);
    });

    if (state.answered) {
        answerOptions.querySelectorAll(".flag-answer").forEach(button => {
            if (button.dataset.code === state.current.code) button.classList.add("is-correct");
            if (button.dataset.code === state.selectedCode && state.selectedCode !== state.current.code) {
                button.classList.add("is-wrong");
            }
        });
    }
}

function answerQuestion(country, button) {
    if (state.answered) return;
    state.answered = true;
    state.selectedCode = country.code;
    const isCorrect = country.code === state.current.code;

    answerOptions.querySelectorAll(".flag-answer").forEach(option => {
        option.disabled = true;
        if (option.dataset.code === state.current.code) option.classList.add("is-correct");
    });

    if (isCorrect) {
        state.correct++;
        state.score += 100 + state.streak * 25;
        state.streak++;
        state.bestStreak = Math.max(state.bestStreak, state.streak);
        button.classList.add("is-correct");
        feedbackElement.textContent = text("Correct!", "Correct!");
    } else {
        state.wrong++;
        state.streak = 0;
        button.classList.add("is-wrong");
        feedbackElement.textContent = `${text("Not quite!", "Not quite!")} ${text(
            "The answer is {name}.",
            `The answer is ${countryName(state.current)}.`,
            { name: countryName(state.current) }
        )}`;
    }

    feedbackElement.hidden = false;
    nextButton.hidden = false;
    scoreElement.textContent = String(state.score);
    streakElement.textContent = String(state.streak);
    saveHighscore();
    updateHighscore();
}

function updateRoundStats() {
    const displayRound = state.roundIndex + 1;
    roundElement.textContent = state.mode === "endless"
        ? `${displayRound} / ∞`
        : `${displayRound} / ${state.mode}`;
}

function nextQuestion() {
    if (!state.answered) return;
    state.roundIndex++;
    if ((state.mode !== "endless" && state.roundIndex >= Number(state.mode)) || !state.questionQueue.length) {
        showResults();
        return;
    }
    showQuestion();
}

function showResults() {
    gameScreen.hidden = true;
    resultsScreen.hidden = false;
    const total = state.correct + state.wrong;
    const accuracy = total ? Math.round((state.correct / total) * 100) : 0;
    document.getElementById("flag-final-score").textContent = String(state.score);
    document.getElementById("flag-correct-total").textContent = String(state.correct);
    document.getElementById("flag-wrong-total").textContent = String(state.wrong);
    document.getElementById("flag-accuracy").textContent = `${accuracy}%`;
    document.getElementById("flag-best-streak").textContent = String(state.bestStreak);
    document.getElementById("flag-result-title").textContent =
        accuracy >= 70 ? text("Great job!", "Great job!") : text("Nice try!", "Nice try!");
    document.getElementById("flag-result-message").textContent =
        text("Saved on this device.", "Saved on this device.");
    saveHighscore();
    updateHighscore();
}

function backToSettings() {
    gameScreen.hidden = true;
    resultsScreen.hidden = true;
    introScreen.classList.remove("is-hidden");
    setupScreen.hidden = false;
    state.answered = false;
}

regionSelect.addEventListener("change", updateHighscore);
difficultyMode.addEventListener("click", event => {
    const button = event.target.closest(".flag-difficulty-button");
    if (!button) return;
    difficultyMode.querySelectorAll(".flag-difficulty-button").forEach(option => {
        option.classList.toggle("is-selected", option === button);
        option.setAttribute("aria-pressed", String(option === button));
    });
    state.difficulty = button.dataset.difficulty;
    updateHighscore();
});
roundMode.addEventListener("click", event => {
    const button = event.target.closest(".flag-mode-button");
    if (!button) return;
    roundMode.querySelectorAll(".flag-mode-button").forEach(option => {
        option.classList.toggle("is-selected", option === button);
        option.setAttribute("aria-pressed", String(option === button));
    });
    state.mode = button.dataset.mode;
    document.querySelector(".flag-setup-note").textContent =
        state.mode === "endless"
            ? text("Endless", "Endless")
            : text(`${state.mode} questions · no repeats`, `${state.mode} questions · no repeats`);
});
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
backButton.addEventListener("click", backToSettings);
compactBackButton.addEventListener("click", backToSettings);
resultsBackButton.addEventListener("click", backToSettings);
window.addEventListener("jb:languagechange", renderStaticUi);

if (window.JB_I18N) {
    renderStaticUi();
} else {
    window.addEventListener("load", renderStaticUi, { once: true });
}
