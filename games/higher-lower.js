
/* =========================================================
   JUST BECAUSE — HIGHER OR LOWER
========================================================= */

// PAGE ELEMENTS

const categorySelect = document.getElementById("category-select");
const randomButton = document.getElementById("random-button");
const startButton = document.getElementById("start-button");

const setupScreen = document.getElementById("setup-screen");
const gameStage = document.getElementById("game-stage");

const highscoreElement = document.getElementById("highscore");
const highscoreCategory = document.getElementById("highscore-category");

const roundCategory = document.getElementById("round-category");
const roundScore = document.getElementById("round-score");
const metricTitle = document.getElementById("metric-title");
const metricQuestion = document.getElementById("metric-question");

const currentName = document.getElementById("current-name");
const currentValue = document.getElementById("current-value");
const nextName = document.getElementById("next-name");
const nextValue = document.getElementById("next-value");

const higherButton = document.getElementById("higher-button");
const lowerButton = document.getElementById("lower-button");
const answerButtons = document.getElementById("answer-buttons");

const feedbackElement = document.getElementById("feedback");
const gameOver = document.getElementById("game-over");
const endTitle = document.getElementById("end-title");
const endMessage = document.getElementById("end-message");

const backButton = document.getElementById("back-button");
const playAgainButton = document.getElementById("play-again-button");


// CATEGORY NAMES

const categoryNames = {
    mixed: "A bit of everything",
    animals: "Animal weight",
    countries: "Country population",
    everyday: "Object weight",
    gaming: "Game sales",
    sport: "Stadium capacity",
    internet: "Social media users"
};


// GAME VARIABLES

let activeMode = "mixed";
let activeCategory = "";
let activeData = null;

let shuffledItems = [];
let currentItem = null;
let nextItem = null;
let nextIndex = 0;

let score = 0;
let isProcessing = false;
let answerRevealed = false;
let feedbackState = null;
let gameCompleted = false;
let gameEnded = false;

function translate(key, fallback) {
    return window.JB_I18N
        ? window.JB_I18N.t(key, fallback)
        : fallback;
}

function categoryName(category) {
    return translate(`hl.category.${category}`, categoryNames[category] || category);
}

function itemName(item) {
    if (!activeData || !item) return "";
    const index = activeData.items.indexOf(item);
    return translate(`hl.item.${activeCategory}.${index}`, item.name);
}

function setText(element, key, fallback) {
    if (!element) return;
    element.textContent = translate(key, fallback);
}

function updateStaticText() {
    setText(document.querySelector(".back-link"), "hl.ui.backHome", "← back home");
    setText(document.querySelector(".game-intro .eyebrow"), "hl.ui.eyebrow", "A LITTLE GAME · NO. 02");
    const title = document.querySelector(".game-intro h1");
    if (title) {
        const language = window.JB_I18N ? window.JB_I18N.language : "en";
        const titleText = translate("hl.ui.title", "Higher or lower?");
        const joiner = { en: "or", nl: "of", de: "oder", fr: "ou", es: "o" }[language] || "or";
        const joinerIndex = titleText.indexOf(joiner);
        title.innerHTML = joinerIndex < 0
            ? titleText
            : `${titleText.slice(0, joinerIndex)}<span>${joiner}</span>${titleText.slice(joinerIndex + joiner.length)}`;
    }
    setText(document.querySelector(".game-intro > p:not(.eyebrow)"), "hl.ui.intro", "Think you know your numbers? Let's put that to the test.");
    setText(startButton.querySelector("span:first-child"), "hl.ui.start", "START PLAYING");
    setText(document.querySelector(".category-title .eyebrow"), "hl.ui.yourChoice", "YOUR CHOICE");
    setText(document.querySelector(".category-title h2"), "hl.ui.pickCategory", "Pick a category.");

    Array.from(categorySelect.options).forEach(option => {
        option.textContent = categoryName(option.value);
    });
    setText(randomButton, "hl.ui.random", "↻ Random");
    setText(document.querySelector(".category-note"), "hl.ui.categoryNote", "Can't decide? Let fate choose.");
    setText(document.querySelector(".highscore-box .eyebrow"), "hl.ui.personalBest", "YOUR PERSONAL BEST");
    setText(document.querySelector(".highscore-label"), "hl.ui.highScore", "HIGH SCORE");
    setText(document.querySelector(".highscore-note"), "hl.ui.highScoreNote", "Your best score on this device.");
    const scoreLabel = document.querySelector(".round-score");
    if (scoreLabel && scoreLabel.firstChild) {
        const caption = scoreLabel.firstChild;
        if (caption.nodeType === 1) {
            caption.dataset.i18n = "hl.ui.score";
            caption.textContent = `${translate("hl.ui.score", "SCORE:")} `;
        } else {
            caption.nodeValue = `${translate("hl.ui.score", "SCORE:")} `;
        }
    }
    const cardLabels = document.querySelectorAll(".card-label");
    setText(cardLabels[0], "hl.ui.current", "CURRENT");
    setText(cardLabels[1], "hl.ui.next", "NEXT");
    setText(document.querySelector(".versus"), "hl.ui.versus", "VS");
    setText(higherButton, "hl.ui.higher", "Higher ↑");
    setText(lowerButton, "hl.ui.lower", "Lower ↓");
    setText(playAgainButton.querySelector("span:first-child"), "hl.ui.playAgain", "PLAY AGAIN");
    setText(backButton, "hl.ui.backSettings", "← Back to settings");
    setText(document.querySelector(".footer p:first-child"), "hl.ui.madeForNoReason", "made for no particular reason.");
}

