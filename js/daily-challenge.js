(() => {
    "use strict";

    const storageKey = "jb_daily_challenge";
    const games = [
        { id: "guess-color", route: "games/guess-color.html", name: "Guess the Color", goal: "Score at least 7 in Guess the Color.", target: 7 },
        { id: "higher-lower", route: "games/higher-lower.html", name: "Higher or Lower", goal: "Get 7 correct guesses in Higher or Lower.", target: 7 },
        { id: "pixel-guess", route: "games/pixel-guess.html", name: "Pixel Guess", goal: "Identify 3 pictures in Pixel Guess.", target: 3 },
        { id: "odd-one-out", route: "games/odd-one-out.html", name: "Odd One Out", goal: "Get 7 questions right in Odd One Out.", target: 7 },
        { id: "two-truths", route: "games/two-truths.html", name: "Two Truths, One Lie", goal: "Find 7 lies in Two Truths, One Lie.", target: 7 },
        { id: "whats-next", route: "games/whats-next.html", name: "What's Next?", goal: "Solve 7 puzzles in What's Next?", target: 7 },
        { id: "where-am-i", route: "games/where-am-i.html", name: "Where Am I?", goal: "Identify 7 countries in Where Am I?", target: 7 },
        { id: "flag-quiz", route: "games/flag-quiz.html", name: "Flag Quiz", goal: "Name 8 flags correctly in Flag Quiz.", target: 8 },
        { id: "reflex", route: "games/reflex.html", name: "Reflex", goal: "Average 300 ms or faster across 5 rounds.", target: 300, comparison: "lte" },
        { id: "sequence", route: "games/sequence.html", name: "Sequence", goal: "Reach Level 8 in Sequence.", target: 8 },
        { id: "sort-it", route: "games/sort-it.html", name: "Sort It", goal: "Complete 4 tasks in Sort It.", target: 4 }
    ];

    function localDate(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const today = localDate();
    const todayDate = new Date();
    const yesterday = localDate(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 1));

    function hash(value) {
        let result = 2166136261;
        for (let index = 0; index < value.length; index++) {
            result = Math.imul(result ^ value.charCodeAt(index), 16777619);
        }
        return result >>> 0;
    }

    const challenge = games[hash(`jb-daily-v1:${today}`) % games.length];
    const gameId = location.pathname.split("/").pop().replace(/\.html$/i, "");
    const isDailyEntry = new URLSearchParams(location.search).get("daily") === "1";
    let storageError = false;
    let savedState = readState();

    function emptyState() {
        return { lastCompletedDate: null, streak: 0, progressDate: null, progressGameId: null, progressValue: null };
    }

    function readState() {
        try {
            const parsed = JSON.parse(localStorage.getItem(storageKey) || "null");
            if (!parsed || typeof parsed !== "object") return emptyState();
            return { ...emptyState(), ...parsed };
        } catch {
            storageError = true;
            return emptyState();
        }
    }

    function saveState(nextState) {
        try {
            localStorage.setItem(storageKey, JSON.stringify(nextState));
            savedState = nextState;
            storageError = false;
            return true;
        } catch {
            storageError = true;
            render();
            return false;
        }
    }

    function translate(key, fallback, values) {
        return window.JB_I18N?.t ? window.JB_I18N.t(key, fallback, values) : fallback;
    }

    function isComplete() {
        return savedState.lastCompletedDate === today;
    }

    function currentProgress() {
        if (savedState.progressDate !== today || savedState.progressGameId !== challenge.id) return null;
        const value = Number(savedState.progressValue);
        return Number.isFinite(value) ? value : null;
    }

    function formatNumber(value) {
        return new Intl.NumberFormat(window.JB_I18N?.language || "en", { maximumFractionDigits: 0 }).format(value);
    }

    function dateLabel() {
        return new Intl.DateTimeFormat(window.JB_I18N?.language || "en", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(todayDate);
    }

    function gameName() {
        return translate(challenge.name, challenge.name);
    }

    function goalText() {
        return translate(challenge.goal, challenge.goal);
    }

    function progressText() {
        if (storageError) {
            return translate("Progress could not be saved in this browser.", "Progress could not be saved in this browser.");
        }
        const progress = currentProgress();
        if (progress === null) {
            return translate("Your progress will appear here.", "Your progress will appear here.");
        }
        if (challenge.comparison === "lte") {
            return translate("Your average so far: {progress} ms (target: {target} ms).", "Your average so far: {progress} ms (target: {target} ms).", {
                progress: formatNumber(progress),
                target: formatNumber(challenge.target)
            });
        }
        return translate("{progress} / {target} completed.", "{progress} / {target} completed.", {
            progress: formatNumber(progress),
            target: formatNumber(challenge.target)
        });
    }

    function createHomeCard() {
        if (document.querySelector("#daily-challenge-card")) return;
        const section = document.querySelector(".games-section");
        if (!section) return;
        const card = document.createElement("article");
        card.className = "daily-challenge-card";
        card.id = "daily-challenge-card";
        card.setAttribute("aria-label", translate("Today's Challenge", "Today's Challenge"));
        card.innerHTML = `
            <div class="daily-challenge-copy">
                <p class="daily-challenge-kicker" data-daily-title></p>
                <p class="daily-challenge-date" data-daily-date></p>
                <strong class="daily-challenge-game" data-daily-game></strong>
                <p class="daily-challenge-goal" data-daily-goal></p>
                <p class="daily-challenge-progress" data-daily-progress></p>
            </div>
            <div class="daily-challenge-action">
                <div class="daily-challenge-streak"><span data-daily-streak-label></span><strong data-daily-streak></strong></div>
                <a class="daily-challenge-link" data-daily-link></a>
            </div>`;
        section.insertBefore(card, section.firstChild);
    }

    function createBanner() {
        if (document.querySelector("#daily-challenge-banner")) return;
        if (gameId !== challenge.id && !isDailyEntry) return;
        const main = document.querySelector("main");
        if (!main) return;
        const banner = document.createElement("aside");
        banner.className = "daily-challenge-banner";
        banner.id = "daily-challenge-banner";
        banner.setAttribute("aria-live", "polite");
        banner.innerHTML = `
            <div class="daily-challenge-copy">
                <p class="daily-challenge-kicker" data-daily-title></p>
                <p class="daily-challenge-date" data-daily-date></p>
                <strong class="daily-challenge-game" data-daily-game></strong>
                <p class="daily-challenge-goal" data-daily-goal></p>
                <p class="daily-challenge-progress" data-daily-progress></p>
                <p class="daily-challenge-celebration" data-daily-celebration hidden></p>
            </div>
            <a class="daily-challenge-link" data-daily-link hidden></a>`;
        main.insertBefore(banner, main.firstChild);
    }

    function renderCard(card, onBanner) {
        card.querySelector("[data-daily-title]").textContent = translate("Today's Challenge", "Today's Challenge");
        card.querySelector("[data-daily-date]").textContent = dateLabel();
        card.querySelector("[data-daily-game]").textContent = gameName();
        card.querySelector("[data-daily-goal]").textContent = goalText();
        card.querySelector("[data-daily-progress]").textContent = progressText();
        card.classList.toggle("is-completed", isComplete());

        const link = card.querySelector("[data-daily-link]");
        if (onBanner) {
            const celebration = card.querySelector("[data-daily-celebration]");
            if (isComplete()) {
                celebration.hidden = false;
                celebration.textContent = translate("Daily Challenge Completed!", "Daily Challenge Completed!");
                link.hidden = false;
                link.href = "../index.html";
                link.textContent = translate("Back to homepage →", "Back to homepage →");
            } else {
                celebration.hidden = true;
                if (gameId === challenge.id) {
                    link.hidden = true;
                    link.removeAttribute("href");
                } else {
                    link.hidden = false;
                    link.href = `../${challenge.route}?daily=1`;
                    link.textContent = translate("Open today's game →", "Open today's game →");
                }
            }
            return;
        }

        card.querySelector("[data-daily-streak-label]").textContent = translate("Daily Streak", "Daily Streak");
        card.querySelector("[data-daily-streak]").textContent = `🔥 ${formatNumber(savedState.streak || 0)}`;
        link.href = `${challenge.route}?daily=1`;
        link.textContent = isComplete()
            ? translate("Completed today ✓", "Completed today ✓")
            : translate("Play Challenge →", "Play Challenge →");
        link.setAttribute("aria-label", `${translate("Play Challenge", "Play Challenge")}: ${gameName()}`);
    }

    function render() {
        createHomeCard();
        createBanner();
        const card = document.querySelector("#daily-challenge-card");
        const banner = document.querySelector("#daily-challenge-banner");
        if (card) renderCard(card, false);
        if (banner) renderCard(banner, true);
    }

    function report(progressGameId, value) {
        if (progressGameId !== challenge.id || gameId !== challenge.id || !Number.isFinite(value)) return false;

        const previous = currentProgress();
        const improved = previous === null
            || (challenge.comparison === "lte" ? value < previous : value > previous);
        if (improved) {
            if (!saveState({
                ...savedState,
                progressDate: today,
                progressGameId: challenge.id,
                progressValue: value
            })) return false;
        }

        const achieved = challenge.comparison === "lte"
            ? value <= challenge.target
            : value >= challenge.target;
        if (!achieved || isComplete()) {
            render();
            return false;
        }

        const nextStreak = savedState.lastCompletedDate === yesterday
            ? Number(savedState.streak || 0) + 1
            : 1;
        const bestProgress = previous === null
            ? value
            : challenge.comparison === "lte"
                ? Math.min(value, previous)
                : Math.max(value, previous);
        if (!saveState({
            ...savedState,
            lastCompletedDate: today,
            streak: nextStreak,
            progressDate: today,
            progressGameId: challenge.id,
            progressValue: bestProgress
        })) return false;
        window.JustBecauseProfile?.recordDailyChallenge(today);
        render();
        return true;
    }

    window.DailyChallenge = {
        challenge,
        report,
        get completed() {
            return isComplete();
        }
    };

    window.addEventListener("jb:languagechange", render);
    window.addEventListener("pageshow", () => {
        savedState = readState();
        render();
    });
    window.addEventListener("storage", event => {
        if (event.key !== storageKey) return;
        savedState = readState();
        render();
    });
    render();
})();
