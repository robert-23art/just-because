(() => {
    "use strict";

    const data = typeof ODD_ONE_OUT_DATA === "undefined" ? null : ODD_ONE_OUT_DATA;
    const categoryMap = new Map((data?.categories || []).map(category => [category.id, category.name]));
    const questionsPerCategory = data?.questionsPerCategory || 0;
    const questions = (data?.questions || []).map((row, index) => {
        const category = data.categories[Math.floor(index / questionsPerCategory)];
        return {
            id: `${category?.id || "unknown"}-${(index % questionsPerCategory) + 1}`,
            category: category?.id || "",
            translationIndex: index + 1,
            difficulty: row[0],
            choices: row[1],
            odd: row[2],
            group: row[3],
            explanation: row[4]
        };
    });
    const roundsPerGame = data?.roundsPerGame || 10;
    const difficultyNames = { all: "All difficulties", easy: "Easy", medium: "Medium", hard: "Hard" };
    const difficultyCaptions = {
        all: "A little of everything",
        easy: "Clear links and familiar answers",
        medium: "Look for the less obvious connection",
        hard: "Take your time and think it through"
    };
    const elements = {
        setup: document.getElementById("ooo-setup"),
        categoryGrid: document.getElementById("ooo-category-grid"),
        difficultyOptions: document.getElementById("ooo-difficulty-options"),
        difficultyCaption: document.getElementById("ooo-difficulty-caption"),
        bestScore: document.getElementById("ooo-best-score"),
        bestLabel: document.getElementById("ooo-best-label"),
        setupMessage: document.getElementById("ooo-setup-message"),
        start: document.getElementById("ooo-start-button"),
        game: document.getElementById("ooo-game"),
        roundCategory: document.getElementById("ooo-round-category"),
        roundDifficulty: document.getElementById("ooo-round-difficulty"),
        roundNumber: document.getElementById("ooo-round-number"),
        score: document.getElementById("ooo-score"),
        streak: document.getElementById("ooo-streak"),
        answerGrid: document.getElementById("ooo-answer-grid"),
        feedback: document.getElementById("ooo-feedback"),
        feedbackMark: document.getElementById("ooo-feedback-mark"),
        feedbackHeading: document.getElementById("ooo-feedback-heading"),
        pointsEarned: document.getElementById("ooo-points-earned"),
        answerReveal: document.getElementById("ooo-answer-reveal"),
        explanation: document.getElementById("ooo-explanation"),
        streakNote: document.getElementById("ooo-streak-note"),
        next: document.getElementById("ooo-next-button"),
        back: document.getElementById("ooo-back-button"),
        results: document.getElementById("ooo-results"),
        resultTitle: document.getElementById("ooo-result-title"),
        finalScore: document.getElementById("ooo-final-score"),
        correctTotal: document.getElementById("ooo-correct-total"),
        wrongTotal: document.getElementById("ooo-wrong-total"),
        accuracy: document.getElementById("ooo-accuracy"),
        bestStreak: document.getElementById("ooo-best-streak"),
        resultMessage: document.getElementById("ooo-result-message"),
        playAgain: document.getElementById("ooo-play-again"),
        backToCategories: document.getElementById("ooo-back-to-categories")
    };

    let selectedCategory = readStorage("jb-ooo-category") || "all";
    let selectedDifficulty = readStorage("jb-ooo-difficulty") || "all";
    let runQuestions = [];
    let roundIndex = 0;
    let score = 0;
    let streak = 0;
    let bestStreak = 0;
    let correctCount = 0;
    let currentQuestion = null;
    let answered = false;
    let selectedAnswer = null;
    let earnedPoints = 0;
    let streakMessageKey = "";
    let streakMessageCount = 0;

    function translate(key, fallback) {
        return window.JB_I18N?.t ? window.JB_I18N.t(key, fallback) : fallback;
    }

    function format(key, fallback, values) {
        return Object.entries(values).reduce(
            (text, [name, value]) => text.replaceAll(`__${name.toUpperCase()}__`, value),
            translate(key, fallback)
        );
    }

    function categoryName(id) {
        const category = data.categories.find(item => item.id === id);
        return category ? translate(`ooo.category.${id}`, category.name) : "";
    }

    function difficultyName(id) {
        return translate(`ooo.difficulty.${id}`, difficultyNames[id] || id);
    }

    function questionText(field, fallback) {
        return translate(`ooo.q.${currentQuestion.translationIndex}.${field}`, fallback);
    }

    function readStorage(key) {
        try { return window.localStorage.getItem(key); } catch { return null; }
    }

    function writeStorage(key, value) {
        try { window.localStorage.setItem(key, String(value)); } catch { /* The game still works if storage is unavailable. */ }
    }

    function shuffle(items) {
        const result = [...items];
        for (let index = result.length - 1; index > 0; index--) {
            const other = Math.floor(Math.random() * (index + 1));
            [result[index], result[other]] = [result[other], result[index]];
        }
        return result;
    }

    function validateDataset() {
        const ids = new Set();
        for (const question of questions) {
            const valid = question.id && categoryMap.has(question.category) &&
                ["easy", "medium", "hard"].includes(question.difficulty) &&
                Array.isArray(question.choices) && question.choices.length === 4 &&
                new Set(question.choices.map(choice => choice.trim().toLowerCase())).size === 4 &&
                question.choices.filter(choice => choice === question.odd).length === 1 &&
                question.group && question.explanation && !ids.has(question.id);
            if (!valid) throw new Error(`Invalid Odd One Out question: ${question.id || "missing id"}`);
            ids.add(question.id);
        }
    }

    function matchingQuestions() {
        return questions.filter(question =>
            (selectedCategory === "all" || question.category === selectedCategory) &&
            (selectedDifficulty === "all" || question.difficulty === selectedDifficulty)
        );
    }

    function chooseRun(pool, targetRounds) {
        if (selectedCategory === "all") {
            const categoryIds = shuffle([...new Set(pool.map(question => question.category))]);
            const picked = [];
            const difficultyPattern = ["easy", "medium", "hard", "easy", "medium", "hard", "easy", "medium", "easy", "hard"];
            for (let index = 0; index < Math.min(targetRounds, categoryIds.length); index++) {
                const category = categoryIds[index];
                const preferredDifficulty = selectedDifficulty === "all" ? difficultyPattern[index] : selectedDifficulty;
                const options = shuffle(pool.filter(question =>
                    question.category === category && question.difficulty === preferredDifficulty
                ));
                const fallback = shuffle(pool.filter(question => question.category === category));
                const next = options[0] || fallback[0];
                if (next) picked.push(next);
            }
            const remaining = shuffle(pool.filter(question => !picked.some(item => item.id === question.id)));
            return shuffle([...picked, ...remaining.slice(0, targetRounds - picked.length)]);
        }

        if (selectedDifficulty === "all") {
            const buckets = {
                easy: shuffle(pool.filter(question => question.difficulty === "easy")),
                medium: shuffle(pool.filter(question => question.difficulty === "medium")),
                hard: shuffle(pool.filter(question => question.difficulty === "hard"))
            };
            const picked = [];
            const pattern = ["easy", "medium", "hard", "easy", "medium", "hard", "easy", "medium", "easy", "hard"];
            for (const level of pattern.slice(0, targetRounds)) if (buckets[level].length) picked.push(buckets[level].pop());
            const pickedIds = new Set(picked.map(question => question.id));
            return shuffle([...picked, ...shuffle(pool.filter(question => !pickedIds.has(question.id))).slice(0, targetRounds - picked.length)]);
        }

        return shuffle(pool).slice(0, roundsPerGame);
    }

    function highScoreKey() {
        return `jb-ooo-score-${selectedCategory}-${selectedDifficulty}`;
    }

    function updateBestScore() {
        const score = Number(readStorage(highScoreKey())) || 0;
        elements.bestScore.textContent = score;
        const category = selectedCategory === "all"
            ? translate("ooo.ui.allCategories", "All Categories")
            : categoryName(selectedCategory);
        elements.bestLabel.textContent = `${category} · ${difficultyName(selectedDifficulty)}`;
    }

    function updateSetup() {
        const counts = new Map();
        for (const question of questions) {
            if (selectedDifficulty === "all" || question.difficulty === selectedDifficulty) {
                counts.set(question.category, (counts.get(question.category) || 0) + 1);
            }
        }
        const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
        elements.categoryGrid.querySelector('[data-category-count="all"]').textContent = total;
        elements.categoryGrid.querySelectorAll("[data-category-count]").forEach(label => {
            const id = label.dataset.categoryCount;
            if (id !== "all") label.textContent = counts.get(id) || 0;
        });
        elements.categoryGrid.querySelectorAll(".ooo-category-card").forEach(card => {
            const isSelected = card.dataset.category === selectedCategory;
            card.classList.toggle("is-selected", isSelected);
            card.setAttribute("aria-pressed", String(isSelected));
            const label = card.querySelector(".ooo-category-copy strong");
            if (label) {
                label.textContent = card.dataset.category === "all"
                    ? translate("ooo.ui.allCategories", "All Categories")
                    : categoryName(card.dataset.category);
            }
            const countLabel = card.querySelector(".ooo-category-copy small");
            if (countLabel) {
                const countText = countLabel.lastChild;
                if (countText && countText.nodeType === Node.TEXT_NODE) {
                    countText.textContent = ` ${translate("ooo.ui.questions", "questions")}`;
                }
            }
        });
        elements.difficultyOptions.querySelectorAll(".ooo-difficulty-button").forEach(button => {
            const isSelected = button.dataset.difficulty === selectedDifficulty;
            button.classList.toggle("is-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
            button.textContent = difficultyName(button.dataset.difficulty);
        });
        const captionKey = `ooo.ui.caption${selectedDifficulty[0].toUpperCase()}${selectedDifficulty.slice(1)}`;
        elements.difficultyCaption.textContent = translate(captionKey, difficultyCaptions[selectedDifficulty]);
        const runLength = Math.min(roundsPerGame, total);
        elements.setupMessage.textContent = format(
            "ooo.ui.setupAvailable",
            "__TOTAL__ curated questions available · __RUN__ questions in a run.",
            { total, run: runLength }
        );
        elements.start.disabled = total === 0;
        const statLabels = elements.game.querySelectorAll(".ooo-live-stats > span");
        ["round", "score", "streak"].forEach((key, index) => {
            const label = statLabels[index]?.firstChild;
            if (label && label.nodeType === Node.TEXT_NODE) {
                label.textContent = ` ${translate(`ooo.ui.${key}`, key.toUpperCase())} `;
            }
        });
        const resultStats = elements.results.querySelectorAll(".ooo-result-stats > div > span");
        ["correctLabel", "wrongLabel", "accuracyLabel", "bestStreakLabel"].forEach((key, index) => {
            if (resultStats[index]) {
                resultStats[index].textContent = translate(`ooo.ui.${key}`, resultStats[index].textContent);
            }
        });
        const resultEyebrow = elements.results.querySelector(".eyebrow");
        if (resultEyebrow) resultEyebrow.textContent = translate("ooo.ui.thatWrap", "THAT'S A WRAP");
        const pointsLabel = elements.results.querySelector(".ooo-result-score span");
        if (pointsLabel) pointsLabel.textContent = translate("ooo.ui.pointsLabel", "POINTS");
        const backLabel = translate("ooo.ui.backToCategories", "← Back to categories");
        elements.back.textContent = backLabel;
        const playAgainLabel = elements.playAgain.querySelector("span");
        if (playAgainLabel) playAgainLabel.textContent = translate("ooo.ui.playAgain", "PLAY AGAIN");
        elements.backToCategories.textContent = backLabel;
        updateBestScore();
    }

    function startGame() {
        const pool = matchingQuestions();
        if (!pool.length) {
            elements.setupMessage.textContent = translate(
                "ooo.ui.noQuestions",
                "There are no questions for this selection yet."
            );
            return;
        }
        const targetRounds = Math.min(roundsPerGame, pool.length);
        runQuestions = chooseRun(pool, targetRounds);
        if (new Set(runQuestions.map(question => question.id)).size !== targetRounds) {
            elements.setupMessage.textContent = translate(
                "ooo.ui.notEnoughQuestions",
                "There are not enough unique questions for this selection yet."
            );
            return;
        }
        roundIndex = 0;
        score = 0;
        streak = 0;
        bestStreak = 0;
        correctCount = 0;
        elements.setup.classList.add("is-hidden");
        elements.results.classList.add("is-hidden");
        elements.game.classList.remove("is-hidden");
        renderRound();
    }

    function renderRound() {
        currentQuestion = runQuestions[roundIndex];
        answered = false;
        selectedAnswer = null;
        elements.roundCategory.textContent = categoryName(currentQuestion.category).toUpperCase();
        elements.roundDifficulty.textContent = difficultyName(currentQuestion.difficulty).toUpperCase();
        elements.roundDifficulty.dataset.level = currentQuestion.difficulty;
        elements.roundNumber.textContent = `${roundIndex + 1} / ${runQuestions.length}`;
        elements.score.textContent = score;
        elements.streak.textContent = streak;
        elements.answerGrid.replaceChildren();
        elements.feedback.classList.add("is-hidden");
        elements.next.classList.add("is-hidden");

        shuffle(currentQuestion.choices).forEach((choice, index) => {
            const translatedChoice = questionText(`choice.${currentQuestion.choices.indexOf(choice)}`, choice);
            const button = document.createElement("button");
            button.type = "button";
            button.className = "ooo-answer-card";
            button.dataset.choice = choice;
            button.setAttribute("aria-label", format(
                "ooo.ui.option",
                "Option __LETTER__: __CHOICE__",
                { letter: String.fromCharCode(65 + index), choice: translatedChoice }
            ));
            button.innerHTML = `<span class="ooo-choice-letter">${String.fromCharCode(65 + index)}</span><span class="ooo-choice-text"></span><span class="ooo-choice-mark" aria-hidden="true"></span>`;
            button.querySelector(".ooo-choice-text").textContent = translatedChoice;
            button.addEventListener("click", () => selectAnswer(choice));
            elements.answerGrid.append(button);
        });
    }

    function renderFeedback() {
        const isCorrect = selectedAnswer === currentQuestion.odd;
        const optionButtons = [...elements.answerGrid.querySelectorAll(".ooo-answer-card")];
        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.dataset.choice === currentQuestion.odd) {
                button.classList.add("is-correct");
                button.querySelector(".ooo-choice-mark").textContent = "✓";
            } else if (button.dataset.choice === selectedAnswer && !isCorrect) {
                button.classList.add("is-wrong");
                button.querySelector(".ooo-choice-mark").textContent = "×";
            }
        });

        elements.score.textContent = score;
        elements.streak.textContent = streak;
        elements.feedback.classList.remove("is-hidden", "is-correct", "is-wrong");
        elements.feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
        elements.feedbackMark.textContent = isCorrect ? "✓" : "!";
        elements.feedbackHeading.textContent = translate(
            isCorrect ? "ooo.ui.correct" : "ooo.ui.incorrect",
            isCorrect ? "Correct!" : "Not quite!"
        );
        elements.pointsEarned.textContent = isCorrect ? `+${earnedPoints}` : "+0";
        elements.answerReveal.textContent = format(
            "ooo.ui.answerReveal",
            "__ANSWER__ is the odd one out.",
            { answer: questionText("odd", currentQuestion.odd) }
        );
        elements.explanation.textContent = questionText("explanation", currentQuestion.explanation);
        elements.streakNote.textContent = !streakMessageKey
            ? ""
            : streakMessageKey === "ooo.ui.streakNew" || streakMessageKey === "ooo.ui.streakReset"
                ? translate(streakMessageKey, "")
                : format(
                    streakMessageKey,
                    streakMessageKey === "ooo.ui.streakContinue"
                        ? "__COUNT__ in a row — keep it going!"
                        : "Your __COUNT__-answer streak ends here.",
                    { count: streakMessageCount }
                );
        elements.next.classList.remove("is-hidden");
        elements.next.querySelector("span").textContent = translate(
            roundIndex + 1 === runQuestions.length ? "ooo.ui.seeResults" : "ooo.ui.nextQuestion",
            roundIndex + 1 === runQuestions.length ? "See Results" : "Next Question"
        );
    }

    function selectAnswer(choice) {
        if (answered || !currentQuestion) return;
        answered = true;
        selectedAnswer = choice;
        const isCorrect = choice === currentQuestion.odd;
        earnedPoints = 0;
        streakMessageKey = "";
        streakMessageCount = 0;

        if (isCorrect) {
            streak++;
            correctCount++;
            window.DailyChallenge?.report("odd-one-out", correctCount);
            bestStreak = Math.max(bestStreak, streak);
            earnedPoints = 100 + Math.min(Math.max(streak - 1, 0) * 10, 50);
            score += earnedPoints;
            streakMessageKey = streak === 2
                ? "ooo.ui.streakNew"
                : streak >= 3 ? "ooo.ui.streakContinue" : "";
            streakMessageCount = streak;
        } else {
            streakMessageKey = streak > 0 ? "ooo.ui.streakEnds" : "ooo.ui.streakReset";
            streakMessageCount = streak;
            streak = 0;
        }

        renderFeedback();
        if (score > (Number(readStorage(highScoreKey())) || 0)) {
            writeStorage(highScoreKey(), score);
        }
        updateBestScore();
    }

    function nextQuestion() {
        if (!answered) return;
        roundIndex++;
        if (roundIndex >= runQuestions.length) {
            showResults();
            return;
        }
        renderRound();
        elements.game.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function showResults() {
        elements.game.classList.add("is-hidden");
        elements.results.classList.remove("is-hidden");
        const wrongCount = runQuestions.length - correctCount;
        const accuracy = Math.round(correctCount / runQuestions.length * 100);
        elements.finalScore.textContent = score;
        elements.correctTotal.textContent = `${correctCount} / ${runQuestions.length}`;
        elements.wrongTotal.textContent = wrongCount;
        elements.accuracy.textContent = `${accuracy}%`;
        elements.bestStreak.textContent = bestStreak;

        if (accuracy === 100) {
            elements.resultTitle.textContent = translate("ooo.ui.resultPerfectTitle", "Amazing!");
            elements.resultMessage.textContent = translate(
                "ooo.ui.resultPerfectMessage",
                "A perfect run. You spotted every connection."
            );
        } else if (accuracy >= 70) {
            elements.resultTitle.textContent = translate("ooo.ui.resultGreatTitle", "Great job!");
            elements.resultMessage.textContent = translate(
                "ooo.ui.resultGreatMessage",
                "Sharp thinking. You found most of the odd ones out."
            );
        } else if (accuracy >= 40) {
            elements.resultTitle.textContent = translate("ooo.ui.resultNiceTitle", "Nice try!");
            elements.resultMessage.textContent = translate(
                "ooo.ui.resultNiceMessage",
                "Every round is a new pattern to spot. Keep going."
            );
        } else {
            elements.resultTitle.textContent = translate("ooo.ui.resultPracticeTitle", "Keep practicing!");
            elements.resultMessage.textContent = translate(
                "ooo.ui.resultPracticeMessage",
                "The connections get easier to spot with each run."
            );
        }
        updateBestScore();
    }

    function backToSetup() {
        elements.game.classList.add("is-hidden");
        elements.results.classList.add("is-hidden");
        elements.setup.classList.remove("is-hidden");
        updateSetup();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    elements.categoryGrid.addEventListener("click", event => {
        const card = event.target.closest(".ooo-category-card");
        if (!card) return;
        selectedCategory = card.dataset.category;
        writeStorage("jb-ooo-category", selectedCategory);
        updateSetup();
    });

    elements.difficultyOptions.addEventListener("click", event => {
        const button = event.target.closest(".ooo-difficulty-button");
        if (!button) return;
        selectedDifficulty = button.dataset.difficulty;
        writeStorage("jb-ooo-difficulty", selectedDifficulty);
        updateSetup();
    });

    elements.start.addEventListener("click", startGame);
    elements.next.addEventListener("click", nextQuestion);
    elements.back.addEventListener("click", backToSetup);
    elements.playAgain.addEventListener("click", startGame);
    elements.backToCategories.addEventListener("click", backToSetup);

    window.addEventListener("jb:languagechange", () => {
        updateSetup();
        if (!elements.game.classList.contains("is-hidden") && currentQuestion) {
            const wasAnswered = answered;
            renderRound();
            if (wasAnswered) {
                answered = true;
                renderFeedback();
            }
        }
        if (!elements.results.classList.contains("is-hidden")) showResults();
    });

    try {
        if (!categoryMap.has(selectedCategory) && selectedCategory !== "all") selectedCategory = "all";
        if (!difficultyNames[selectedDifficulty]) selectedDifficulty = "all";
        validateDataset();
    } catch (error) {
        elements.setupMessage.textContent = translate(
            "ooo.ui.repair",
            "The question set needs a quick repair before this game can start."
        );
        elements.start.disabled = true;
        console.error(error);
    }

    updateSetup();
})();
