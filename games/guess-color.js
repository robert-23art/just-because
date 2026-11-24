
/* =========================================================
   JUST BECAUSE — GUESS THE COLOR
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

const targetColor = document.getElementById("target-color");
const answerOptions = document.getElementById("answer-options");
const feedbackElement = document.getElementById("feedback");

const gameOver = document.getElementById("game-over");
const endTitle = document.getElementById("end-title");
const endMessage = document.getElementById("end-message");

const backButton = document.getElementById("back-button");
const playAgainButton = document.getElementById("play-again-button");


// CATEGORY NAMES

const colorCategoryNames = {
    all: "All Families",
    ...Object.fromEntries(
        Object.entries(GUESS_COLOR_DATA).map(([key, family]) => [
            key,
            family.name.replace(" Family", "")
        ])
    )
};


// GAME VARIABLES

let activeMode = "all";
let availableFamilies = [];
let activeFamily = "";
let currentColor = null;
let previousColor = null;

let score = 0;
let isProcessing = false;
let roundTimer = null;


// SHUFFLE AN ARRAY

function shuffleColors(items) {

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


// HIGHSCORE

function getHighScore(category) {

    return Number(
        localStorage.getItem(`jb-color-score-${category}`)
    ) || 0;
}


function saveHighScore() {

    const best = getHighScore(activeMode);

    if (score > best) {
        localStorage.setItem(
            `jb-color-score-${activeMode}`,
            score
        );
    }

    updateHighScore();
}


function updateHighScore() {

    const category = categorySelect.value;

    highscoreElement.textContent = getHighScore(category);

    highscoreCategory.textContent =
        colorCategoryNames[category] || colorCategoryNames.all;
}


// START THE GAME

function startGame() {

    activeMode = categorySelect.value;

    localStorage.setItem("jb-color-category", activeMode);

    availableFamilies = activeMode === "all"
        ? Object.keys(GUESS_COLOR_DATA)
        : [activeMode];

    score = 0;
    previousColor = null;
    isProcessing = false;

    roundCategory.textContent = activeMode === "all"
        ? "RANDOM COLOR FAMILY"
        : `${colorCategoryNames[activeMode].toUpperCase()} FAMILY`;
    roundScore.textContent = score;

    setupScreen.classList.add("is-hidden");
    gameStage.classList.remove("is-hidden");

    gameOver.classList.add("is-hidden");

    startRound();
}


// START A NEW ROUND

function startRound() {

    isProcessing = false;
    feedbackElement.textContent = "";

    gameOver.classList.add("is-hidden");

    // Pick a family first so all four answers are related shades.
    const possibleFamilies = activeMode === "all"
        ? availableFamilies
        : [activeMode];
    activeFamily = possibleFamilies[
        Math.floor(Math.random() * possibleFamilies.length)
    ];

    const familyColors = GUESS_COLOR_DATA[activeFamily].colors;

    // Avoid showing the same color in consecutive rounds.
    const possibleColors = familyColors.filter(
        color => color.name !== previousColor?.name
    );

    const colorPool = possibleColors.length > 0
        ? possibleColors
        : familyColors;

    currentColor = colorPool[
        Math.floor(Math.random() * colorPool.length)
    ];

    previousColor = currentColor;
    roundCategory.textContent =
        GUESS_COLOR_DATA[activeFamily].name.toUpperCase();

    // Show the color
    targetColor.style.backgroundColor = currentColor.hex;

    // Choose three distinct names from the same family as distractors.
    const wrongAnswers = shuffleColors(
        familyColors.filter(
            color => color.name !== currentColor.name
        )
    ).slice(0, 3);

    // Mix the single correct name with three same-family alternatives.
    const answerChoices = shuffleColors([
        currentColor,
        ...wrongAnswers
    ]);

    // Create the answer buttons
    answerOptions.innerHTML = "";

    answerChoices.forEach(color => {

        const button = document.createElement("button");

        button.className = "color-answer";
        button.textContent = color.name;
        button.type = "button";

        button.addEventListener("click", () => {
            checkAnswer(color, button);
        });

        answerOptions.appendChild(button);
    });

    roundScore.textContent = score;
}


// CHECK THE ANSWER

function checkAnswer(selectedColor, selectedButton) {

    if (isProcessing) return;

    isProcessing = true;

    const buttons = answerOptions.querySelectorAll("button");

    // Disable all answers
    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedColor.name === currentColor.name) {

        // Correct answer
        selectedButton.classList.add("correct");

        score++;

        roundScore.textContent = score;

        saveHighScore();

        feedbackElement.textContent = "Correct! Nice eyes. 👀";

        roundTimer = setTimeout(() => {
            startRound();
        }, 850);

    } else {

        // Incorrect answer
        selectedButton.classList.add("incorrect");

        // Highlight the correct answer
        buttons.forEach(button => {

            if (button.textContent === currentColor.name) {
                button.classList.add("correct");
            }
        });

        feedbackElement.textContent =
            `Not quite! It was ${currentColor.name}.`;

        saveHighScore();

        roundTimer = setTimeout(() => {
            finishGame();
        }, 1000);
    }
}


// GAME OVER

function finishGame() {

    isProcessing = false;

    gameOver.classList.remove("is-hidden");

    if (score === 0) {

        endTitle.textContent = "Ouch. That was unlucky.";

    } else if (score >= 10) {

        endTitle.textContent = "Okay, you have good eyes!";

    } else {

        endTitle.textContent = "Game over!";
    }

    endMessage.textContent =
        `You got ${score} ${score === 1 ? "point" : "points"}.`;
}


// RANDOM CATEGORY BUTTON

randomButton.addEventListener("click", () => {

    const options = Array.from(categorySelect.options);

    const randomIndex = Math.floor(
        Math.random() * options.length
    );

    categorySelect.selectedIndex = randomIndex;

    localStorage.setItem(
        "jb-color-category",
        categorySelect.value
    );

    updateHighScore();
});


// CATEGORY SELECTION

categorySelect.addEventListener("change", () => {

    localStorage.setItem(
        "jb-color-category",
        categorySelect.value
    );

    updateHighScore();
});


// MAIN BUTTONS

startButton.addEventListener("click", startGame);

playAgainButton.addEventListener("click", startGame);


// BACK TO SETTINGS

backButton.addEventListener("click", () => {

    clearTimeout(roundTimer);

    isProcessing = false;

    gameStage.classList.add("is-hidden");
    setupScreen.classList.remove("is-hidden");

    gameOver.classList.add("is-hidden");

    updateHighScore();
});


// LOAD SAVED CATEGORY

const savedCategory = localStorage.getItem("jb-color-category");

if (savedCategory && colorCategoryNames[savedCategory]) {
    categorySelect.value = savedCategory;
}


// INITIALISE

updateHighScore();
