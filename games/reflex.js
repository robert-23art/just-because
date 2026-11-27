const setupScreen = document.getElementById("setup-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const modeOptions = document.getElementById("mode-options");
const startButton = document.getElementById("start-button");
const pad = document.getElementById("reflex-pad");
const signalMark = document.getElementById("signal-mark");
const signalStatus = document.getElementById("signal-status");
const signalHint = document.getElementById("signal-hint");
const roundLabel = document.getElementById("round-label");
const activeModeLabel = document.getElementById("active-mode-label");
const averageTime = document.getElementById("average-time");
const gameBest = document.getElementById("game-best");
const roundResult = document.getElementById("round-result");
const roundHistory = document.getElementById("round-history");
const roundCount = document.getElementById("round-count");
const nextRoundButton = document.getElementById("next-round");
const finishEndlessButton = document.getElementById("finish-endless");
const backButton = document.getElementById("back-to-setup");
const playAgainButton = document.getElementById("play-again");
const resultsBackButton = document.getElementById("results-back");
const bestStoragePrefix = "jb_reflex_best_ms_";
const modeStorageKey = "jb_reflex_mode";

const state = {
    mode: "classic",
    newRecordMode: null,
    phase: "idle",
    round: 0,
    times: [],
    timer: null,
    greenAt: 0,
    fakeoutsRemaining: 0,
    fakeType: "",
    lastReaction: null,
    ratingKey: ""
};

const savedMode = localStorage.getItem(modeStorageKey);
if (["classic", "hard", "endless"].includes(savedMode)) {
    state.mode = savedMode;
    modeOptions.querySelectorAll(".reflex-mode-card").forEach(button => {
        const selected = button.dataset.mode === state.mode;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
}

function tr(key, fallback, values) {
    return window.JB_I18N ? window.JB_I18N.t(key, fallback, values) : fallback;
}

function selectedMode() {
    return modeOptions.querySelector(".is-selected").dataset.mode;
}

function modeName(mode) {
    const labels = {
        classic: ["Classic", "Classic"],
        hard: ["Hard / Fake-Out", "Hard / Fake-Out"],
        endless: ["Endless", "Endless"]
    };
    const label = labels[mode] || labels.classic;
    return tr(label[0], label[1]);
}

function formatMs(value) {
    const language = window.JB_I18N ? window.JB_I18N.language : "en";
    return `${new Intl.NumberFormat(language, { maximumFractionDigits: 0 }).format(value)} ms`;
}

function averageTimeMs() {
    if (!state.times.length) return null;
    return Math.round(state.times.reduce((total, value) => total + value, 0) / state.times.length);
}

function bestTimeMs(mode = state.mode) {
    const stored = localStorage.getItem(`${bestStoragePrefix}${mode}`)
        ?? (mode === "classic" ? localStorage.getItem("jb_reflex_best_ms") : null);
    if (stored === null) return null;
    const saved = Number(stored);
    return Number.isFinite(saved) && saved >= 0 ? saved : null;
}

function renderRecordBadges() {
    const isNewRecord = state.newRecordMode === state.mode;
    document.getElementById("setup-new-record").hidden = !isNewRecord;
    document.getElementById("game-new-record").hidden = !isNewRecord;
    document.getElementById("results-new-record").hidden = !isNewRecord;
}

function clearSignalTimer() {
    if (state.timer !== null) {
        clearTimeout(state.timer);
        state.timer = null;
    }
}

function setPadState(className, mark) {
    pad.classList.remove("is-waiting", "is-target", "is-fake-red", "is-fake-orange", "is-fake-shape", "is-early", "is-result");
    if (className) pad.classList.add(className);
    signalMark.textContent = mark;
}

function renderHistory(list, entries) {
    list.replaceChildren();
    entries.forEach((time, index) => {
        const item = document.createElement("li");
        const label = tr("Round {round}", "Round {round}", { round: index + 1 });
        item.textContent = `${label} · ${formatMs(time)}`;
        list.append(item);
    });
}

function renderStatus() {
    if (state.phase === "waiting") {
        signalStatus.textContent = tr("Wait for green...", "Wait for green...");
        signalHint.textContent = tr("Don't click until the light turns green.", "Don't click until the light turns green.");
    } else if (state.phase === "fake") {
        signalStatus.textContent = tr("Fake-out! Don't click!", "Fake-out! Don't click!");
        signalHint.textContent = tr("That was a fake signal. Keep waiting for green.", "That was a fake signal. Keep waiting for green.");
    } else if (state.phase === "green") {
        signalStatus.textContent = tr("CLICK NOW!", "CLICK NOW!");
        signalHint.textContent = tr("Tap the green panel now.", "Tap the green panel now.");
    } else if (state.phase === "retry") {
        signalStatus.textContent = tr(state.fakeType === "fake" ? "Fake-out! Don't click!" : "Too early! Wait for green.", state.fakeType === "fake" ? "Fake-out! Don't click!" : "Too early! Wait for green.");
        signalHint.textContent = tr("Resetting this round. Get ready...", "Resetting this round. Get ready...");
    } else if (state.phase === "result" && state.lastReaction !== null) {
        const rating = tr(state.ratingKey, state.ratingKey);
        signalStatus.textContent = tr("{ms} ms — {rating}", "{ms} ms — {rating}", {
            ms: formatMs(state.lastReaction).replace(" ms", ""),
            rating
        });
        signalHint.textContent = tr("Nice one. Take a breath before the next round.", "Nice one. Take a breath before the next round.");
    } else {
        signalStatus.textContent = tr("Wait for green...", "Wait for green...");
        signalHint.textContent = tr("Choose a mode and start playing.", "Choose a mode and start playing.");
    }
}

function renderRoundLabel() {
    if (state.mode === "endless") {
        roundLabel.textContent = tr("Round {round}", "Round {round}", { round: state.round });
    } else {
        roundLabel.textContent = tr("Round {round} / {total}", "Round {round} / {total}", {
            round: state.round,
            total: 5
        });
    }
}

function renderStats() {
    const average = averageTimeMs();
    const best = bestTimeMs(state.mode);
    const setupBest = bestTimeMs(selectedMode());
    averageTime.textContent = average === null ? "—" : formatMs(average);
    gameBest.textContent = best === null ? "—" : formatMs(best);
    document.getElementById("setup-best").textContent = setupBest === null ? "—" : formatMs(setupBest).replace(" ms", "");
    document.getElementById("setup-best-unit").textContent = setupBest === null ? "" : " ms";
    renderRecordBadges();
    roundCount.textContent = String(state.times.length);
    document.getElementById("round-count-label").textContent = tr(
        state.times.length === 1 ? " round" : " rounds",
        state.times.length === 1 ? " round" : " rounds"
    );
    renderHistory(roundHistory, state.times);
    if (state.round > 0) renderRoundLabel();
}

function renderStaticUi() {
    document.title = tr("Reflex — Reaction Time Game | Just Because Games", "Reflex — Reaction Time Game | Just Because Games");
    document.querySelector(".back-link").textContent = tr("← back home", "← back home");
    document.querySelector(".reflex-intro .eyebrow").textContent = `${tr("A LITTLE GAME · NO.", "A LITTLE GAME · NO.")} 09`;
    document.querySelector(".reflex-intro h1").innerHTML = `${tr("Reflex", "Reflex")}<span>.</span>`;
    document.querySelector(".reflex-intro > p:not(.eyebrow)").textContent =
        tr("A tiny test of your reaction time. Keep your eyes open.", "A tiny test of your reaction time. Keep your eyes open.");
    document.querySelector(".reflex-section-heading .eyebrow").textContent = tr("YOUR CHOICE", "YOUR CHOICE");
    document.querySelector(".reflex-section-heading h2").textContent = tr("Choose your mode.", "Choose your mode.");

    modeOptions.querySelectorAll(".reflex-mode-card").forEach(button => {
        const mode = button.dataset.mode;
        const title = modeName(mode);
        const description = {
            classic: ["5 rounds · wait for green", "5 rounds · wait for green"],
            hard: ["Ignore red, orange, and other shapes", "Ignore red, orange, and other shapes"],
            endless: ["Keep going and track your average", "Keep going and track your average"]
        }[mode];
        button.querySelector("strong").textContent = title;
        button.querySelector("span").textContent = tr(description[0], description[1]);
    });

    document.querySelector(".reflex-best-panel .eyebrow").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    document.querySelectorAll(".reflex-new-record").forEach(badge => {
        badge.textContent = tr("New record!", "New record!");
    });
    document.querySelector(".reflex-best-panel > small").textContent =
        tr("Lowest reaction time on this device.", "Lowest reaction time on this device.");
    startButton.querySelector("span").textContent = tr("START PLAYING", "START PLAYING");
    backButton.textContent = tr("← Back to settings", "← Back to settings");
    document.querySelector(".reflex-live-stats div:first-child span").textContent = tr("Average", "Average").toUpperCase();
    document.querySelector(".reflex-live-stats div:last-child span").textContent = tr("Personal Best", "Personal Best").toUpperCase();
    document.querySelector(".reflex-history-heading h3").textContent = tr("Round times", "Round times");
    document.getElementById("round-count-label").textContent = tr(" rounds", " rounds");
    nextRoundButton.textContent = tr("Next round", "Next round");
    finishEndlessButton.textContent = tr("Finish run", "Finish run");

    document.querySelector(".reflex-results-screen > .eyebrow").textContent = tr("THAT'S A WRAP", "THAT'S A WRAP");
    document.getElementById("final-average-label").textContent = tr("AVERAGE REACTION", "AVERAGE REACTION");
    document.querySelector(".reflex-results-best .eyebrow").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    playAgainButton.querySelector("span").textContent = tr("PLAY AGAIN", "PLAY AGAIN");
    resultsBackButton.textContent = tr("← Back to settings", "← Back to settings");

    activeModeLabel.textContent = modeName(state.mode).toLocaleUpperCase(window.JB_I18N?.language || "en");
    renderRoundLabel();
    renderStats();
    renderStatus();
    if (state.lastReaction !== null) roundResult.textContent = tr("{ms} ms — {rating}", "{ms} ms — {rating}", {
        ms: formatMs(state.lastReaction).replace(" ms", ""),
        rating: tr(state.ratingKey, state.ratingKey)
    });
    if (!resultsScreen.hidden) renderResults();
}

function ratingFor(reaction) {
    if (reaction <= 220) return "Blazing fast!";
    if (reaction <= 320) return "Sharp!";
    if (reaction <= 450) return "Nice reflexes!";
    return "One more coffee?";
}

function beginAttempt() {
    clearSignalTimer();
    state.phase = "waiting";
    setPadState("is-waiting", "●");
    renderStatus();
    const delay = 1500 + Math.random() * 3000;
    state.timer = setTimeout(showNextSignal, delay);
}

function showNextSignal() {
    state.timer = null;
    if (state.mode === "hard" && state.fakeoutsRemaining > 0) {
        state.fakeoutsRemaining--;
        const fakeTypes = ["red", "orange", "shape"];
        state.fakeType = fakeTypes[Math.floor(Math.random() * fakeTypes.length)];
        state.phase = "fake";
        const fakeClass = state.fakeType === "red" ? "is-fake-red"
            : state.fakeType === "orange" ? "is-fake-orange"
            : "is-fake-shape";
        const mark = state.fakeType === "red" ? "●" : state.fakeType === "orange" ? "■" : "▲";
        setPadState(fakeClass, mark);
        renderStatus();
        state.timer = setTimeout(beginAttempt, 650);
        return;
    }

    state.phase = "green";
    state.greenAt = performance.now();
    setPadState("is-target", "●");
    renderStatus();
}

function startRound() {
    clearSignalTimer();
    state.round++;
    state.lastReaction = null;
    state.ratingKey = "";
    roundResult.textContent = "";
    nextRoundButton.hidden = true;
    finishEndlessButton.hidden = state.mode !== "endless";
    renderRoundLabel();
    state.fakeoutsRemaining = state.mode === "hard" ? 1 + Math.floor(Math.random() * 2) : 0;
    beginAttempt();
}

function handleEarlyClick(isFakeSignal) {
    clearSignalTimer();
    state.phase = "retry";
    state.fakeType = isFakeSignal ? "fake" : "early";
    setPadState(isFakeSignal ? "is-fake-red" : "is-early", isFakeSignal ? "▲" : "!");
    renderStatus();
    nextRoundButton.hidden = true;
    finishEndlessButton.hidden = state.mode !== "endless";
    state.timer = setTimeout(() => {
        state.timer = null;
        state.fakeoutsRemaining = state.mode === "hard" ? 1 + Math.floor(Math.random() * 2) : 0;
        beginAttempt();
    }, 850);
}

function saveBest(reaction) {
    const currentBest = bestTimeMs(state.mode);
    if (currentBest === null || reaction < currentBest) {
        localStorage.setItem(`${bestStoragePrefix}${state.mode}`, String(reaction));
        state.newRecordMode = state.mode;
        return true;
    }
    return false;
}

function handleTargetClick() {
    clearSignalTimer();
    const reaction = Math.round(performance.now() - state.greenAt);
    state.times.push(reaction);
    if (state.times.length === 5) {
        window.DailyChallenge?.report("reflex", averageTimeMs());
    }
    state.lastReaction = reaction;
    state.ratingKey = ratingFor(reaction);
    state.phase = "result";
    setPadState("is-result", "✓");
    const rating = tr(state.ratingKey, state.ratingKey);
    roundResult.textContent = tr("{ms} ms — {rating}", "{ms} ms — {rating}", {
        ms: formatMs(reaction).replace(" ms", ""),
        rating
    });
    saveBest(reaction);
    renderStats();

    if (state.mode === "endless") {
        nextRoundButton.hidden = false;
        finishEndlessButton.hidden = false;
    } else if (state.round < 5) {
        nextRoundButton.hidden = false;
    } else {
        state.timer = setTimeout(showResults, 1400);
    }
    renderStatus();
}

function handlePadClick() {
    if (state.phase === "waiting") {
        handleEarlyClick(false);
    } else if (state.phase === "fake") {
        handleEarlyClick(true);
    } else if (state.phase === "green") {
        handleTargetClick();
    }
}

function showResults() {
    clearSignalTimer();
    state.phase = "complete";
    gameScreen.hidden = true;
    resultsScreen.hidden = false;
    renderResults();
}

function renderResults() {
    const average = averageTimeMs();
    const best = bestTimeMs();
    document.getElementById("final-average").textContent = average === null ? "—" : formatMs(average);
    document.getElementById("results-best").textContent = best === null ? "—" : formatMs(best);
    document.getElementById("results-title").textContent = tr("Nice reactions.", "Nice reactions.");
    const summaryKey = state.times.length === 1
        ? "You played {rounds} round with an average of {ms} ms."
        : "You played {rounds} rounds with an average of {ms} ms.";
    document.getElementById("results-copy").textContent = tr(
        summaryKey,
        summaryKey,
        { rounds: state.times.length, ms: average === null ? "—" : average }
    );
    renderHistory(document.getElementById("results-history"), state.times);
}

function startGame() {
    clearSignalTimer();
    state.mode = selectedMode();
    state.phase = "idle";
    state.round = 0;
    state.times = [];
    state.lastReaction = null;
    state.ratingKey = "";
    state.newRecordMode = null;
    setupScreen.hidden = true;
    resultsScreen.hidden = true;
    gameScreen.hidden = false;
    activeModeLabel.textContent = modeName(state.mode).toLocaleUpperCase(window.JB_I18N?.language || "en");
    nextRoundButton.hidden = true;
    finishEndlessButton.hidden = true;
    roundResult.textContent = "";
    startRound();
    renderStats();
}

function returnToSetup() {
    clearSignalTimer();
    state.phase = "idle";
    setupScreen.hidden = false;
    gameScreen.hidden = true;
    resultsScreen.hidden = true;
    renderStats();
}

modeOptions.addEventListener("click", event => {
    const button = event.target.closest(".reflex-mode-card");
    if (!button) return;
    modeOptions.querySelectorAll(".reflex-mode-card").forEach(option => {
        const selected = option === button;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-pressed", String(selected));
    });
    state.mode = button.dataset.mode;
    localStorage.setItem(modeStorageKey, state.mode);
    activeModeLabel.textContent = modeName(state.mode).toLocaleUpperCase(window.JB_I18N?.language || "en");
    renderStats();
});
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
pad.addEventListener("click", handlePadClick);
nextRoundButton.addEventListener("click", startRound);
finishEndlessButton.addEventListener("click", showResults);
backButton.addEventListener("click", returnToSetup);
resultsBackButton.addEventListener("click", returnToSetup);
window.addEventListener("jb:languagechange", renderStaticUi);

renderStaticUi();
