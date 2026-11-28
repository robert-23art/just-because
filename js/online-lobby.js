(() => {
    "use strict";

    function translate(key, fallback, values) {
        return window.JB_I18N?.t ? window.JB_I18N.t(key, fallback, values) : fallback;
    }

    function profile() {
        try {
            return JSON.parse(localStorage.getItem("jb_profile") || "null") || {};
        } catch {
            return {};
        }
    }

    function avatarMarkup(value) {
        const emojis = { cat:"🐱",fox:"🦊",frog:"🐸",panda:"🐼",penguin:"🐧",octopus:"🐙",rocket:"🚀",owl:"🦉",lion:"🦁",dragon:"🐉",unicorn:"🦄",alien:"👾" };
        return emojis[value] || value || "👤";
    }

    function mount(gameId, boardRoot, onStart) {
        const setup = document.createElement("section");
        setup.className = "online-lobby";
        setup.innerHTML = `
            <div class="online-lobby-card">
                <p class="eyebrow" data-lobby-eyebrow></p>
                <h2 data-lobby-title></h2>
                <div class="online-lobby-options">
                    <button type="button" data-lobby-option="quick"></button>
                    <button type="button" data-lobby-option="friend"></button>
                    <button type="button" data-lobby-option="bot"></button>
                </div>
                <p class="online-lobby-status" role="status" aria-live="polite" data-lobby-status></p>
            </div>`;
        boardRoot.prepend(setup);
        const status = setup.querySelector("[data-lobby-status]");
        const title = setup.querySelector("[data-lobby-title]");
        const eyebrow = setup.querySelector("[data-lobby-eyebrow]");
        function renderText() {
            eyebrow.textContent = translate("PLAY ONLINE", "PLAY ONLINE");
            title.textContent = translate("Choose how to play", "Choose how to play");
            setup.querySelector('[data-lobby-option="quick"]').textContent = translate("Quick Match (Online)", "Quick Match (Online)");
            setup.querySelector('[data-lobby-option="friend"]').textContent = translate("Play with a Friend", "Play with a Friend");
            setup.querySelector('[data-lobby-option="bot"]').textContent = translate("Play vs Smart Bot", "Play vs Smart Bot");
        }
        renderText();
        window.addEventListener("jb:languagechange", renderText);

        async function quickMatch() {
            status.textContent = translate("Looking for an open room…", "Looking for an open room…");
            const player = profile();
            const roomCode = Math.random().toString(36).slice(2, 8).toUpperCase();
            if (window.JustBecauseSupabase?.ready()) {
                const client = window.JustBecauseSupabase.client();
                if (client) {
                    const { data } = await client.from("online_rooms").select("*").eq("game_id", gameId).eq("status", "waiting").limit(1).maybeSingle();
                    if (data?.room_code) {
                        await client.from("online_rooms").update({ status:"playing", player2_code: player.friendCode || "", player2_name: player.name || "Player" }).eq("room_code", data.room_code);
                        startMatch(data.room_code, "friend");
                        return;
                    }
                    await client.from("online_rooms").insert({ room_code: roomCode, game_id: gameId, status:"waiting", player1_code: player.friendCode || "", player1_name: player.name || "Player" });
                }
            }
            status.textContent = translate("Waiting in room {code}…", "Waiting in room {code}…", { code: roomCode });
            window.JustBecauseLobby?.createFriendUrl?.(roomCode);
        }

        function friendRoom() {
            const code = Math.random().toString(36).slice(2, 8).toUpperCase();
            const url = new URL(location.href);
            url.searchParams.set("room", code);
            status.textContent = `${translate("Private room", "Private room")}: ${code}`;
            const input = document.createElement("input");
            input.readOnly = true;
            input.value = url.href;
            input.className = "online-lobby-room-link";
            status.append(document.createElement("br"), input);
            input.addEventListener("focus", () => input.select());
            try { navigator.clipboard?.writeText(url.href); } catch {}
        }

        function botMatch() {
            status.textContent = translate("Starting against the smart bot…", "Starting against the smart bot…");
            startMatch("BOT", "bot");
        }

        function startMatch(roomCode, mode) {
            setup.hidden = true;
            setup.setAttribute("hidden", "");
            const p = profile();
            onStart({
                roomCode,
                mode,
                self: { name: p.name || "Player", avatar: avatarMarkup(p.avatar), role: p.role || "player" },
                opponent: mode === "bot"
                    ? { name: translate("Smart Bot", "Smart Bot"), avatar: "🤖", role: "bot" }
                    : { name: translate("Online player", "Online player"), avatar: "👤", role: "player" }
            });
        }

        setup.querySelector('[data-lobby-option="quick"]').addEventListener("click", quickMatch);
        setup.querySelector('[data-lobby-option="friend"]').addEventListener("click", friendRoom);
        setup.querySelector('[data-lobby-option="bot"]').addEventListener("click", botMatch);

        const params = new URLSearchParams(location.search);
        if (params.get("room")) status.textContent = `${translate("Private room", "Private room")}: ${params.get("room")}`;

        window.JustBecauseLobby = {
            mount,
            profile,
            avatarMarkup,
            translate
        };
        return setup;
    }

    window.JustBecauseLobby = { mount };
})();