function renderFeedback() {
    if (!feedbackState || !nextItem) {
        feedbackElement.textContent = "";
        return;
    }
    const key = feedbackState.correct ? "hl.ui.correct" : "hl.ui.incorrect";
    const fallback = feedbackState.correct
        ? `Correct! ${itemName(nextItem)} is ${feedbackState.direction}.`
        : `Not quite! The correct answer was ${feedbackState.direction}.`;
    const direction = translate(
        `hl.ui.direction${feedbackState.direction === "higher" ? "Higher" : "Lower"}`,
        feedbackState.direction
    );
    feedbackElement.textContent = translate(key, fallback)
        .replace("{item}", itemName(nextItem))
        .replace("{direction}", direction);
}

function refreshVisibleRound() {
    if (!activeData || !currentItem || !nextItem) return;
    roundCategory.textContent = categoryName(activeCategory) +
        (activeMode === "mixed" ? ` · ${translate("hl.ui.randomPick", "RANDOM PICK")}` : "");
    metricTitle.textContent = translate(`hl.metric.${activeCategory}`, activeData.metric);
    metricQuestion.textContent = translate(`hl.question.${activeCategory}`, activeData.question);
    currentName.textContent = itemName(currentItem);
    nextName.textContent = itemName(nextItem);
    currentValue.textContent = formatValue(currentItem.value, activeData.unit);
    nextValue.textContent = answerRevealed
        ? formatValue(nextItem.value, activeData.unit)
        : "???";
    renderFeedback();
    if (gameEnded) updateEndText();
}

function updateEndText() {
    if (gameCompleted) {
        endTitle.textContent = translate("hl.ui.clearedTitle", "You cleared the whole list!");
        endMessage.textContent = translate(
            "hl.ui.clearedMessage",
            `Amazing! You got all ${score} comparisons right.`
        ).replace("{score}", score);
    } else {
        endTitle.textContent = translate("hl.ui.gameOver", "Game over!");
        const key = score === 1 ? "hl.ui.finalSingular" : "hl.ui.finalPlural";
        const fallback = score === 1
            ? `You scored ${score} point. Better luck next time!`
            : `You scored ${score} points. Better luck next time!`;
        endMessage.textContent = translate(key, fallback).replace("{score}", score);
    }
}


// SAVE AND LOAD HIGHSCORES

function getHighScore(category) {
    const savedScore = localStorage.getItem(
        `jb-hl-score-${category}`
    );

    return Number(savedScore) || 0;
}

function saveHighScore() {
    const best = getHighScore(activeMode);

    if (score > best) {
        localStorage.setItem(
            `jb-hl-score-${activeMode}`,
            score
        );
    }

    updateHighScore();
}

function updateHighScore() {
    const category = categorySelect.value;

    highscoreElement.textContent = getHighScore(category);

    highscoreCategory.textContent = categoryName(category);
}


// FORMAT NUMBERS

function formatValue(value, unit) {
    const formatted = new Intl.NumberFormat(
        window.JB_I18N ? window.JB_I18N.language : "en-US",
        {
        maximumFractionDigits: 1
        }
    ).format(value);

    return `${formatted} ${unit}`;
}


// SHUFFLE THE ITEMS

function shuffleItems(items) {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }

    return shuffled;
}


// START THE GAME

