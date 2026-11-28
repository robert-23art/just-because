const setupScreen = document.getElementById("setup-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const difficultyOptions = document.getElementById("difficulty-options");
const itemsList = document.getElementById("sort-items");
const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-to-setup");
const checkButton = document.getElementById("check-order");
const nextTaskButton = document.getElementById("next-task");
const playAgainButton = document.getElementById("play-again");
const resultsBackButton = document.getElementById("results-back");
const difficultyNames = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard"
};
const taskPool = window.SORT_IT_TASKS;

const state = {
    difficulty: "easy",
    score: 0,
    taskQueue: [],
    totalTasks: 0,
    completedTasks: 0,
    currentTask: null,
    order: [],
    attemptsLeft: 2,
    bestCorrectPositions: 0,
    roundComplete: false,
    newRecordFor: null,
    draggedItemId: null,
    feedbackKey: "",
    feedbackValues: {},
    feedbackIsWrong: false
};

function tr(key, fallback, values) {
    return window.JB_I18N ? window.JB_I18N.t(key, fallback, values) : fallback;
}

function currentLanguageIndex() {
    const language = window.JB_I18N ? window.JB_I18N.language : "en";
    return { en: 0, nl: 1, de: 2, fr: 3, es: 4 }[language] || 0;
}

function taskText(translations) {
    return translations[currentLanguageIndex()] || translations[0];
}

function selectedDifficulty() {
    return difficultyOptions.querySelector(".is-selected").dataset.difficulty;
}

function formatNumber(value) {
    const language = window.JB_I18N ? window.JB_I18N.language : "en";
    return new Intl.NumberFormat(language, { maximumFractionDigits: 3 }).format(value);
}

function formatTaskValue(item) {
    if (!state.currentTask) return "";
    const number = formatNumber(item.value);
    const unit = taskText(state.currentTask.unit);
    return unit ? `${number} ${unit}` : number;
}

function bestStorageKey(difficulty) {
    return `jb_sort_it_best_${difficulty}`;
}

function bestScore(difficulty = state.difficulty) {
    const stored = localStorage.getItem(bestStorageKey(difficulty));
    if (stored === null) return null;
    const best = Number(stored);
    return Number.isInteger(best) && best >= 0 ? best : null;
}

function updateBestDisplays() {
    const setupBest = bestScore(selectedDifficulty());
    const activeBest = bestScore(state.difficulty);
    document.getElementById("setup-best").textContent = setupBest === null ? "—" : formatNumber(setupBest);
    document.getElementById("game-best").textContent = activeBest === null ? "—" : formatNumber(activeBest);
    document.getElementById("results-best").textContent = activeBest === null ? "—" : formatNumber(activeBest);

    const isNewRecord = state.newRecordFor === state.difficulty;
    document.getElementById("setup-new-record").hidden = state.newRecordFor !== selectedDifficulty();
    document.getElementById("game-new-record").hidden = !isNewRecord;
    document.getElementById("results-new-record").hidden = !isNewRecord;
}

function updateScoreDisplay() {
    document.getElementById("score").textContent = formatNumber(state.score);
    document.getElementById("final-score").textContent = formatNumber(state.score);
}

function saveBestScore() {
    const best = bestScore(state.difficulty);
    if (best === null || state.score > best) {
        localStorage.setItem(bestStorageKey(state.difficulty), String(state.score));
        window.JustBecauseLeaderboard?.refresh();
        state.newRecordFor = state.difficulty;
    }
    updateBestDisplays();
}

function shuffled(items) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index--) {
        const otherIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[otherIndex]] = [result[otherIndex], result[index]];
    }
    return result;
}

function renderFeedback() {
    const feedback = document.getElementById("feedback");
    feedback.textContent = state.feedbackKey
        ? tr(state.feedbackKey, state.feedbackKey, state.feedbackValues)
        : "";
    feedback.classList.toggle("is-wrong", state.feedbackIsWrong);
}

function setFeedback(key, values = {}, isWrong = false) {
    state.feedbackKey = key;
    state.feedbackValues = values;
    state.feedbackIsWrong = isWrong;
    renderFeedback();
}

function renderQuestionProgress() {
    const number = state.completedTasks + 1;
    document.getElementById("round-label").textContent = tr("Question {number} / {total}", "Question {number} / {total}", {
        number: formatNumber(number),
        total: formatNumber(state.totalTasks)
    });
    document.getElementById("question-number").textContent = tr("QUESTION {number}", "QUESTION {number}", {
        number: formatNumber(number)
    });
}

