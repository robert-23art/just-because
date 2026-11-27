
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


// GAME VARIABLES

let activeMode = "all";
let availableFamilies = [];
let activeFamily = "";
let currentColor = null;
let previousColor = null;
let answerChoices = [];
let answeredColor = null;
let answerWasCorrect = false;

let score = 0;
let isProcessing = false;
let roundTimer = null;

const colorUiCatalog = {
    "color.ui.categoryAll": { nl: "Alle families", de: "Alle Familien", fr: "Toutes les familles", es: "Todas las familias" },
    "color.ui.home": { nl: "← Terug naar startpagina", de: "← Zur Startseite", fr: "← Retour à l’accueil", es: "← Volver al inicio" },
    "color.ui.eyebrow": { nl: "EEN KLEIN SPEL · NR. 01", de: "EIN KLEINES SPIEL · NR. 01", fr: "UN PETIT JEU · N° 01", es: "UN PEQUEÑO JUEGO · N.º 01" },
    "color.ui.introPrefix": { nl: "Raad ", de: "Errate ", fr: "Devinez ", es: "Adivina " },
    "color.ui.introColor": { nl: "de kleur.", de: "die Farbe.", fr: "la couleur.", es: "el color." },
    "color.ui.introDescription": { nl: "Een kleine test voor je ogen. Hoe goed ken jij kleuren eigenlijk?", de: "Ein kleiner Test für deine Augen. Wie gut kennst du Farben wirklich?", fr: "Un petit test pour vos yeux. Connaissez-vous vraiment bien les couleurs ?", es: "Una pequeña prueba para tus ojos. ¿Cuánto sabes realmente sobre colores?" },
    "color.ui.footerNote": { nl: "gemaakt zonder bijzondere reden.", de: "aus keinem besonderen Grund gemacht.", fr: "créé sans raison particulière.", es: "hecho sin ningún motivo especial." },
    "color.ui.categoryTitle": { nl: "Kies een kleurfamilie.", de: "Wähle eine Farbfamilie.", fr: "Choisissez une famille de couleurs.", es: "Elige una familia de colores." },
    "color.ui.choiceEyebrow": { nl: "JOUW KEUZE", de: "DEINE WAHL", fr: "VOTRE CHOIX", es: "TU ELECCIÓN" },
    "color.ui.start": { nl: "START SPELEN", de: "SPIEL STARTEN", fr: "JOUER", es: "EMPEZAR A JUGAR" },
    "color.ui.random": { nl: "↻ Willekeurig", de: "↻ Zufällig", fr: "↻ Au hasard", es: "↻ Aleatorio" },
    "color.ui.categoryNote": { nl: "Kies je favoriet of laat het lot beslissen.", de: "Wähle deinen Favoriten oder lass das Schicksal entscheiden.", fr: "Choisissez votre préférée ou laissez le hasard décider.", es: "Elige tu favorita o deja que decida el azar." },
    "color.ui.personalBest": { nl: "JOUW PERSOONLIJKE RECORD", de: "DEIN PERSÖNLICHER BESTWERT", fr: "VOTRE RECORD PERSONNEL", es: "TU MEJOR MARCA PERSONAL" },
    "color.ui.highScore": { nl: "RECORD", de: "BESTWERT", fr: "RECORD", es: "RÉCORD" },
    "color.ui.highScoreNote": { nl: "Je beste score op dit apparaat.", de: "Dein bester Punktestand auf diesem Gerät.", fr: "Votre meilleur score sur cet appareil.", es: "Tu mejor puntuación en este dispositivo." },
    "color.ui.randomFamily": { nl: "WILLEKEURIGE KLEURFAMILIE", de: "ZUFÄLLIGE FARBFAMILIE", fr: "FAMILLE DE COULEURS AU HASARD", es: "FAMILIA DE COLOR ALEATORIA" },
    "color.ui.score": { nl: "SCORE:", de: "PUNKTE:", fr: "SCORE :", es: "PUNTUACIÓN:" },
    "color.ui.questionTitle": { nl: "Welke kleurnaam is het?", de: "Wie heißt diese Farbe?", fr: "Quel est le nom de cette couleur ?", es: "¿Cómo se llama este color?" },
    "color.ui.questionHelp": { nl: "Kies de naam die bij de kleur past.", de: "Wähle den Namen, der zur Farbe passt.", fr: "Choisissez le nom correspondant à la couleur.", es: "Elige el nombre que corresponde al color." },
    "color.ui.correct": { nl: "Goed! Scherpe ogen. 👀", de: "Richtig! Gutes Auge. 👀", fr: "Bien joué ! Quel œil. 👀", es: "¡Correcto! Qué buen ojo. 👀" },
    "color.ui.incorrect": { nl: "Niet helemaal! Het was {name}.", de: "Nicht ganz! Es war {name}.", fr: "Pas tout à fait ! C'était {name}.", es: "¡No exactamente! Era {name}." },
    "color.ui.resultZero": { nl: "Oei. Dat zat niet mee.", de: "Autsch. Das war Pech.", fr: "Aïe. Pas de chance.", es: "Vaya. Qué mala suerte." },
    "color.ui.resultGreat": { nl: "Zo, jij hebt goede ogen!", de: "Du hast wirklich gute Augen!", fr: "Eh bien, vous avez l'œil !", es: "¡Vaya, tienes buen ojo!" },
    "color.ui.resultOver": { nl: "Spel afgelopen!", de: "Spiel vorbei!", fr: "Partie terminée !", es: "¡Fin del juego!" },
    "color.ui.resultOne": { nl: "Je haalde {score} punt.", de: "Du hast {score} Punkt erzielt.", fr: "Vous avez obtenu {score} point.", es: "Has conseguido {score} punto." },
    "color.ui.resultMany": { nl: "Je haalde {score} punten.", de: "Du hast {score} Punkte erzielt.", fr: "Vous avez obtenu {score} points.", es: "Has conseguido {score} puntos." },
    "color.ui.playAgain": { nl: "OPNIEUW SPELEN", de: "NOCHMAL SPIELEN", fr: "REJOUER", es: "JUGAR OTRA VEZ" },
    "color.ui.back": { nl: "← Terug naar instellingen", de: "← Zurück zu den Einstellungen", fr: "← Retour aux réglages", es: "← Volver a los ajustes" }
};

