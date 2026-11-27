const setupScreen = document.getElementById("setup-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const difficultyOptions = document.getElementById("difficulty-options");
const sequenceGrid = document.getElementById("sequence-grid");
const statusMessage = document.getElementById("sequence-status");
const progressMessage = document.getElementById("sequence-progress");
const levelLabel = document.getElementById("level-label");
const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-to-setup");
const playAgainButton = document.getElementById("play-again");
const gameOverBackButton = document.getElementById("game-over-back");
const soundButtons = [
    document.getElementById("setup-sound-toggle"),
    document.getElementById("game-sound-toggle")
];
const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
const symbols = ["●", "◆", "▲", "■", "✦", "⬟", "○", "✚", "⬢"];
const difficulties = {
    easy: { count: 4, columns: 2, lit: 600, gap: 260 },
    medium: { count: 9, columns: 3, lit: 370, gap: 180 },
    hard: { count: 9, columns: 3, lit: 270, gap: 125 }
};

const state = {
    difficulty: "easy",
    level: 0,
    sequence: [],
    inputIndex: 0,
    playbackIndex: 0,
    phase: "setup",
    timer: null,
    generation: 0,
    newRecordFor: null,
    soundEnabled: Boolean(AudioContextConstructor),
    audioAvailable: Boolean(AudioContextConstructor),
    audioContext: null
};

let tileElements = [];

function tr(key, fallback, values) {
    return window.JB_I18N ? window.JB_I18N.t(key, fallback, values) : fallback;
}

function selectedDifficulty() {
    return difficultyOptions.querySelector(".is-selected").dataset.difficulty;
}

function formatLevel(level) {
    const language = window.JB_I18N ? window.JB_I18N.language : "en";
    return new Intl.NumberFormat(language, { maximumFractionDigits: 0 }).format(level);
}

function bestStorageKey(difficulty) {
    return `jb_sequence_best_${difficulty}`;
}

function bestLevel(difficulty = state.difficulty) {
    const stored = localStorage.getItem(bestStorageKey(difficulty));
    if (stored === null) return null;
    const best = Number(stored);
    return Number.isInteger(best) && best >= 0 ? best : null;
}

function updateBestDisplays() {
    const best = bestLevel(state.difficulty);
    const bestText = best === null ? "—" : formatLevel(best);
    document.getElementById("setup-best").textContent = bestText;
    document.getElementById("game-best").textContent = bestText;
    document.getElementById("over-best").textContent = bestText;

    const isNewRecord = state.newRecordFor === state.difficulty;
    document.getElementById("setup-new-record").hidden = !isNewRecord;
    document.getElementById("game-new-record").hidden = !isNewRecord;
    document.getElementById("over-new-record").hidden = !isNewRecord;
}

function updatePersonalBest() {
    const best = bestLevel(state.difficulty);
    if (best === null || state.level > best) {
        localStorage.setItem(bestStorageKey(state.difficulty), String(state.level));
        state.newRecordFor = state.difficulty;
    }
    updateBestDisplays();
}

function renderSoundButtons() {
    const label = !state.audioAvailable
        ? tr("Sound unavailable", "Sound unavailable")
        : tr(state.soundEnabled ? "Sound: On" : "Sound: Off", state.soundEnabled ? "Sound: On" : "Sound: Off");
    soundButtons.forEach(button => {
        button.textContent = label;
        button.disabled = !state.audioAvailable;
        button.setAttribute("aria-pressed", String(state.soundEnabled));
    });
}

function disableSound(error) {
    console.error("Sequence audio is unavailable.", error);
    state.audioAvailable = false;
    state.soundEnabled = false;
    renderSoundButtons();
}

function ensureAudioContext() {
    if (!state.soundEnabled || !state.audioAvailable) return;
    try {
        if (!state.audioContext) state.audioContext = new AudioContextConstructor();
        if (state.audioContext.state === "suspended") {
            state.audioContext.resume().catch(disableSound);
        }
    } catch (error) {
        disableSound(error);
    }
}

function playTone(tileIndex) {
    const context = state.audioContext;
    if (!state.soundEnabled || !context || context.state !== "running") return;

    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 270 + tileIndex * 38;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.035, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.16);
}

function toggleSound() {
    if (!state.audioAvailable) return;
    state.soundEnabled = !state.soundEnabled;
    if (state.soundEnabled) ensureAudioContext();
    renderSoundButtons();
}