function renderTaskCopy() {
    if (!state.currentTask) return;
    document.getElementById("task-prompt").textContent = taskText(state.currentTask.prompt);
    document.getElementById("low-label").textContent = taskText(state.currentTask.lowLabel);
    document.getElementById("high-label").textContent = taskText(state.currentTask.highLabel);
    document.getElementById("active-difficulty").textContent = tr(difficultyNames[state.difficulty], difficultyNames[state.difficulty]);
    itemsList.setAttribute("aria-label", tr("Items to sort", "Items to sort"));
    renderQuestionProgress();
    refreshItemCards();
}

function updateItemControls() {
    [...itemsList.children].forEach((card, index) => {
        card.draggable = !state.roundComplete;
        const up = card.querySelector('[data-direction="up"]');
        const down = card.querySelector('[data-direction="down"]');
        up.disabled = state.roundComplete || index === 0;
        down.disabled = state.roundComplete || index === state.order.length - 1;
        card.querySelector(".sort-it-position").textContent = formatNumber(index + 1);
    });
}

function refreshItemCards() {
    [...itemsList.children].forEach(card => {
        const item = state.order.find(entry => entry.id === card.dataset.itemId);
        if (!item) return;
        card.querySelector(".sort-it-item-copy strong").textContent = taskText(item.name);
        const value = card.querySelector(".sort-it-item-copy small");
        value.textContent = formatTaskValue(item);
        const up = card.querySelector('[data-direction="up"]');
        const down = card.querySelector('[data-direction="down"]');
        up.setAttribute("aria-label", tr("Move {item} up", "Move {item} up", { item: taskText(item.name) }));
        down.setAttribute("aria-label", tr("Move {item} down", "Move {item} down", { item: taskText(item.name) }));
    });
    updateItemControls();
}

function clearItemFeedback() {
    [...itemsList.children].forEach(card => {
        card.classList.remove("is-correct", "is-wrong");
        card.querySelector(".sort-it-item-copy small").hidden = true;
    });
}

function createItemCard(item) {
    const card = document.createElement("li");
    const position = document.createElement("span");
    const copy = document.createElement("span");
    const name = document.createElement("strong");
    const value = document.createElement("small");
    const controls = document.createElement("span");
    card.className = "sort-it-item";
    card.dataset.itemId = item.id;
    card.draggable = !state.roundComplete;
    position.className = "sort-it-position";
    copy.className = "sort-it-item-copy";
    name.textContent = taskText(item.name);
    value.hidden = true;
    copy.append(name, value);
    controls.className = "sort-it-item-controls";

    for (const [direction, offset, icon] of [["up", -1, "↑"], ["down", 1, "↓"]]) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "sort-it-move-button";
        button.dataset.direction = direction;
        button.textContent = icon;
        button.addEventListener("click", () => {
            const from = state.order.findIndex(entry => entry.id === item.id);
            moveItem(from, from + offset, direction, item.id);
        });
        controls.append(button);
    }

    card.append(position, copy, controls);
    card.addEventListener("dragstart", event => {
        if (state.roundComplete) {
            event.preventDefault();
            return;
        }
        state.draggedItemId = item.id;
        card.classList.add("is-dragging");
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", item.id);
    });
    card.addEventListener("dragover", event => {
        if (state.roundComplete) return;
        event.preventDefault();
        card.classList.add("is-drop-target");
    });
    card.addEventListener("dragleave", () => card.classList.remove("is-drop-target"));
    card.addEventListener("drop", event => {
        event.preventDefault();
        card.classList.remove("is-drop-target");
        if (state.roundComplete) return;
        const draggedId = state.draggedItemId || event.dataTransfer.getData("text/plain");
        const from = state.order.findIndex(entry => entry.id === draggedId);
        const to = state.order.findIndex(entry => entry.id === item.id);
        moveItem(from, to, "", draggedId);
    });
    card.addEventListener("dragend", () => {
        state.draggedItemId = null;
        card.classList.remove("is-dragging");
        [...itemsList.children].forEach(entry => entry.classList.remove("is-drop-target"));
    });
    return card;
}

function renderItems() {
    itemsList.replaceChildren(...state.order.map(createItemCard));
    refreshItemCards();
}

