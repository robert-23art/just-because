(() => {
    "use strict";

    const storageKey = "jb_theme";
    const themes = [
        { id: "light", label: "Light", color: "#f5f2ea" },
        { id: "dark", label: "Dark Mode", color: "#22252d" },
        { id: "warm-paper", label: "Warm Paper", color: "#f0e2c6" },
        { id: "midnight-blue", label: "Midnight Blue", color: "#15263d" }
    ];
    const validThemes = new Set(themes.map(theme => theme.id));
    const root = document.documentElement;
    let activeTheme = "light";

    try {
        const savedTheme = localStorage.getItem(storageKey);
        if (validThemes.has(savedTheme)) activeTheme = savedTheme;
    } catch {
        // The default theme remains available when storage is disabled.
    }

    root.dataset.theme = activeTheme;

    function translate(key) {
        return window.JB_I18N?.t(key) || key;
    }

    function refresh(container) {
        const button = container.querySelector(".theme-trigger");
        const caption = container.querySelector(".theme-caption");
        if (!button || !caption) return;

        caption.textContent = translate("Theme");
        button.setAttribute("aria-label", translate("Theme"));
        container.querySelectorAll(".theme-option").forEach(option => {
            const theme = themes.find(item => item.id === option.dataset.themeOption);
            option.querySelector(".theme-option-label").textContent = translate(theme.label);
            option.setAttribute("aria-checked", String(theme.id === activeTheme));
        });
    }

    function applyTheme(themeId) {
        if (!validThemes.has(themeId)) return;
        activeTheme = themeId;
        root.dataset.theme = themeId;
        try {
            localStorage.setItem(storageKey, themeId);
        } catch {
            // The chosen theme still applies for this page view.
        }
        document.querySelectorAll("[data-theme-switcher]").forEach(refresh);
    }

    function createSwitcher(container) {
        container.classList.add("theme-switcher");
        container.innerHTML = `
            <button class="theme-trigger" type="button" aria-expanded="false" aria-haspopup="menu">
                <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 3v18M3 12h18"/>
                </svg>
                <span class="theme-caption"></span>
            </button>
            <div class="theme-menu" role="menu" hidden></div>`;

        const button = container.querySelector(".theme-trigger");
        const menu = container.querySelector(".theme-menu");

        themes.forEach(theme => {
            const option = document.createElement("button");
            option.type = "button";
            option.className = "theme-option";
            option.dataset.themeOption = theme.id;
            option.setAttribute("role", "menuitemradio");
            option.innerHTML = `<span class="theme-swatch" aria-hidden="true"></span><span class="theme-option-label"></span>`;
            option.querySelector(".theme-swatch").style.setProperty("--swatch-color", theme.color);
            option.addEventListener("click", () => {
                applyTheme(theme.id);
                menu.hidden = true;
                button.setAttribute("aria-expanded", "false");
                button.focus();
            });
            menu.append(option);
        });

        button.addEventListener("click", () => {
            menu.hidden = !menu.hidden;
            button.setAttribute("aria-expanded", String(!menu.hidden));
        });
        container.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                menu.hidden = true;
                button.setAttribute("aria-expanded", "false");
                button.focus();
            }
        });
        document.addEventListener("click", event => {
            if (!container.contains(event.target)) {
                menu.hidden = true;
                button.setAttribute("aria-expanded", "false");
            }
        });
        refresh(container);
    }

    function initialize() {
        document.querySelectorAll("[data-theme-switcher]").forEach(createSwitcher);
        window.addEventListener("jb:languagechange", () => {
            document.querySelectorAll("[data-theme-switcher]").forEach(refresh);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
})();