function renderStatus() {
    const messages = {
        playback: ["Watch carefully...", "Watch carefully..."],
        input: ["Your turn!", "Your turn!"],
        success: ["Well done!", "Well done!"]
    };
    const message = messages[state.phase];
    statusMessage.textContent = message ? tr(message[0], message[1]) : "";
}

function renderProgress() {
    progressMessage.textContent = state.sequence.length
        ? tr("Progress: {current} / {total}", "Progress: {current} / {total}", {
            current: formatLevel(state.inputIndex),
            total: formatLevel(state.sequence.length)
        })
        : "";
}

function renderLevel() {
    levelLabel.textContent = tr("Level {level}", "Level {level}", {
        level: formatLevel(state.level)
    });
}

function renderTileLabels() {
    tileElements.forEach((tile, index) => {
        tile.setAttribute("aria-label", tr("Tile {tile}", "Tile {tile}", {
            tile: formatLevel(index + 1)
        }));
    });
}

function renderStaticUi() {
    document.title = tr("Sequence — Memory Game | Just Because Games", "Sequence — Memory Game | Just Because Games");
    document.querySelector(".back-link").textContent = `← ${tr("back home", "back home")}`;
    document.getElementById("sequence-kicker").textContent = `${tr("A LITTLE GAME · NO.", "A LITTLE GAME · NO.")} 10`;
    document.getElementById("sequence-title").innerHTML = `${tr("Sequence", "Sequence")}<span>.</span>`;
    document.getElementById("sequence-intro-copy").textContent =
        tr("Remember the rhythm. Repeat the pattern.", "Remember the rhythm. Repeat the pattern.");
    document.getElementById("setup-eyebrow").textContent = tr("YOUR CHOICE", "YOUR CHOICE");
    document.getElementById("setup-heading").textContent = tr("Choose your difficulty.", "Choose your difficulty.");
    difficultyOptions.setAttribute("aria-label", tr("Choose your difficulty", "Choose your difficulty"));

    const difficultyCopy = {
        easy: ["Easy", "2 x 2 · calm pace"],
        medium: ["Medium", "3 x 3 · steady pace"],
        hard: ["Hard", "3 x 3 · quick, shifting patterns"]
    };
    difficultyOptions.querySelectorAll(".sequence-difficulty-card").forEach(button => {
        const [name, description] = difficultyCopy[button.dataset.difficulty];
        button.querySelector("strong").textContent = tr(name, name);
        button.querySelector("small").textContent = tr(description, description);
    });

    document.getElementById("setup-best-label").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    document.getElementById("best-note").textContent = tr("Best level on this device.", "Best level on this device.");
    startButton.querySelector("span").textContent = tr("START PLAYING", "START PLAYING");
    backButton.textContent = `← ${tr("Back to settings", "Back to settings")}`;
    document.getElementById("game-best-label").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    document.getElementById("sequence-grid").setAttribute("aria-label", tr("Sequence memory game", "Sequence memory game"));
    document.getElementById("game-over-kicker").textContent = tr("THAT'S IT", "THAT'S IT");
    document.getElementById("game-over-title").textContent = tr("Game over.", "Game over.");
    document.getElementById("game-over-feedback").textContent = tr("Wrong!", "Wrong!");
    document.getElementById("final-level-label").textContent = tr("Level reached", "Level reached");
    document.getElementById("over-best-label").textContent = tr("PERSONAL BEST", "PERSONAL BEST");
    playAgainButton.querySelector("span").textContent = tr("Play Again", "Play Again");
    gameOverBackButton.textContent = tr("Choose another difficulty", "Choose another difficulty");

    renderSoundButtons();
    renderTileLabels();
    renderStatus();
    renderProgress();
    renderLevel();
    updateBestDisplays();
}

function createBoard() {
    const config = difficulties[state.difficulty];
    sequenceGrid.replaceChildren();
    sequenceGrid.dataset.columns = String(config.columns);
    tileElements = Array.from({ length: config.count }, (_, index) => {
        const tile = document.createElement("button");
        const symbol = document.createElement("span");
        tile.type = "button";
        tile.className = `sequence-tile sequence-tile-${index}`;
        tile.dataset.tile = String(index);
        tile.disabled = true;
        symbol.textContent = symbols[index];
        symbol.setAttribute("aria-hidden", "true");
        tile.append(symbol);
        tile.addEventListener("click", () => handleTileClick(index));
        sequenceGrid.append(tile);
        return tile;
    });
    renderTileLabels();
}