if (window.JB_I18N) window.JB_I18N.registerCatalog(colorUiCatalog);

function colorText(key, fallback) {
    return window.JB_I18N ? window.JB_I18N.t(key, fallback) : fallback;
}

function colorFamilyName(familyId) {
    const family = GUESS_COLOR_DATA[familyId];
    return colorText(`color.family.${familyId}`, family ? family.name : "");
}

function colorCategoryName(category) {
    return category === "all"
        ? colorText("color.ui.categoryAll", "All Families")
        : colorFamilyName(category);
}

function translatedColorName(familyId, color) {
    const index = GUESS_COLOR_DATA[familyId].colors.indexOf(color);
    return colorText(`color.name.${familyId}.${index}`, color.name);
}

function renderStaticUi() {
    const currentCategory = categorySelect.value;
    Array.from(categorySelect.options).forEach(option => {
        option.textContent = colorCategoryName(option.value);
    });
    categorySelect.value = currentCategory;

    document.querySelector(".back-link").textContent =
        colorText("color.ui.home", "← back home");
    document.querySelector(".game-intro .eyebrow").textContent =
        colorText("color.ui.eyebrow", "A LITTLE GAME · NO. 01");
    const introTitle = document.querySelector(".game-intro h1");
    introTitle.firstChild.textContent =
        colorText("color.ui.introPrefix", "Guess ");
    introTitle.querySelector("span").textContent =
        colorText("color.ui.introColor", "the color.");
    document.querySelector(".game-intro > p:not(.eyebrow)").textContent =
        colorText("color.ui.introDescription", "A little test for your eyes. How well do you really know your colors?");
    document.querySelector(".footer p").textContent =
        colorText("color.ui.footerNote", "made for no particular reason.");

    document.querySelector(".start-button#start-button span").textContent =
        colorText("color.ui.start", "START PLAYING");
    document.querySelector(".category-title .eyebrow").textContent =
        colorText("color.ui.choiceEyebrow", "YOUR CHOICE");
    document.querySelector(".category-title h2").textContent =
        colorText("color.ui.categoryTitle", "Pick a color family.");
    randomButton.textContent = colorText("color.ui.random", "↻ Random");
    document.querySelector(".category-note").textContent =
        colorText("color.ui.categoryNote", "Pick your favorite or let fate decide.");
    document.querySelector(".highscore-box .eyebrow").textContent =
        colorText("color.ui.personalBest", "YOUR PERSONAL BEST");
    document.querySelector(".highscore-label").textContent =
        colorText("color.ui.highScore", "HIGH SCORE");
    document.querySelector(".highscore-note").textContent =
        colorText("color.ui.highScoreNote", "Your best score on this device.");
    document.querySelector(".color-question h2").textContent =
        colorText("color.ui.questionTitle", "Which color name is it?");
    document.querySelector(".color-question p").textContent =
        colorText("color.ui.questionHelp", "Choose the name that matches the color.");
    playAgainButton.querySelector("span").textContent =
        colorText("color.ui.playAgain", "PLAY AGAIN");
    backButton.textContent = colorText("color.ui.back", "← Back to settings");

    const scoreLabel = document.querySelector(".round-score");
    scoreLabel.firstChild.textContent = `${colorText("color.ui.score", "SCORE:")} `;

    if (gameStage.classList.contains("is-hidden")) {
        roundCategory.textContent = colorCategoryName(activeMode).toUpperCase();
    } else if (activeFamily) {
        roundCategory.textContent = colorFamilyName(activeFamily).toUpperCase();
    }

    updateHighScore();
}


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

    highscoreCategory.textContent = colorCategoryName(category);
}


