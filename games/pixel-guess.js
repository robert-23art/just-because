/* =========================================================
   JUST BECAUSE — PIXEL GUESS
========================================================= */

(() => {
    const categoryGrid = document.getElementById("pg-category-grid");
    const setupScreen = document.getElementById("pg-setup");
    const playScreen = document.getElementById("pg-play");
    const resultsScreen = document.getElementById("pg-results");
    const setupFeedback = document.getElementById("pg-setup-feedback");
    const startButton = document.getElementById("pg-start-button");
    const bestScoreElement = document.getElementById("pg-best-score");

    const roundCategory = document.getElementById("pg-round-category");
    const roundNumber = document.getElementById("pg-round-number");
    const scoreElement = document.getElementById("pg-score");
    const correctCountElement = document.getElementById("pg-correct-count");
    const canvas = document.getElementById("pg-canvas");
    const canvasContext = canvas.getContext("2d", { alpha: false });
    const imageStatus = document.getElementById("pg-image-status");
    const pixelLevelElement = document.getElementById("pg-image-pixel-level");
    const attemptsLabel = document.getElementById("pg-attempts-label");
    const creditName = document.getElementById("pg-credit-name");
    const sourceLink = document.getElementById("pg-source-link");
    const licenseLink = document.getElementById("pg-license-link");

    const hintsUsedElement = document.getElementById("pg-hints-used");
    const hintText = document.getElementById("pg-hint-text");
    const hintButton = document.getElementById("pg-hint-button");
    const answerForm = document.getElementById("pg-answer-form");
    const answerInput = document.getElementById("pg-answer-input");
    const submitButton = answerForm.querySelector("button[type='submit']");
    const feedback = document.getElementById("pg-feedback");
    const continueButton = document.getElementById("pg-continue-button");
    const continueLabel = document.getElementById("pg-continue-label");
    const backButton = document.getElementById("pg-back-button");

    const finalScore = document.getElementById("pg-final-score");
    const finalCorrect = document.getElementById("pg-final-correct");
    const finalPercent = document.getElementById("pg-final-percent");
    const finalBest = document.getElementById("pg-final-best");
    const resultTitle = document.getElementById("pg-result-title");
    const resultMessage = document.getElementById("pg-result-message");

    const roundsPerGame = PIXEL_GUESS_DATA.roundsPerGame || 10;
    const maximumAttempts = PIXEL_GUESS_DATA.maximumAttempts || 5;
    const pixelLevels = [8, 14, 25, 43, 76];
    const allItems = PIXEL_GUESS_DATA.items || [];
    const categoryNames = new Map((PIXEL_GUESS_DATA.categories || []).map(category => [category.id, category.name]));
    const tr = (id, fallback, ...values) => {
        let text = window.JB_I18N ? window.JB_I18N.t(`pg.ui.${id}`, fallback) : fallback;
        values.forEach((value, index) => { text = text.replace(`{${index}}`, value); });
        return text;
    };
    const categoryName = id => window.JB_I18N
        ? window.JB_I18N.t(`pg.category.${id}`, categoryNames.get(id) || "All Categories")
        : categoryNames.get(id) || "All Categories";

    let selectedCategory = "all";
    let runItems = [];
    let roundIndex = 0;
    let currentItem = null;
    let currentImage = null;
    let imageLoaded = false;
    let score = 0;
    let correctCount = 0;
    let attempts = 0;
    let hintsUsed = 0;
    let revealStep = 0;
    let roundState = "setup";
    let bestScore = 0;
    let roundPoints = 0;
    let lastFeedbackType = "";
    let setupFeedbackType = "";
    let activeLanguage = window.JB_I18N ? window.JB_I18N.language : "en";

    function readStorage(key) {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    function writeStorage(key, value) {
        try {
            localStorage.setItem(key, String(value));
        } catch {
            // The game still works when browser storage is unavailable.
        }
    }

    function normalizeAnswer(value) {
        return String(value || "")
            .trim()
            .normalize("NFKD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/&/g, " and ")
            .replace(/[’']/g, "")
            .replace(/[‐‑‒–—-]/g, " ")
            .replace(/[^\p{L}\p{N}\s]/gu, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function addOwner(ownerMap, alias, itemId) {
        const normalized = normalizeAnswer(alias);
        if (!normalized) return;
        if (!ownerMap.has(normalized)) ownerMap.set(normalized, new Set());
        ownerMap.get(normalized).add(itemId);
    }

    const explicitOwners = new Map();
    const partOwners = new Map();

    allItems.forEach(item => {
        const aliases = new Set([item.answer, ...(item.acceptedAnswers || [])]);
        aliases.forEach(alias => addOwner(explicitOwners, alias, item.id));

        (item.personParts || []).forEach(part => {
            const normalized = normalizeAnswer(part);
            if (!partOwners.has(normalized)) partOwners.set(normalized, new Set());
            partOwners.get(normalized).add(item.id);
        });
    });

    const aliasesByItem = new Map();
    const aliasOwners = new Map();

    allItems.forEach(item => {
        const aliases = new Set([item.answer, ...(item.acceptedAnswers || [])]);

        (item.personParts || []).forEach(part => {
            const normalized = normalizeAnswer(part);
            const owners = partOwners.get(normalized) || new Set();
            const exactOwners = explicitOwners.get(normalized) || new Set();
            const conflictsWithAnotherAnswer = [...exactOwners].some(id => id !== item.id);

            if (owners.size === 1 && !conflictsWithAnotherAnswer) aliases.add(part);
        });

        aliasesByItem.set(item.id, [...aliases].map(normalizeAnswer).filter(Boolean));
        aliases.forEach(alias => addOwner(aliasOwners, alias, item.id));
    });

    function oneEditAway(first, second) {
        if (first === second || Math.abs(first.length - second.length) > 1) return false;

        let a = 0;
        let b = 0;
        let edits = 0;

        while (a < first.length && b < second.length) {
            if (first[a] === second[b]) {
                a++;
                b++;
                continue;
            }

            edits++;
            if (edits > 1) return false;

            if (
                first.length === second.length &&
                first[a] === second[b + 1] &&
                first[a + 1] === second[b]
            ) {
                a += 2;
                b += 2;
            } else if (first.length > second.length) {
                a++;
            } else if (first.length < second.length) {
                b++;
            } else {
                a++;
                b++;
            }
        }

        if (a < first.length || b < second.length) edits++;
        return edits === 1;
    }

    function isCorrectAnswer(value, item) {
        const guess = normalizeAnswer(value);
        if (!guess) return false;

        const exactOwners = aliasOwners.get(guess);
        if (exactOwners) return exactOwners.size === 1 && exactOwners.has(item.id);

        if (guess.length < 7) return false;

        const possibleOwners = new Set();
        for (const [alias, owners] of aliasOwners) {
            if (alias.length < 7 || !oneEditAway(guess, alias)) continue;
            owners.forEach(id => possibleOwners.add(id));
            if (possibleOwners.size > 1) return false;
        }

        return possibleOwners.size === 1 && possibleOwners.has(item.id);
    }

    function shuffle(items) {
        const result = [...items];
        for (let index = result.length - 1; index > 0; index--) {
            const other = Math.floor(Math.random() * (index + 1));
            [result[index], result[other]] = [result[other], result[index]];
        }
        return result;
    }

    function highScoreKey(category) {
        return `jb-pixel-guess-highscore-${category}`;
    }

    function getHighScore(category) {
        return Number(readStorage(highScoreKey(category))) || 0;
    }

    function updateBestScore() {
        bestScore = getHighScore(selectedCategory);
        bestScoreElement.textContent = bestScore;
    }

    function updateCategoryCards() {
        const counts = new Map();
        allItems.forEach(item => counts.set(item.category, (counts.get(item.category) || 0) + 1));
        const total = allItems.length;

        categoryGrid.querySelectorAll("[data-count]").forEach(countElement => {
            const category = countElement.dataset.count;
            countElement.textContent = category === "all" ? total : (counts.get(category) || 0);
        });

        categoryGrid.querySelectorAll(".pg-category-card").forEach(card => {
            const category = card.dataset.category;
            const count = category === "all" ? total : (counts.get(category) || 0);
            card.disabled = count === 0;
            card.classList.toggle("is-selected", category === selectedCategory);
            card.setAttribute("aria-pressed", String(category === selectedCategory));
            const copy = card.querySelector(".pg-category-copy");
            if (copy) {
                const name = document.createElement("strong");
                name.textContent = category === "all" ? categoryName("all") : categoryName(category);
                const details = document.createElement("small");
                details.textContent = category === "all"
                    ? `${count} ${tr("pictures", "pictures")} · ${tr("mixed", "mixed")}`
                    : `${count} ${tr("pictures", "pictures")}`;
                copy.replaceChildren(name, details);
            }
        });

        startButton.disabled = (selectedCategory === "all" ? total : (counts.get(selectedCategory) || 0)) === 0;
    }

    function renderStaticText() {
        const one = (selector, text) => {
            const element = document.querySelector(selector);
            if (element) element.textContent = text;
        };
        document.title = tr("pageTitle", "Pixel Guess — Picture Puzzle | Just Because Games");
        one(".pg-intro .eyebrow", tr("gameEyebrow", "A LITTLE GAME · NO. 03"));
        const introTitle = document.querySelector(".pg-intro h1");
        if (introTitle) {
            const title = document.createTextNode(`${tr("gameTitle", "Pixel")}${tr("gameTitleGlue", " ")}`);
            const titleTail = document.createElement("span");
            titleTail.textContent = tr("gameTitleSecond", "Guess.");
            introTitle.replaceChildren(title, titleTail);
        }
        one(".pg-intro > p:last-child", tr("gameDescription", "One tiny, blurry clue. Type what you think it is."));
        one(".pg-setup-heading .eyebrow", tr("chooseSubject", "CHOOSE YOUR SUBJECT"));
        one(".pg-setup-heading h2", tr("pickCategory", "Pick a category."));
        one(".pg-setup-note", tr("setupNote", "Ten pictures per run · answers in English"));
        const bestLabel = document.querySelector(".pg-best-score");
        if (bestLabel && bestLabel.firstChild) bestLabel.firstChild.textContent = `${tr("personalBest", "PERSONAL BEST")} `;
        startButton.querySelector("span").textContent = tr("startPlaying", "START PLAYING");
        const play = document.getElementById("pg-play");
        if (play) play.setAttribute("aria-label", tr("playAria", "Pixel Guess round"));
        [tr("round", "ROUND"), tr("score", "SCORE"), tr("guessed", "GUESSED")].forEach((label, index) => {
            const stat = document.querySelector(`.pg-live-stats span:nth-child(${index + 1})`);
            if (stat && stat.firstChild) stat.firstChild.textContent = `${label} `;
        });
        const imageLabel = document.querySelector(".pg-credit-line > span:first-child");
        if (imageLabel) imageLabel.textContent = tr("image", "Image:");
        one(".pg-hint-meter .eyebrow", tr("hintsUsed", "HINTS USED"));
        const formLabel = answerForm.querySelector("label");
        if (formLabel) {
            if (formLabel.firstChild) formLabel.firstChild.textContent = `${tr("answerPrompt", "What do you think it is?")} `;
            const languageNote = formLabel.querySelector("span");
            if (languageNote) languageNote.textContent = tr("answerLanguage", "Type your answer in English");
        }
        hintButton.firstChild.textContent = `${tr("getHint", "Get a hint")} `;
        answerInput.placeholder = tr("answerPlaceholder", "Your answer…");
        submitButton.firstChild.textContent = `${tr("submitAnswer", "Submit answer")} `;
        backButton.textContent = `← ${tr("backToCategories", "Back to categories")}`;
        one(".pg-result-score span", tr("points", "POINTS"));
        one("#pg-results > .eyebrow", tr("resultEyebrow", "THAT'S A WRAP"));
        one(".pg-result-stats div:nth-child(1) span", tr("guessed", "GUESSED"));
        one(".pg-result-stats div:nth-child(2) span", tr("accuracy", "ACCURACY"));
        one(".pg-result-stats div:nth-child(3) span", tr("personalBest", "PERSONAL BEST"));
        document.getElementById("pg-play-again").querySelector("span").textContent = tr("playAgain", "PLAY AGAIN");
        document.getElementById("pg-change-category").textContent = `← ${tr("chooseCategory", "Choose another category")}`;
        one(".footer p:first-child", tr("footer", "made for no particular reason."));
        setupFeedback.textContent = setupFeedbackType === "empty"
            ? tr("emptyCategory", "There are no pictures in this category yet.")
            : "";
        updateCategoryCards();
    }

    function renderRoundText() {
        if (!currentItem) return;
        roundCategory.textContent = categoryName(currentItem.category).toUpperCase();
        attemptsLabel.textContent = `${tr("attempts", "ATTEMPTS")} ${attempts} / ${maximumAttempts}`;
        hintsUsedElement.textContent = `${hintsUsed} / 4`;
        pixelLevelElement.textContent = imageLoaded
            ? tr("pixelLevel", "PIXEL LEVEL") + ` ${revealStep + 1}`
            : tr("pixelLevel", "PIXEL LEVEL") + " 1";
        if (!imageLoaded && roundState !== "image-error") imageStatus.textContent = tr("loadingImage", "Loading image…");
        canvas.setAttribute("aria-label", roundState === "correct" || roundState === "missed"
            ? `${tr("revealedImage", "Revealed image")}: ${currentItem.answer}`
            : tr("pixelatedImage", "Pixelated image clue"));
        creditName.textContent = currentItem.creator || tr("creatorNotStated", "Creator not stated");
        sourceLink.title = currentItem.sourceFile || tr("imageSourcePage", "Image source page");
        sourceLink.textContent = tr("source", "Source");
        licenseLink.textContent = currentItem.license || tr("viewLicense", "View license");

        if (roundState === "image-error") {
            imageStatus.textContent = tr("imageError", "This picture could not be loaded. You can skip to the next one.");
            continueLabel.textContent = tr("skipPicture", "SKIP PICTURE");
        } else if (roundState === "active") {
            hintText.textContent = hintsUsed
                ? getHint(currentItem, hintsUsed - 1)
                : tr("initialHint", "A hint is always optional. Two misses make it easier to spot.");
            continueLabel.textContent = tr("nextPicture", "NEXT PICTURE");
            if (lastFeedbackType === "wrong") renderWrongFeedback();
            else if (lastFeedbackType === "empty") feedback.textContent = "";
        } else if (roundState === "correct" || roundState === "missed") {
            continueLabel.textContent = roundIndex + 1 >= runItems.length
                ? tr("seeResults", "SEE YOUR RESULTS")
                : tr("nextPicture", "NEXT PICTURE");
            feedback.textContent = roundState === "correct"
                ? tr("correctFeedback", `Correct! It was {0}. +{1} points.`, currentItem.answer, roundPoints)
                : tr("missedFeedback", `Out of tries. The answer was {0}.`, currentItem.answer);
        }
        if (imageLoaded) drawPixelated(roundState === "correct" || roundState === "missed");
    }

    function renderWrongFeedback() {
        feedback.textContent = attempts >= 2
            ? tr("wrongWithHint", "Not quite — try again. A hint is ready if you want one.")
            : tr("wrongNoHint", "Not quite — try again! The answer stays hidden.");
        feedback.className = "pg-feedback is-wrong";
    }

    function handleLanguageChange(event) {
        activeLanguage = event && event.detail && event.detail.language
            ? event.detail.language
            : (window.JB_I18N ? window.JB_I18N.language : activeLanguage);
        renderStaticText();
        if (currentItem && (roundState === "active" || roundState === "correct" || roundState === "missed" || roundState === "image-error")) {
            renderRoundText();
        }
        if (!resultsScreen.classList.contains("is-hidden")) renderResults();
    }

    function selectCategory(category) {
        const valid = category === "all" || categoryNames.has(category);
        if (!valid) return;

        selectedCategory = category;
        writeStorage("jb-pixel-guess-category", category);
        setupFeedback.textContent = "";
        setupFeedbackType = "";
        updateCategoryCards();
        updateBestScore();
    }

    function startGame() {
        const available = selectedCategory === "all"
            ? allItems
            : allItems.filter(item => item.category === selectedCategory);

        if (!available.length) {
            setupFeedbackType = "empty";
            setupFeedback.textContent = tr("emptyCategory", "There are no pictures in this category yet.");
            return;
        }

        setupFeedbackType = "";
        const numberOfRounds = Math.min(roundsPerGame, available.length);
        runItems = shuffle(available).slice(0, numberOfRounds);
        roundIndex = 0;
        score = 0;
        correctCount = 0;
        roundPoints = 0;
        scoreElement.textContent = score;
        correctCountElement.textContent = correctCount;
        roundState = "active";

        setupScreen.classList.add("is-hidden");
        resultsScreen.classList.add("is-hidden");
        playScreen.classList.remove("is-hidden");
        loadRound();
    }

    function loadRound() {
        if (roundIndex >= runItems.length) {
            showResults();
            return;
        }

        currentItem = runItems[roundIndex];
        roundState = "active";
        attempts = 0;
        hintsUsed = 0;
        revealStep = 0;
        imageLoaded = false;
        roundPoints = 0;
        lastFeedbackType = "";

        roundCategory.textContent = categoryName(currentItem.category).toUpperCase();
        roundNumber.textContent = `${roundIndex + 1} / ${runItems.length}`;
        scoreElement.textContent = score;
        correctCountElement.textContent = correctCount;
        attemptsLabel.textContent = `${tr("attempts", "ATTEMPTS")} 0 / ${maximumAttempts}`;
        hintsUsedElement.textContent = "0 / 4";
        pixelLevelElement.textContent = `${tr("pixelLevel", "PIXEL LEVEL")} 1`;
        hintText.textContent = tr("initialHint", "A hint is always optional. Two misses make it easier to spot.");
        feedback.textContent = "";
        feedback.className = "pg-feedback";
        continueButton.classList.add("is-hidden");
        continueLabel.textContent = tr("nextPicture", "NEXT PICTURE");
        hintButton.disabled = false;
        answerInput.disabled = false;
        submitButton.disabled = false;
        answerInput.value = "";
        answerInput.focus({ preventScroll: true });

        imageStatus.textContent = tr("loadingImage", "Loading image…");
        imageStatus.classList.remove("is-hidden");
        canvas.setAttribute("aria-label", tr("pixelatedImage", "Pixelated image clue"));

        creditName.textContent = currentItem.creator || tr("creatorNotStated", "Creator not stated");
        sourceLink.href = currentItem.sourceUrl;
        sourceLink.title = currentItem.sourceFile || tr("imageSourcePage", "Image source page");
        sourceLink.textContent = tr("source", "Source");
        licenseLink.href = currentItem.licenseUrl || currentItem.sourceUrl;
        licenseLink.textContent = currentItem.license || tr("viewLicense", "View license");

        currentImage = new Image();
        currentImage.onload = () => {
            imageLoaded = true;
            imageStatus.classList.add("is-hidden");
            drawPixelated();
        };
        currentImage.onerror = () => {
            imageStatus.textContent = tr("imageError", "This picture could not be loaded. You can skip to the next one.");
            imageStatus.classList.remove("is-hidden");
            answerInput.disabled = true;
            submitButton.disabled = true;
            hintButton.disabled = true;
            roundState = "image-error";
            continueButton.classList.remove("is-hidden");
            continueLabel.textContent = tr("skipPicture", "SKIP PICTURE");
        };
        currentImage.src = currentItem.image;
    }

    function drawPixelated(reveal = false) {
        if (!imageLoaded || !currentImage) return;

        const resolution = reveal
            ? Math.min(720, Math.max(currentImage.naturalWidth, currentImage.naturalHeight))
            : pixelLevels[Math.min(revealStep, pixelLevels.length - 1)];
        const canvasWidth = Math.max(8, Math.round(resolution));
        const canvasHeight = Math.max(6, Math.round(canvasWidth * 0.75));

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvasContext.imageSmoothingEnabled = true;
        canvasContext.fillStyle = "#D9D4C8";
        canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);

        const scale = Math.min(
            canvasWidth / currentImage.naturalWidth,
            canvasHeight / currentImage.naturalHeight
        );
        const drawWidth = currentImage.naturalWidth * scale;
        const drawHeight = currentImage.naturalHeight * scale;
        const x = (canvasWidth - drawWidth) / 2;
        const y = (canvasHeight - drawHeight) / 2;

        canvasContext.drawImage(
            currentImage,
            0,
            0,
            currentImage.naturalWidth,
            currentImage.naturalHeight,
            x,
            y,
            drawWidth,
            drawHeight
        );

        pixelLevelElement.textContent = reveal
            ? tr("imageRevealed", "IMAGE REVEALED")
            : `${tr("pixelLevel", "PIXEL LEVEL")} ${revealStep + 1}`;
    }

    function revealOneStep() {
        revealStep = Math.min(revealStep + 1, pixelLevels.length - 1);
        drawPixelated();
    }

    function getHint(item, index) {
        const words = item.answer.split(/\s+/).filter(Boolean);
        if (index === 0) {
            return item.clue
                ? (window.JB_I18N ? window.JB_I18N.t(`pg.clue.${item.id}`, item.clue) : item.clue)
                : tr("visualHint", "Look closely at the shape and context in the picture.");
        }
        if (index === 1) return tr(words.length === 1 ? "answerOneWord" : "answerManyWords", `The answer has {0} ${words.length === 1 ? "word" : "words"}.`, words.length);
        if (index === 2) {
            const shape = words.map(word => `${word[0]}${"·".repeat(Math.max(1, word.length - 2))}${word.at(-1)}`).join(" / ");
            return tr("wordPattern", "Word pattern: {0}", shape);
        }
        return tr("firstLetters", "The first letters are {0}.", words.map(word => word[0].toUpperCase()).join(" · "));
    }

    function useHint() {
        if (roundState !== "active" || hintsUsed >= 4 || !imageLoaded) return;

        hintText.textContent = getHint(currentItem, hintsUsed);
        hintsUsed++;
        hintsUsedElement.textContent = `${hintsUsed} / 4`;
        revealOneStep();
        hintButton.disabled = hintsUsed >= 4;
        answerInput.focus({ preventScroll: true });
    }

    function setRoundFinished(success) {
        roundState = success ? "correct" : "missed";
        lastFeedbackType = "";
        drawPixelated(true);
        canvas.setAttribute("aria-label", `${tr("revealedImage", "Revealed image")}: ${currentItem.answer}`);
        answerInput.disabled = true;
        submitButton.disabled = true;
        hintButton.disabled = true;
        continueLabel.textContent = roundIndex + 1 >= runItems.length
            ? tr("seeResults", "SEE YOUR RESULTS")
            : tr("nextPicture", "NEXT PICTURE");
        continueButton.classList.remove("is-hidden");
        feedback.className = `pg-feedback ${success ? "is-correct" : "is-wrong"}`;
        renderRoundText();
    }

    function submitAnswer(event) {
        event.preventDefault();
        if (roundState !== "active" || !imageLoaded) return;

        const guess = answerInput.value;
        if (!normalizeAnswer(guess)) {
            answerInput.focus();
            return;
        }

        if (isCorrectAnswer(guess, currentItem)) {
            roundPoints = Math.max(10, 100 - revealStep * 18);
            score += roundPoints;
            correctCount++;
            window.DailyChallenge?.report("pixel-guess", correctCount);
            scoreElement.textContent = score;
            correctCountElement.textContent = correctCount;
            saveHighScore();
            setRoundFinished(true);
            return;
        }

        attempts++;
        attemptsLabel.textContent = `${tr("attempts", "ATTEMPTS")} ${attempts} / ${maximumAttempts}`;
        answerInput.value = "";
        revealOneStep();

        if (attempts >= maximumAttempts) {
            setRoundFinished(false);
            return;
        }

        lastFeedbackType = "wrong";
        renderWrongFeedback();
        answerInput.focus();
    }

    function saveHighScore() {
        const key = highScoreKey(selectedCategory);
        const stored = Number(readStorage(key)) || 0;
        if (score > stored) writeStorage(key, score);
        updateBestScore();
    }

    function moveForward() {
        if (roundState === "active") return;
        roundIndex++;
        if (roundIndex >= runItems.length) {
            showResults();
        } else {
            loadRound();
        }
    }

    function showResults() {
        roundState = "results";
        playScreen.classList.add("is-hidden");
        resultsScreen.classList.remove("is-hidden");

        const played = runItems.length;
        const percentage = played ? Math.round((correctCount / played) * 100) : 0;
        finalScore.textContent = score;
        finalCorrect.textContent = `${correctCount} / ${played}`;
        finalPercent.textContent = `${percentage}%`;
        finalBest.textContent = getHighScore(selectedCategory);

        renderResults();
    }

    function renderResults() {
        const played = runItems.length;
        const percentage = played ? Math.round((correctCount / played) * 100) : 0;
        if (percentage === 100) resultTitle.textContent = tr("resultPerfect", "Pixel-perfect.");
        else if (percentage >= 70) resultTitle.textContent = tr("resultSharp", "Sharp eyes.");
        else if (percentage >= 40) resultTitle.textContent = tr("resultFocus", "You found your focus.");
        else resultTitle.textContent = tr("resultPixelsWon", "The pixels won this round.");

        resultMessage.textContent = tr(
            "resultMessage",
            "You guessed {0} of {1} pictures in {2}.",
            correctCount,
            played,
            categoryName(selectedCategory)
        );
    }

    function returnToSetup() {
        roundState = "setup";
        playScreen.classList.add("is-hidden");
        resultsScreen.classList.add("is-hidden");
        setupScreen.classList.remove("is-hidden");
        updateCategoryCards();
        updateBestScore();
    }

    categoryGrid.addEventListener("click", event => {
        const card = event.target.closest(".pg-category-card");
        if (!card || card.disabled) return;
        selectCategory(card.dataset.category);
    });

    startButton.addEventListener("click", startGame);
    hintButton.addEventListener("click", useHint);
    answerForm.addEventListener("submit", submitAnswer);
    continueButton.addEventListener("click", moveForward);
    backButton.addEventListener("click", returnToSetup);
    document.getElementById("pg-play-again").addEventListener("click", () => {
        resultsScreen.classList.add("is-hidden");
        startGame();
    });
    document.getElementById("pg-change-category").addEventListener("click", returnToSetup);
    window.addEventListener("jb:languagechange", handleLanguageChange);

    const savedCategory = readStorage("jb-pixel-guess-category");
    if (savedCategory && (savedCategory === "all" || categoryNames.has(savedCategory))) {
        selectedCategory = savedCategory;
    }

    renderStaticText();
    updateCategoryCards();
    updateBestScore();
})();