function applyTileLayout() {
    const offset = state.difficulty === "hard"
        ? (state.level - 1) % tileElements.length
        : 0;
    const reordered = tileElements.slice(offset).concat(tileElements.slice(0, offset));
    reordered.forEach(tile => sequenceGrid.append(tile));
}

function cancelPlayback() {
    state.generation++;
    if (state.timer !== null) {
        clearTimeout(state.timer);
        state.timer = null;
    }
    tileElements.forEach(tile => tile.classList.remove("is-lit"));
}

function schedule(callback, delay) {
    const generation = state.generation;
    state.timer = window.setTimeout(() => {
        state.timer = null;
        if (generation !== state.generation) return;
        callback();
    }, delay);
}

function enableTiles(enabled) {
    tileElements.forEach(tile => {
        tile.disabled = !enabled;
    });
}

function playbackTimings() {
    if (state.difficulty === "easy") return { lit: 600, gap: 260 };
    if (state.difficulty === "medium") return { lit: 370, gap: 180 };
    return {
        lit: Math.max(130, 270 - (state.level - 1) * 12),
        gap: Math.max(65, 125 - (state.level - 1) * 5)
    };
}

function playNextTile() {
    if (state.playbackIndex >= state.sequence.length) {
        state.phase = "input";
        enableTiles(true);
        renderStatus();
        renderProgress();
        return;
    }

    const tileIndex = state.sequence[state.playbackIndex];
    const tile = tileElements[tileIndex];
    const timings = playbackTimings();
    tile.classList.add("is-lit");
    playTone(tileIndex);
    schedule(() => {
        tile.classList.remove("is-lit");
        schedule(() => {
            state.playbackIndex++;
            playNextTile();
        }, timings.gap);
    }, timings.lit);
}

function startRound() {
    cancelPlayback();
    state.level++;
    state.sequence.push(Math.floor(Math.random() * tileElements.length));
    state.inputIndex = 0;
    state.playbackIndex = 0;
    state.phase = "playback";
    applyTileLayout();
    enableTiles(false);
    updatePersonalBest();
    window.DailyChallenge?.report("sequence", state.level);
    renderLevel();
    renderStatus();
    renderProgress();
    schedule(playNextTile, 420);
}

function gameOver() {
    cancelPlayback();
    state.phase = "gameover";
    enableTiles(false);
    document.getElementById("final-level").textContent = formatLevel(state.level);
    setupScreen.hidden = true;
    gameScreen.hidden = true;
    gameOverScreen.hidden = false;
    updateBestDisplays();
}

function handleTileClick(tileIndex) {
    if (state.phase !== "input") return;
    if (state.sequence[state.inputIndex] !== tileIndex) {
        gameOver();
        return;
    }

    state.inputIndex++;
    if (state.inputIndex === state.sequence.length) {
        state.phase = "success";
        enableTiles(false);
        renderStatus();
        renderProgress();
        schedule(startRound, 650);
        return;
    }

    renderProgress();
}

function startGame() {
    cancelPlayback();
    state.level = 0;
    state.sequence = [];
    state.inputIndex = 0;
    state.playbackIndex = 0;
    state.newRecordFor = null;
    state.phase = "playback";
    createBoard();
    setupScreen.hidden = true;
    gameOverScreen.hidden = true;
    gameScreen.hidden = false;
    ensureAudioContext();
    updateBestDisplays();
    startRound();
}

function returnToSetup() {
    cancelPlayback();
    state.phase = "setup";
    setupScreen.hidden = false;
    gameScreen.hidden = true;
    gameOverScreen.hidden = true;
    updateBestDisplays();
}

difficultyOptions.addEventListener("click", event => {
    const button = event.target.closest(".sequence-difficulty-card");
    if (!button) return;
    difficultyOptions.querySelectorAll(".sequence-difficulty-card").forEach(option => {
        const selected = option === button;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-pressed", String(selected));
    });
    state.difficulty = button.dataset.difficulty;
    updateBestDisplays();
});

soundButtons.forEach(button => button.addEventListener("click", toggleSound));
startButton.addEventListener("click", () => {
    state.difficulty = selectedDifficulty();
    startGame();
});
backButton.addEventListener("click", returnToSetup);
playAgainButton.addEventListener("click", startGame);
gameOverBackButton.addEventListener("click", returnToSetup);
window.addEventListener("jb:languagechange", renderStaticUi);

renderStaticUi();
