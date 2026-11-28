(() => {
    "use strict";
    const gameName = document.querySelector("h1")?.textContent.trim() || document.title.split(" — ")[0];

    function translate(key, fallback, values) {
        return window.JB_I18N?.t ? window.JB_I18N.t(key, fallback, values) : fallback;
    }

    async function copyText(text) {
        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch {
                // file:// and denied clipboard permissions use the fallback below.
            }
        }
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.append(textarea);
        textarea.select();
        let copied = false;
        try {
            copied = document.execCommand("copy");
        } finally {
            textarea.remove();
        }
        return copied;
    }

    function makeMessage() {
        const score = document.querySelector(".final-score strong, [class*='-final-score'] strong, #final-score, #sequence-level, #sort-it-score, #results-best")
            ?.textContent?.trim() || "0";
        const mode = document.querySelector(".difficulty-pill.is-selected, [class*='difficulty'].is-selected, .selected-mode")
            ?.textContent?.trim() || "";
        const parts = [
            `🎮 ${gameName}`,
            mode ? `• ${mode}` : "",
            `• ${translate("Score", "Score")}: ${score}`,
            "🎯",
            "https://just-because-games.netlify.app"
        ].filter(Boolean);
        return parts.join(" ");
    }

    function createButton() {
        const screens = document.querySelectorAll(".game-over, [class*='results'], [id*='results'], [class*='game-over']");
        const uniqueScreens = [...new Set([...screens].filter(screen => screen !== document.querySelector("main")))]
            .filter(screen => screen.id !== "profile-dialog");
        for (const screen of uniqueScreens) {
            if (screen.querySelector("[data-share-score]")) continue;
            const button = document.createElement("button");
            button.type = "button";
            button.className = "share-score-button";
            button.dataset.shareScore = "";
            const label = document.createElement("span");
            label.textContent = translate("Share Score", "Share Score");
            const status = document.createElement("span");
            status.className = "share-score-status";
            status.setAttribute("role", "status");
            status.setAttribute("aria-live", "polite");
            button.append(label);
            button.addEventListener("click", async () => {
                const copied = await copyText(makeMessage());
                status.textContent = copied
                    ? translate("Copied to clipboard!", "Copied to clipboard!")
                    : translate("Could not copy — please copy manually.", "Could not copy — please copy manually.");
                button.append(status);
            });
            screen.append(button);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(createButton, 150), { once: true });
    } else {
        setTimeout(createButton, 150);
    }
    window.JustBecauseShare = { copyText, makeMessage, refresh: createButton };
})();
