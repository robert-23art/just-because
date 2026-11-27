const DONATION_URL = "";

const gameCards = [...document.querySelectorAll(".games-grid .game-card")];

const heroActions = document.querySelector(".hero-actions");
const randomButton = document.createElement("a");
randomButton.href = "#games";
randomButton.textContent = "Surprise me ↗";
randomButton.className = "random-button";
randomButton.setAttribute("aria-label", "Open a random game");

const randomGameStorageKey = "just-because-random-game-state";
const knownGamePaths = new Set(gameCards.map(card => card.getAttribute("href")).filter(Boolean));
let savedRandomState = null;

try {
    savedRandomState = JSON.parse(sessionStorage.getItem(randomGameStorageKey) || "null");
} catch {
    // Storage can be unavailable in local-file previews; random selection still works for that page view.
}

let gameBag = Array.isArray(savedRandomState?.bag)
    ? savedRandomState.bag.filter(path => knownGamePaths.has(path))
    : [];
let lastRandomGame = knownGamePaths.has(savedRandomState?.last) ? savedRandomState.last : "";

function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
}

randomButton.addEventListener("click", () => {
    const availableGames = gameCards.map(card => card.getAttribute("href")).filter(Boolean);
    if (!availableGames.length) return;

    if (!gameBag.length) {
        gameBag = shuffle(availableGames);
        if (gameBag.length > 1 && gameBag[gameBag.length - 1] === lastRandomGame) {
            [gameBag[0], gameBag[gameBag.length - 1]] = [gameBag[gameBag.length - 1], gameBag[0]];
        }
    }

    const destination = gameBag.pop();
    lastRandomGame = destination;
    randomButton.href = destination;
    try {
        sessionStorage.setItem(randomGameStorageKey, JSON.stringify({ bag: gameBag, last: lastRandomGame }));
    } catch {
        // Keep the in-memory shuffle bag when browser storage is unavailable.
    }
});

heroActions.appendChild(randomButton);

const donationButton = document.querySelector("#donation-button");
const donationDialog = document.querySelector("#donation-dialog");
const donationDialogDismiss = document.querySelector("#donation-dialog-dismiss");

donationButton.addEventListener("click", () => {
    const donationUrl = DONATION_URL.trim();
    if (donationUrl) {
        window.open(donationUrl, "_blank", "noopener,noreferrer");
        return;
    }
    donationDialog.showModal();
});

donationDialogDismiss.addEventListener("click", () => donationDialog.close());
donationDialog.addEventListener("click", event => {
    if (event.target === donationDialog) donationDialog.close();
});

const searchInput = document.querySelector("#game-search-input");
const noGamesMessage = document.querySelector("#no-games-found");
const categoryButtons = [...document.querySelectorAll("[data-category-filter]")];
let activeCategory = "all";

function normalizeSearchText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, " ")
        .trim();
}

function filterGames() {
    if (!noGamesMessage) return;

    const rawQuery = searchInput?.value.trim() || "";
    const queryWords = normalizeSearchText(rawQuery).split(/\s+/).filter(Boolean);
    const isGameNumber = /^\d{1,2}$/.test(rawQuery);
    const normalizedNumber = isGameNumber ? rawQuery.padStart(2, "0") : "";
    let visibleGames = 0;

    for (const card of gameCards) {
        const categoryMatches = activeCategory === "all" || card.dataset.category === activeCategory;
        const searchableText = [
            card.dataset.gameNumber,
            card.querySelector("h3")?.textContent,
            card.querySelector(".card-bottom p")?.textContent,
            card.dataset.keywords
        ].filter(Boolean).join(" ");
        const normalizedText = normalizeSearchText(searchableText);
        const searchMatches = isGameNumber
            ? card.dataset.gameNumber === normalizedNumber
            : queryWords.every(word => normalizedText.includes(word));
        const isVisible = categoryMatches && searchMatches;
        card.hidden = !isVisible;
        if (isVisible) visibleGames++;
    }

    noGamesMessage.hidden = visibleGames !== 0;
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.categoryFilter;
        categoryButtons.forEach(categoryButton => {
            categoryButton.setAttribute("aria-pressed", String(categoryButton === button));
            categoryButton.classList.toggle("is-active", categoryButton === button);
        });
        filterGames();
    });
});

searchInput?.addEventListener("input", filterGames);
window.addEventListener("jb:languagechange", filterGames);
filterGames();
