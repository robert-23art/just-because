(() => {
    "use strict";
    const storageKey = "jb_sound";
    let enabled = localStorage.getItem(storageKey) !== "off";
    let context = null;

    function translate(key, fallback) {
        return window.JB_I18N?.t ? window.JB_I18N.t(key, fallback) : fallback;
    }

    function getContext() {
        if (!enabled) return null;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return null;
        context ||= new AudioContext();
        if (context.state === "suspended") context.resume();
        return context;
    }

    function tone(frequency, duration = 0.08, delay = 0, volume = 0.025, type = "sine") {
        const audio = getContext();
        if (!audio) return;
        const start = audio.currentTime + delay;
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(volume, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
        oscillator.connect(gain).connect(audio.destination);
        oscillator.start(start);
        oscillator.stop(start + duration);
    }

    function play(kind) {
        if (kind === "good") {
            tone(660, 0.08);
            tone(880, 0.1, 0.07);
        } else if (kind === "bad") {
            tone(180, 0.14, 0, 0.04, "triangle");
        } else if (kind === "record") {
            tone(523, 0.1);
            tone(659, 0.1, 0.08);
            tone(784, 0.16, 0.16);
        } else {
            tone(360, 0.055, 0, 0.018, "triangle");
        }
    }

    function createButton() {
        const headerActions = document.querySelector(".header-actions");
        if (!headerActions) return;
        const container = document.createElement("div");
        container.className = "sound-switcher";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "sound-button";
        button.addEventListener("click", () => {
            enabled = !enabled;
            localStorage.setItem(storageKey, enabled ? "on" : "off");
            render();
            if (enabled) play("good");
        });
        container.append(button);
        const profile = headerActions.querySelector("[data-profile-switcher]");
        headerActions.insertBefore(container, profile || null);
        function render() {
            button.textContent = enabled ? "🔊" : "🔇";
            button.setAttribute("aria-label", enabled
                ? translate("Turn sound off", "Turn sound off")
                : translate("Turn sound on", "Turn sound on"));
            button.setAttribute("aria-pressed", String(enabled));
        }
        render();
        window.addEventListener("jb:languagechange", render);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createButton, { once: true });
    } else {
        createButton();
    }

    document.addEventListener("pointerdown", event => {
        if (event.target.closest("button, a")) play("click");
    }, { passive: true });

    window.JustBecauseSound = { play, enabled: () => enabled };
})();