// START THE GAME

function startGame() {
    window.JustBecauseProfile?.recordGame("guess-color");

    activeMode = categorySelect.value;

    localStorage.setItem("jb-color-category", activeMode);

    availableFamilies = activeMode === "all"
        ? Object.keys(GUESS_COLOR_DATA)
        : [activeMode];

    score = 0;
    previousColor = null;
    isProcessing = false;

    roundCategory.textContent = activeMode === "all"
        ? colorText("color.ui.randomFamily", "RANDOM COLOR FAMILY")
        : colorFamilyName(activeMode).toUpperCase();
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
    answeredColor = null;
    answerWasCorrect = false;

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
    roundCategory.textContent = colorFamilyName(activeFamily).toUpperCase();

    // Show the color
    targetColor.style.backgroundColor = currentColor.hex;

    // Choose three distinct names from the same family as distractors.
    const wrongAnswers = shuffleColors(
        familyColors.filter(
            color => color.name !== currentColor.name
        )
    ).slice(0, 3);

    // Mix the single correct name with three same-family alternatives.
    answerChoices = shuffleColors([
        currentColor,
        ...wrongAnswers
    ]);

    renderAnswerOptions();
    roundScore.textContent = score;
}


function renderAnswerOptions() {
    // Create the answer buttons
    answerOptions.innerHTML = "";

    answerChoices.forEach(color => {

        const button = document.createElement("button");

        button.className = "color-answer";
        button.textContent = translatedColorName(activeFamily, color);
        button.type = "button";
        if (answeredColor !== null) {
            button.disabled = true;
            if (color === answeredColor && !answerWasCorrect) {
                button.classList.add("incorrect");
            }
            if (color === currentColor && !answerWasCorrect) {
                button.classList.add("correct");
            }
            if (color === currentColor && answerWasCorrect) {
                button.classList.add("correct");
            }
        }

        button.addEventListener("click", () => {
            checkAnswer(color, button);
        });

        answerOptions.appendChild(button);
    });

}


// CHECK THE ANSWER

function checkAnswer(selectedColor, selectedButton) {

    if (isProcessing) return;

    isProcessing = true;
    answeredColor = selectedColor;
    answerWasCorrect = selectedColor === currentColor;

    if (answerWasCorrect) {

        // Correct answer
        selectedButton.classList.add("correct");
        answerOptions.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });

        score++;
        window.DailyChallenge?.report("guess-color", score);

        roundScore.textContent = score;

        saveHighScore();

        feedbackElement.textContent = colorText("color.ui.correct", "Correct! Nice eyes. 👀");

        roundTimer = setTimeout(() => {
            startRound();
        }, 850);

    } else {

        // Incorrect answer
        renderAnswerOptions();
        feedbackElement.textContent = colorText(
            "color.ui.incorrect",
            "Not quite! It was {name}."
        ).replace("{name}", translatedColorName(activeFamily, currentColor));

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

    renderGameResult();
}


function renderGameResult() {
    const key = score === 0
        ? "color.ui.resultZero"
        : score >= 10
            ? "color.ui.resultGreat"
            : "color.ui.resultOver";
    const fallback = score === 0
        ? "Ouch. That was unlucky."
        : score >= 10
            ? "Okay, you have good eyes!"
            : "Game over!";
    endTitle.textContent = colorText(key, fallback);
    endMessage.textContent = colorText(
        score === 1 ? "color.ui.resultOne" : "color.ui.resultMany",
        score === 1 ? "You got {score} point." : "You got {score} points."
    ).replace("{score}", score);
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

if (savedCategory && (savedCategory === "all" || GUESS_COLOR_DATA[savedCategory])) {
    categorySelect.value = savedCategory;
}


// INITIALISE

renderStaticUi();
updateHighScore();

window.addEventListener("jb:languagechange", () => {
    renderStaticUi();
    if (!gameStage.classList.contains("is-hidden")) {
        renderAnswerOptions();
        if (answeredColor !== null) {
            feedbackElement.textContent = answerWasCorrect
                ? colorText("color.ui.correct", "Correct! Nice eyes. 👀")
                : colorText("color.ui.incorrect", "Not quite! It was {name}.")
                    .replace("{name}", translatedColorName(activeFamily, currentColor));
        }
        if (!gameOver.classList.contains("is-hidden")) renderGameResult();
    }
});