function moveItem(from, to, direction, itemId) {
    if (state.roundComplete || from < 0 || to < 0 || to >= state.order.length || from === to) return;
    const [item] = state.order.splice(from, 1);
    state.order.splice(to, 0, item);
    const cardsById = new Map([...itemsList.children].map(card => [card.dataset.itemId, card]));
    state.order.forEach(entry => itemsList.append(cardsById.get(entry.id)));
    clearItemFeedback();
    if (state.attemptsLeft < 2) {
        setFeedback("Reorder the cards and try once more.");
    } else {
        setFeedback("");
    }
    refreshItemCards();
    if (direction) {
        const movedCard = [...itemsList.children].find(card => card.dataset.itemId === itemId);
        const requestedButton = movedCard.querySelector(`[data-direction="${direction}"]`);
        const fallbackButton = movedCard.querySelector(`[data-direction="${direction === "up" ? "down" : "up"}"]`);
        (requestedButton.disabled ? fallbackButton : requestedButton).focus();
    }
}

function renderCheckedOrder(correctCount, revealAllValues) {
    const correctOrder = state.currentTask.items.slice().sort((first, second) => first.value - second.value);
    [...itemsList.children].forEach((card, index) => {
        const item = state.order[index];
        const correct = item.id === correctOrder[index].id;
        card.classList.toggle("is-correct", correct);
        card.classList.toggle("is-wrong", !correct);
        const value = card.querySelector(".sort-it-item-copy small");
        value.hidden = !correct && !revealAllValues;
        value.textContent = formatTaskValue(item);
    });
    state.bestCorrectPositions = Math.max(state.bestCorrectPositions, correctCount);
}

function updateAttemptCount() {
    document.getElementById("attempts-left").textContent = formatNumber(state.attemptsLeft);
}

function finishCurrentTask() {
    state.roundComplete = true;
    state.completedTasks++;
    window.DailyChallenge?.report("sort-it", state.completedTasks);
    const points = state.bestCorrectPositions * 2;
    state.score += points;
    updateScoreDisplay();
    saveBestScore();
    updateItemControls();
    checkButton.hidden = true;
    nextTaskButton.hidden = false;
    if (state.bestCorrectPositions === state.currentTask.items.length) {
        setFeedback("All positions correct! +{points} points.", { points: formatNumber(points) });
    } else {
        setFeedback("You got {correct} positions right: +{points} points.", {
            correct: formatNumber(state.bestCorrectPositions),
            points: formatNumber(points)
        }, true);
    }
}

function checkOrder() {
    if (state.roundComplete || !state.currentTask) return;
    const correctOrder = state.currentTask.items.slice().sort((first, second) => first.value - second.value);
    const correctCount = state.order.reduce((count, item, index) => (
        count + Number(item.id === correctOrder[index].id)
    ), 0);
    state.attemptsLeft--;
    renderCheckedOrder(correctCount, state.attemptsLeft === 0 || correctCount === state.order.length);
    updateAttemptCount();

    if (correctCount === state.order.length || state.attemptsLeft === 0) {
        finishCurrentTask();
        return;
    }
    setFeedback("You got {correct} positions right. One chance left.", {
        correct: formatNumber(correctCount)
    }, true);
}

function loadNextTask() {
    if (!state.taskQueue.length) {
        showResults();
        return;
    }
    state.currentTask = state.taskQueue.shift();
    state.order = shuffled(state.currentTask.items);
    const correctOrder = state.currentTask.items.slice().sort((first, second) => first.value - second.value);
    if (state.order.every((item, index) => item.id === correctOrder[index].id)) {
        state.order.push(state.order.shift());
    }
    state.attemptsLeft = 2;
    state.bestCorrectPositions = 0;
    state.roundComplete = false;
    state.feedbackKey = "";
    state.feedbackValues = {};
    state.feedbackIsWrong = false;
    checkButton.hidden = false;
    nextTaskButton.hidden = true;
    nextTaskButton.textContent = tr(state.taskQueue.length ? "Next task" : "See results", state.taskQueue.length ? "Next task" : "See results");
    document.getElementById("attempts-label").textContent = tr("Chances left", "Chances left");
    updateAttemptCount();
    renderTaskCopy();
    renderItems();
    renderFeedback();
    updateScoreDisplay();
}

function startGame() {
    window.JustBecauseProfile?.recordGame("sort-it");
    state.difficulty = selectedDifficulty();
    state.score = 0;
    state.completedTasks = 0;
    state.taskQueue = shuffled(taskPool.filter(task => task.difficulty === state.difficulty));
    state.totalTasks = state.taskQueue.length;
    state.currentTask = null;
    state.order = [];
    state.newRecordFor = null;
    setupScreen.hidden = true;
    resultsScreen.hidden = true;
    gameScreen.hidden = false;
    updateScoreDisplay();
    updateBestDisplays();
    loadNextTask();
}

