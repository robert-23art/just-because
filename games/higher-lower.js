
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

    highscoreCategory.textContent = categoryNames[category];
}


// FORMAT NUMBERS

function formatValue(value, unit) {
    const formatted = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 1
    }).format(value);

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

    // Update the game information
    roundCategory.textContent =
        activeData.name +
        (activeMode === "mixed" ? " · RANDOM PICK" : "");

    metricTitle.textContent = activeData.metric;
    metricQuestion.textContent = activeData.question;

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

    currentName.textContent = currentItem.name;
    currentValue.textContent = formatValue(
        currentItem.value,
        activeData.unit
    );

    nextName.textContent = nextItem.name;

    // Hide the next value until the player answers
    nextValue.textContent = "???";

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
    nextValue.textContent = formatValue(
        nextItem.value,
        activeData.unit
    );

    answerButtons.classList.add("is-hidden");

    if (isCorrect) {

        score++;

        roundScore.textContent = score;
        saveHighScore();

        feedbackElement.textContent =
            `Correct! ${nextItem.name} is ${correctDirection}.`;

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

        feedbackElement.textContent =
            `Not quite! The correct answer was ${correctDirection}.`;

        window.setTimeout(() => {
            finishGame(false);
        }, 900);
    }
}


// FINISH THE GAME

function finishGame(completed) {

    isProcessing = false;

    answerButtons.classList.add("is-hidden");
    gameOver.classList.remove("is-hidden");

    if (completed) {
        endTitle.textContent = "You cleared the whole list!";
        endMessage.textContent =
            `Amazing! You got all ${score} comparisons right.`;
    } else {
        endTitle.textContent = "Game over!";
        endMessage.textContent =
            `You scored ${score} ${
                score === 1 ? "point" : "points"
            }. Better luck next time!`;
    }

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

    updateHighScore();
});


// LOAD SAVED CATEGORY

const savedCategory = localStorage.getItem("jb-hl-category");

if (savedCategory && categoryNames[savedCategory]) {
    categorySelect.value = savedCategory;
}


// INITIALISE PAGE

updateHighScore();