function startGame() {

    activeMode = categorySelect.value;

    // Save the selected category
    localStorage.setItem("jb-hl-category", activeMode);

    // Pick a random category when mixed is selected
    const categories = Object.keys(HIGHER_LOWER_DATA);

    if (activeMode === "mixed") {
        const randomIndex = Math.floor(
            Math.random() * categories.length
        );

        activeCategory = categories[randomIndex];
    } else {
        activeCategory = activeMode;
    }

    activeData = HIGHER_LOWER_DATA[activeCategory];

    // Shuffle the category's items
    shuffledItems = shuffleItems(activeData.items);

    currentItem = shuffledItems[0];
    nextItem = shuffledItems[1];
    nextIndex = 2;

    score = 0;
    isProcessing = false;
    gameEnded = false;
    gameCompleted = false;

    // Update the game information
    roundScore.textContent = score;

    // Switch screens
    setupScreen.classList.add("is-hidden");
    gameStage.classList.remove("is-hidden");

    gameOver.classList.add("is-hidden");
    answerButtons.classList.remove("is-hidden");

    renderRound();
}


// DISPLAY A ROUND

function renderRound() {
    answerRevealed = false;
    feedbackState = null;
    refreshVisibleRound();

    roundScore.textContent = score;
    feedbackElement.textContent = "";

    answerButtons.classList.remove("is-hidden");

    higherButton.disabled = false;
    lowerButton.disabled = false;
}


// CHECK THE PLAYER'S ANSWER

function checkAnswer(guess) {

    if (isProcessing || !nextItem) return;

    isProcessing = true;

    const correctDirection =
        nextItem.value > currentItem.value
            ? "higher"
            : "lower";

    const isCorrect = guess === correctDirection;

    // Reveal the hidden value
    answerRevealed = true;
    nextValue.textContent = formatValue(
        nextItem.value,
        activeData.unit
    );

    answerButtons.classList.add("is-hidden");

    if (isCorrect) {

        score++;
        window.DailyChallenge?.report("higher-lower", score);

        roundScore.textContent = score;
        saveHighScore();

        feedbackState = { correct: true, direction: correctDirection };
        renderFeedback();

        // Move to the next comparison
        window.setTimeout(() => {

            currentItem = nextItem;

            // The player completed the whole category
            if (nextIndex >= shuffledItems.length) {
                finishGame(true);
                return;
            }

            nextItem = shuffledItems[nextIndex];
            nextIndex++;

            isProcessing = false;

            renderRound();

        }, 800);

    } else {

        saveHighScore();

        feedbackState = { correct: false, direction: correctDirection };
        renderFeedback();

        window.setTimeout(() => {
            finishGame(false);
        }, 900);
    }
}


// FINISH THE GAME

function finishGame(completed) {

    isProcessing = false;
    gameEnded = true;
    gameCompleted = completed;

    answerButtons.classList.add("is-hidden");
    gameOver.classList.remove("is-hidden");

    updateEndText();

    saveHighScore();
}


// RANDOM CATEGORY BUTTON

randomButton.addEventListener("click", () => {

    const options = Array.from(categorySelect.options);

    const randomIndex = Math.floor(
        Math.random() * options.length
    );

    categorySelect.selectedIndex = randomIndex;

    localStorage.setItem(
        "jb-hl-category",
        categorySelect.value
    );

    updateHighScore();
});


// CATEGORY SELECTION

categorySelect.addEventListener("change", () => {

    localStorage.setItem(
        "jb-hl-category",
        categorySelect.value
    );

    updateHighScore();
});


// BUTTONS

startButton.addEventListener("click", startGame);

higherButton.addEventListener("click", () => {
    checkAnswer("higher");
});

lowerButton.addEventListener("click", () => {
    checkAnswer("lower");
});

playAgainButton.addEventListener("click", startGame);

backButton.addEventListener("click", () => {

    gameStage.classList.add("is-hidden");
    setupScreen.classList.remove("is-hidden");

    isProcessing = false;
    gameEnded = false;

    updateHighScore();
});

window.addEventListener("jb:languagechange", () => {
    updateStaticText();
    updateHighScore();
    refreshVisibleRound();
});


// LOAD SAVED CATEGORY

const savedCategory = localStorage.getItem("jb-hl-category");

if (savedCategory && categoryNames[savedCategory]) {
    categorySelect.value = savedCategory;
}


// INITIALISE PAGE

updateStaticText();
updateHighScore();
