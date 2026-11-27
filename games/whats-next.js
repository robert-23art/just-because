(() => {
    "use strict";

    const data = typeof WHATS_NEXT_DATA === "undefined" ? null : WHATS_NEXT_DATA;
    const categoryNames = Object.fromEntries((data?.categories || []).map(item => [item.id, item.name]));
    const difficultyNames = { all: "All Difficulties", easy: "Easy", medium: "Medium", hard: "Hard" };
    const questions = (data?.questions || []).map((row, index) => ({
        id: index + 1,
        category: row[0],
        difficulty: row[1],
        prompt: row[2],
        options: row[3],
        answer: row[4],
        hint: row[5],
        explanation: row[6]
    }));

    const ui = {
        setup: document.getElementById("wn-setup"),
        categoryChoices: document.getElementById("wn-category-choices"),
        difficultyChoices: document.getElementById("wn-difficulty-choices"),
        categorySummary: document.getElementById("wn-category-summary"),
        difficultySummary: document.getElementById("wn-difficulty-summary"),
        poolSummary: document.getElementById("wn-pool-summary"),
        bestScore: document.getElementById("wn-best-score"),
        bestLabel: document.getElementById("wn-best-label"),
        start: document.getElementById("wn-start"),
        game: document.getElementById("wn-game"),
        round: document.getElementById("wn-round"),
        progress: document.getElementById("wn-progress-fill"),
        score: document.getElementById("wn-score"),
        streak: document.getElementById("wn-streak"),
        category: document.getElementById("wn-game-category"),
        difficulty: document.getElementById("wn-game-difficulty"),
        puzzleType: document.getElementById("wn-puzzle-type"),
        puzzle: document.getElementById("wn-puzzle"),
        hintButton: document.getElementById("wn-hint-button"),
        hintText: document.getElementById("wn-hint-text"),
        answers: document.getElementById("wn-answers"),
        feedback: document.getElementById("wn-feedback"),
        feedbackTitle: document.getElementById("wn-feedback-title"),
        points: document.getElementById("wn-points"),
        explanation: document.getElementById("wn-explanation"),
        streakMoment: document.getElementById("wn-streak-moment"),
        next: document.getElementById("wn-next"),
        quit: document.getElementById("wn-quit"),
        results: document.getElementById("wn-results"),
        resultTitle: document.getElementById("wn-result-title"),
        finalScore: document.getElementById("wn-final-score"),
        correct: document.getElementById("wn-correct"),
        wrong: document.getElementById("wn-wrong"),
        accuracy: document.getElementById("wn-accuracy"),
        bestStreak: document.getElementById("wn-best-streak"),
        resultMessage: document.getElementById("wn-result-message"),
        playAgain: document.getElementById("wn-play-again"),
        backCategories: document.getElementById("wn-back-categories")
    };

    let selectedCategory = readSetting("jb-wn-category", "all");
    let selectedDifficulty = readSetting("jb-wn-difficulty", "all");
    let run = [];
    let roundIndex = 0;
    let score = 0;
    let streak = 0;
    let bestStreak = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let hintUsed = false;
    let answered = false;

    function readSetting(key, fallback) {
        try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
    }

    function writeSetting(key, value) {
        try { localStorage.setItem(key, String(value)); } catch { /* Keep the game playable without storage. */ }
    }

    function translate(key, fallback) {
        return window.JB_I18N?.t ? window.JB_I18N.t(key, fallback) : fallback;
    }

    function categoryName(id) {
        return translate(`wn.category.${id}`, categoryNames[id]);
    }

    function difficultyName(id) {
        return translate(`wn.difficulty.${id}`, difficultyNames[id]);
    }

    function questionText(question, field, fallback) {
        return translate(`wn.q.${question.id}.${field}`, fallback);
    }

    function answerText(question) {
        const answerIndex = question.options.indexOf(question.answer);
        return answerIndex < 0
            ? question.answer
            : questionText(question, `option.${answerIndex}`, question.answer);
    }

    function shuffle(items) {
        const result = [...items];
        for (let index = result.length - 1; index > 0; index--) {
            const other = Math.floor(Math.random() * (index + 1));
            [result[index], result[other]] = [result[other], result[index]];
        }
        return result;
    }

    function highScoreKey() {
        return `jb-wn-score-${selectedCategory}-${selectedDifficulty}`;
    }

    function getHighScore() {
        try { return Number(localStorage.getItem(highScoreKey())) || 0; } catch { return 0; }
    }

    function validateData() {
        const categories = new Set((data?.categories || []).map(item => item.id));
        const uniquePrompts = new Set();
        return questions.every(question => {
            const promptKey = `${question.category}|${question.difficulty}|${question.prompt}`;
            const valid = categories.has(question.category)
                && ["easy", "medium", "hard"].includes(question.difficulty)
                && question.prompt.trim()
                && Array.isArray(question.options)
                && question.options.length === 4
                && new Set(question.options.map(option => String(option).toLowerCase())).size === 4
                && question.options.filter(option => option === question.answer).length === 1
                && question.hint.trim()
                && question.explanation.trim()
                && !uniquePrompts.has(promptKey);
            uniquePrompts.add(promptKey);
            return valid;
        });
    }

    function updateSetup() {
        ui.categoryChoices.querySelectorAll("[data-category]").forEach(button => {
            const isSelected = button.dataset.category === selectedCategory;
            button.classList.toggle("is-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
            const label = button.querySelector("strong");
            if (label) {
                label.textContent = button.dataset.category === "all"
                    ? translate("wn.category.all", "All Puzzles")
                    : categoryName(button.dataset.category);
            }
        });
        ui.difficultyChoices.querySelectorAll("[data-difficulty]").forEach(button => {
            const isSelected = button.dataset.difficulty === selectedDifficulty;
            button.classList.toggle("is-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
            button.textContent = difficultyName(button.dataset.difficulty);
        });

        const pool = questions.filter(question =>
            (selectedCategory === "all" || question.category === selectedCategory)
            && (selectedDifficulty === "all" || question.difficulty === selectedDifficulty)
        );
        ui.categorySummary.textContent = selectedCategory === "all" ? translate("wn.category.all", "All Puzzles") : categoryName(selectedCategory);
        ui.difficultySummary.textContent = difficultyName(selectedDifficulty);
        ui.poolSummary.textContent = `${pool.length} curated puzzles · ${data?.roundsPerGame || 10} per game`;
        ui.bestScore.textContent = getHighScore();
        ui.bestLabel.textContent = `${ui.categorySummary.textContent} · ${ui.difficultySummary.textContent}`;
        ui.start.disabled = !validateData() || pool.length < (data?.roundsPerGame || 10);
    }

    function startGame() {
        const pool = questions.filter(question =>
            (selectedCategory === "all" || question.category === selectedCategory)
            && (selectedDifficulty === "all" || question.difficulty === selectedDifficulty)
        );
        if (!validateData() || pool.length < data.roundsPerGame) return;

        window.JustBecauseProfile?.recordGame("whats-next");
        run = shuffle(pool).slice(0, data.roundsPerGame);
        roundIndex = 0;
        score = 0;
        streak = 0;
        bestStreak = 0;
        correctCount = 0;
        wrongCount = 0;
        ui.setup.classList.add("is-hidden");
        ui.results.classList.add("is-hidden");
        ui.game.classList.remove("is-hidden");
        renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderQuestion() {
        const question = run[roundIndex];
        if (!question) return showResults();

        answered = false;
        hintUsed = false;
        ui.feedback.classList.add("is-hidden");
        ui.feedback.classList.remove("is-correct", "is-wrong");
        ui.next.classList.add("is-hidden");
        ui.hintButton.disabled = false;
        ui.hintButton.classList.remove("is-used");
        ui.hintText.textContent = "";
        ui.hintText.classList.add("is-hidden");
        ui.round.textContent = `${roundIndex + 1} / ${run.length}`;
        ui.progress.style.width = `${(roundIndex / run.length) * 100}%`;
        ui.progress.parentElement.setAttribute("aria-valuenow", String(roundIndex));
        ui.score.textContent = score;
        ui.streak.textContent = streak;
        ui.category.textContent = (selectedCategory === "all" ? translate("wn.category.all", "All Puzzles") : categoryName(selectedCategory)).toUpperCase();
        ui.difficulty.textContent = difficultyName(selectedDifficulty).toUpperCase();
        ui.puzzleType.textContent = categoryName(question.category).toUpperCase();
        ui.puzzle.textContent = questionText(question, "prompt", question.prompt);
        ui.answers.replaceChildren();

        shuffle(question.options.map((option, optionIndex) => ({ option, optionIndex }))).forEach(({ option, optionIndex }, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "wn-answer-button";
            button.dataset.answer = option;
            button.dataset.optionIndex = String(optionIndex);
            button.innerHTML = `<span class="wn-answer-letter">${String.fromCharCode(65 + index)}</span><span class="wn-answer-value"></span>`;
            button.querySelector(".wn-answer-value").textContent = questionText(question, `option.${optionIndex}`, option);
            button.addEventListener("click", () => chooseAnswer(button, question));
            ui.answers.append(button);
        });
    }

    function useHint() {
        if (hintUsed || answered) return;
        hintUsed = true;
        ui.hintText.textContent = questionText(run[roundIndex], "hint", run[roundIndex].hint);
        ui.hintText.classList.remove("is-hidden");
        ui.hintButton.disabled = true;
        ui.hintButton.classList.add("is-used");
    }

    function chooseAnswer(button, question) {
        if (answered) return;
        answered = true;
        ui.answers.querySelectorAll("button").forEach(answerButton => {
            answerButton.disabled = true;
            if (answerButton.dataset.answer === question.answer) answerButton.classList.add("is-answer");
        });

        const isCorrect = button.dataset.answer === question.answer;
        let earned = 0;
        ui.feedback.classList.remove("is-hidden", "is-correct", "is-wrong");
        ui.streakMoment.textContent = "";
        ui.streakMoment.classList.remove("is-celebrating");

        if (isCorrect) {
            correctCount++;
            window.DailyChallenge?.report("whats-next", correctCount);
            streak++;
            bestStreak = Math.max(bestStreak, streak);
            earned = hintUsed ? 50 : 100;
            if (streak > 0 && streak % 3 === 0) {
                earned += 25;
                ui.streakMoment.textContent = `${streak} in a row! +25 streak bonus`;
                ui.streakMoment.classList.add("is-celebrating");
            }
            score += earned;
            button.classList.add("is-answer");
            ui.feedback.classList.add("is-correct");
            ui.feedbackTitle.textContent = "Correct!";
            ui.points.textContent = `+${earned} points${hintUsed ? " · hint used" : ""}`;
        } else {
            wrongCount++;
            streak = 0;
            button.classList.add("is-wrong");
            ui.feedback.classList.add("is-wrong");
            ui.feedbackTitle.textContent = "Not quite!";
            ui.points.textContent = "+0 points";
            ui.streakMoment.classList.remove("is-celebrating");
        }

        const answer = answerText(question);
        const explanationIntro = isCorrect
            ? translate("wn.feedback.correct", "That's it.")
            : `${translate("wn.feedback.answer", "The answer is")} ${answer}.`;
        ui.explanation.textContent = `${explanationIntro} ${questionText(question, "explanation", question.explanation)}`;
        ui.score.textContent = score;
        ui.streak.textContent = streak;
        ui.hintButton.disabled = true;
        ui.next.classList.remove("is-hidden");
        ui.next.querySelector("span").textContent = roundIndex === run.length - 1 ? "See Results" : "Next Question";
    }

    function nextQuestion() {
        if (!answered) return;
        roundIndex++;
        if (roundIndex >= run.length) return showResults();
        renderQuestion();
    }

    function showResults() {
        ui.game.classList.add("is-hidden");
        ui.results.classList.remove("is-hidden");
        ui.progress.style.width = "100%";
        ui.progress.parentElement.setAttribute("aria-valuenow", String(run.length));
        ui.finalScore.textContent = score;
        ui.correct.textContent = `${correctCount} / ${run.length}`;
        ui.wrong.textContent = wrongCount;
        ui.accuracy.textContent = `${Math.round((correctCount / run.length) * 100)}%`;
        ui.bestStreak.textContent = bestStreak;

        const previousBest = getHighScore();
        if (score > previousBest) {
            try { localStorage.setItem(highScoreKey(), String(score)); } catch { /* Scores are optional when storage is blocked. */ }
            ui.resultTitle.textContent = "A new personal best!";
        } else if (correctCount === run.length) {
            ui.resultTitle.textContent = "Pattern pro.";
        } else if (correctCount >= 7) {
            ui.resultTitle.textContent = "Nicely figured out.";
        } else if (correctCount >= 4) {
            ui.resultTitle.textContent = "A few good catches.";
        } else {
            ui.resultTitle.textContent = "The patterns fought back.";
        }

        ui.resultMessage.textContent = bestStreak >= 5
            ? `You found a run of ${bestStreak} in a row. The numbers were no match for you.`
            : "Every puzzle is a new pattern. Fancy another round?";
        ui.bestScore.textContent = getHighScore();
        ui.bestLabel.textContent = `${ui.categorySummary.textContent} · ${ui.difficultySummary.textContent}`;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function backToCategories() {
        ui.game.classList.add("is-hidden");
        ui.results.classList.add("is-hidden");
        ui.setup.classList.remove("is-hidden");
        ui.progress.style.width = "0%";
        ui.progress.parentElement.setAttribute("aria-valuenow", "0");
        updateSetup();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function refreshQuestionLanguage() {
        const question = run[roundIndex];
        if (!question || ui.game.classList.contains("is-hidden")) return;

        ui.category.textContent = (selectedCategory === "all" ? translate("wn.category.all", "All Puzzles") : categoryName(selectedCategory)).toUpperCase();
        ui.difficulty.textContent = difficultyName(selectedDifficulty).toUpperCase();
        ui.puzzleType.textContent = categoryName(question.category).toUpperCase();
        ui.puzzle.textContent = questionText(question, "prompt", question.prompt);
        ui.answers.querySelectorAll(".wn-answer-button").forEach(button => {
            const optionIndex = Number(button.dataset.optionIndex);
            button.querySelector(".wn-answer-value").textContent = questionText(question, `option.${optionIndex}`, question.options[optionIndex]);
        });
        if (!ui.hintText.classList.contains("is-hidden")) {
            ui.hintText.textContent = questionText(question, "hint", question.hint);
        }
        if (answered) {
            const isCorrect = ui.feedback.classList.contains("is-correct");
            const answer = answerText(question);
            const explanationIntro = isCorrect
                ? translate("wn.feedback.correct", "That's it.")
                : `${translate("wn.feedback.answer", "The answer is")} ${answer}.`;
            ui.explanation.textContent = `${explanationIntro} ${questionText(question, "explanation", question.explanation)}`;
        }
    }

    ui.categoryChoices.addEventListener("click", event => {
        const button = event.target.closest("[data-category]");
        if (!button) return;
        selectedCategory = button.dataset.category;
        writeSetting("jb-wn-category", selectedCategory);
        updateSetup();
    });

    ui.difficultyChoices.addEventListener("click", event => {
        const button = event.target.closest("[data-difficulty]");
        if (!button) return;
        selectedDifficulty = button.dataset.difficulty;
        writeSetting("jb-wn-difficulty", selectedDifficulty);
        updateSetup();
    });

    ui.start.addEventListener("click", startGame);
    ui.hintButton.addEventListener("click", useHint);
    ui.next.addEventListener("click", nextQuestion);
    ui.quit.addEventListener("click", backToCategories);
    ui.playAgain.addEventListener("click", startGame);
    ui.backCategories.addEventListener("click", backToCategories);
    window.addEventListener("jb:languagechange", () => {
        updateSetup();
        refreshQuestionLanguage();
    });

    updateSetup();
})();