function showResults() {
    gameScreen.hidden = true;
    setupScreen.hidden = true;
    resultsScreen.hidden = false;
    document.getElementById("results-copy").textContent = tr("You sorted {count} tasks and scored {score} points.", "You sorted {count} tasks and scored {score} points.", {
        count: formatNumber(state.completedTasks),
        score: formatNumber(state.score)
    });
    document.getElementById("results-best-label").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    document.getElementById("final-score-label").textContent = tr("POINTS", "POINTS");
    updateScoreDisplay();
    updateBestDisplays();
}

function returnToSetup() {
    state.currentTask = null;
    state.order = [];
    setupScreen.hidden = false;
    gameScreen.hidden = true;
    resultsScreen.hidden = true;
    updateBestDisplays();
}

function renderStaticUi() {
    document.title = tr("Sort It — Sorting Puzzle | Just Because Games", "Sort It — Sorting Puzzle | Just Because Games");
    document.querySelector(".back-link").textContent = `← ${tr("back home", "back home")}`;
    document.getElementById("sort-it-kicker").textContent = `${tr("A LITTLE GAME · NO.", "A LITTLE GAME · NO.")} 11`;
    const title = document.getElementById("sort-it-title");
    title.textContent = tr("Sort It", "Sort It");
    const period = document.createElement("span");
    period.textContent = ".";
    title.append(period);
    document.getElementById("sort-it-intro-copy").textContent = tr("Put things in the right order.", "Put things in the right order.");
    document.getElementById("setup-eyebrow").textContent = tr("YOUR CHOICE", "YOUR CHOICE");
    document.getElementById("setup-heading").textContent = tr("Choose your difficulty.", "Choose your difficulty.");
    difficultyOptions.setAttribute("aria-label", tr("Choose your difficulty", "Choose your difficulty"));
    const descriptions = {
        easy: "4 items · relaxed",
        medium: "5 items · steady",
        hard: "6 items · subtle differences"
    };
    difficultyOptions.querySelectorAll(".sort-it-difficulty-card").forEach(button => {
        const difficulty = button.dataset.difficulty;
        button.querySelector("strong").textContent = tr(difficultyNames[difficulty], difficultyNames[difficulty]);
        button.querySelector("small").textContent = tr(descriptions[difficulty], descriptions[difficulty]);
    });
    document.getElementById("setup-best-label").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    document.getElementById("best-note").textContent = tr("Best score on this device.", "Best score on this device.");
    startButton.querySelector("span").textContent = tr("START PLAYING", "START PLAYING");
    backButton.textContent = `← ${tr("Back to settings", "Back to settings")}`;
    document.getElementById("game-best-label").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    document.getElementById("score-label").textContent = tr("SCORE", "SCORE");
    document.getElementById("sort-instructions").textContent = tr("Drag cards or use the arrows to sort them.", "Drag cards or use the arrows to sort them.");
    gameScreen.setAttribute("aria-label", tr("Sorting puzzle", "Sorting puzzle"));
    checkButton.textContent = tr("Check Order", "Check Order");
    document.getElementById("results-kicker").textContent = tr("THAT'S A WRAP", "THAT'S A WRAP");
    document.getElementById("results-title").textContent = tr("Nicely sorted.", "Nicely sorted.");
    document.getElementById("final-score-label").textContent = tr("POINTS", "POINTS");
    playAgainButton.querySelector("span").textContent = tr("Play Again", "Play Again");
    resultsBackButton.textContent = tr("Change difficulty", "Change difficulty");
    document.querySelectorAll(".sort-it-record-badge").forEach(badge => {
        badge.textContent = tr("New record!", "New record!");
    });
    if (state.currentTask) renderTaskCopy();
    renderFeedback();
    updateBestDisplays();
}

difficultyOptions.addEventListener("click", event => {
    const button = event.target.closest(".sort-it-difficulty-card");
    if (!button) return;
    difficultyOptions.querySelectorAll(".sort-it-difficulty-card").forEach(option => {
        const selected = option === button;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-pressed", String(selected));
    });
    state.difficulty = button.dataset.difficulty;
    updateBestDisplays();
});

startButton.addEventListener("click", startGame);
backButton.addEventListener("click", returnToSetup);
checkButton.addEventListener("click", checkOrder);
nextTaskButton.addEventListener("click", loadNextTask);
playAgainButton.addEventListener("click", startGame);
resultsBackButton.addEventListener("click", returnToSetup);
window.addEventListener("jb:languagechange", renderStaticUi);

renderStaticUi();
