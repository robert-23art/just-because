(() => {
    "use strict";

    const profileStorageKey = "jb_profile";
    const gameStats = [
        { id: "guess-color", label: "Guess the Color", prefix: "jb-color-score-" },
        { id: "higher-lower", label: "Higher or Lower", prefix: "jb-hl-score-" },
        { id: "pixel-guess", label: "Pixel Guess", prefix: "jb-pixel-guess-highscore-" },
        { id: "odd-one-out", label: "Odd One Out", prefix: "jb-ooo-score-" },
        { id: "two-truths", label: "Two Truths, One Lie", prefix: "jb-ttl-best-" },
        { id: "whats-next", label: "What's Next?", prefix: "jb-wn-score-" },
        { id: "where-am-i", label: "Where Am I?", prefix: "jb-wai-best-" },
        { id: "flag-quiz", label: "Flag Quiz", prefix: "jb_flag_quiz_highscore_" },
        { id: "reflex", label: "Reflex", prefix: "jb_reflex_best_ms_", lowerIsBetter: true },
        { id: "sequence", label: "Sequence", prefix: "jb_sequence_best_" },
        { id: "sort-it", label: "Sort It", prefix: "jb_sort_it_best_" }
    ];
    const avatars = [
        { id: "cat", emoji: "🐱", name: "Cat", free: true },
        { id: "fox", emoji: "🦊", name: "Fox", free: true },
        { id: "frog", emoji: "🐸", name: "Frog", free: true },
        { id: "panda", emoji: "🐼", name: "Panda", free: true },
        { id: "penguin", emoji: "🐧", name: "Penguin", free: true },
        { id: "octopus", emoji: "🐙", name: "Octopus", free: true },
        { id: "rocket", emoji: "🚀", name: "Rocket", requirement: "Play 3 different games" },
        { id: "owl", emoji: "🦉", name: "Owl", requirement: "Play all 11 games" },
        { id: "unicorn", emoji: "🦄", name: "Unicorn", requirement: "Earn 3 personal bests" },
        { id: "lion", emoji: "🦁", name: "Lion", requirement: "Get 1 personal best" },
        { id: "dragon", emoji: "🐉", name: "Dragon", requirement: "Complete a Daily Challenge" },
        { id: "butterfly", emoji: "🦋", name: "Butterfly", requirement: "Keep a 7-day streak" },
        { id: "mushroom", emoji: "🍄", name: "Mushroom", requirement: "Play 5 different games" },
        { id: "alien", emoji: "👾", name: "Alien", requirement: "Complete 3 Daily Challenges" }
    ];
    const titles = [
        { id: "curious", label: "Curious Player" },
        { id: "explorer", label: "Game Explorer", requirement: "Play all 11 games" },
        { id: "records", label: "Record Chaser", requirement: "Earn 3 personal bests" },
        { id: "daily", label: "Daily Regular", requirement: "Complete a Daily Challenge" },
        { id: "streak", label: "Streak Keeper", requirement: "Keep a 7-day streak" }
    ];
    const avatarById = new Map(avatars.map(avatar => [avatar.id, avatar]));
    const validGameIds = new Set(gameStats.map(game => game.id));
    let activeTab = "profile";
    let storageError = false;
    let profile = readProfile();

    function translate(key, fallback = key, values) {
        return window.JB_I18N?.t ? window.JB_I18N.t(key, fallback, values) : fallback;
    }

    function emptyProfile() {
        return {
            name: "Player",
            title: "curious",
            avatar: "cat",
            customAvatar: "",
            friendCode: "",
            playedGames: [],
            dailyCompletedDates: [],
            friends: []
        };
    }

    function readProfile() {
        try {
            const parsed = JSON.parse(localStorage.getItem(profileStorageKey) || "null");
            if (!parsed || typeof parsed !== "object") return emptyProfile();
            return {
                ...emptyProfile(),
                ...parsed,
                name: typeof parsed.name === "string" ? parsed.name.slice(0, 20) : "Player",
                title: typeof parsed.title === "string" ? parsed.title : "curious",
                avatar: typeof parsed.avatar === "string" ? parsed.avatar : "cat",
                customAvatar: typeof parsed.customAvatar === "string" && parsed.customAvatar.startsWith("data:image/") ? parsed.customAvatar : "",
                friendCode: typeof parsed.friendCode === "string" && /^JB-[A-Z0-9]{4}$/.test(parsed.friendCode) ? parsed.friendCode : "",
                playedGames: Array.isArray(parsed.playedGames) ? parsed.playedGames.filter(id => validGameIds.has(id)) : [],
                dailyCompletedDates: Array.isArray(parsed.dailyCompletedDates) ? parsed.dailyCompletedDates.filter(date => typeof date === "string") : [],
                friends: Array.isArray(parsed.friends) ? parsed.friends.filter(friend => friend && /^JB-[A-Z0-9]{4}$/.test(friend.code)) : []
            };
        } catch {
            storageError = true;
            return emptyProfile();
        }
    }

    function saveProfile() {
        try {
            localStorage.setItem(profileStorageKey, JSON.stringify(profile));
            storageError = false;
            return true;
        } catch {
            storageError = true;
            return false;
        }
    }

    function storageValues(prefixes) {
        const values = [];
        try {
            for (let index = 0; index < localStorage.length; index++) {
                const key = localStorage.key(index);
                if (!key || !prefixes.some(prefix => key.startsWith(prefix))) continue;
                const value = Number(localStorage.getItem(key));
                if (Number.isFinite(value)) values.push(value);
            }
        } catch {
            storageError = true;
        }
        return values;
    }

    function readStats() {
        const gamesPlayed = new Set(profile.playedGames);
        const stats = gameStats.map(game => {
            const prefixes = game.id === "reflex"
                ? [game.prefix, "jb_reflex_best_ms"]
                : [game.prefix];
            const values = storageValues(prefixes);
            const record = values.length
                ? game.lowerIsBetter ? Math.min(...values) : Math.max(...values)
                : null;
            if (values.length) gamesPlayed.add(game.id);
            return { ...game, record };
        });

        let dailyState = {};
        try {
            dailyState = JSON.parse(localStorage.getItem("jb_daily_challenge") || "{}") || {};
        } catch {
            storageError = true;
        }
        const dailyCompletedDates = new Set(profile.dailyCompletedDates);
        if (typeof dailyState.lastCompletedDate === "string") dailyCompletedDates.add(dailyState.lastCompletedDate);

        return {
            stats,
            gamesPlayed,
            personalBestCount: stats.filter(game => game.record !== null && (!game.lowerIsBetter || game.record >= 0)).length,
            dailyStreak: Number(dailyState.streak) || 0,
            dailyCompletedCount: dailyCompletedDates.size,
            hasDailyCompletion: dailyCompletedDates.size > 0
        };
    }

    function unlocked(avatar, stats) {
        if (avatar.free) return true;
        if (avatar.id === "rocket") return stats.gamesPlayed.size >= 3;
        if (avatar.id === "owl") return stats.gamesPlayed.size === gameStats.length;
        if (avatar.id === "unicorn") return stats.personalBestCount >= 3;
        if (avatar.id === "lion") return stats.personalBestCount >= 1;
        if (avatar.id === "dragon") return stats.hasDailyCompletion;
        if (avatar.id === "butterfly") return stats.dailyStreak >= 7;
        if (avatar.id === "mushroom") return stats.gamesPlayed.size >= 5;
        if (avatar.id === "alien") return stats.dailyCompletedCount >= 3;
        return false;
    }

    function titleUnlocked(title, stats) {
        if (!title) return false;
        if (!title.requirement) return true;
        if (title.id === "explorer") return stats.gamesPlayed.size === gameStats.length;
        if (title.id === "records") return stats.personalBestCount >= 3;
        if (title.id === "daily") return stats.hasDailyCompletion;
        if (title.id === "streak") return stats.dailyStreak >= 7;
        return false;
    }

    function avatarLabel(id) {
        const avatar = avatarById.get(id);
        return avatar ? translate(avatar.name) : translate("Player");
    }

    function currentAvatarMarkup() {
        if (profile.avatar === "custom" && profile.customAvatar) {
            const image = document.createElement("img");
            image.src = profile.customAvatar;
            image.alt = "";
            return image;
        }
        const avatar = avatarById.get(profile.avatar) || avatars[0];
        const span = document.createElement("span");
        span.textContent = avatar.emoji;
        return span;
    }

    function createSwitcher(container) {
        container.classList.add("profile-switcher");
        container.innerHTML = `
            <button class="profile-trigger" type="button" aria-label="${translate("Profile")}">
                <span class="profile-trigger-avatar" data-profile-trigger-avatar></span>
                <span class="profile-trigger-label" data-profile-trigger-label></span>
            </button>`;
        container.querySelector(".profile-trigger").addEventListener("click", openProfile);
        updateTrigger();
    }

    function createDialog() {
        const dialog = document.createElement("dialog");
        dialog.className = "profile-dialog";
        dialog.id = "profile-dialog";
        dialog.setAttribute("aria-labelledby", "profile-dialog-title");
        dialog.innerHTML = `
            <div class="profile-dialog-card">
                <header class="profile-dialog-header">
                    <div class="profile-dialog-heading">
                        <p class="profile-eyebrow">JUST BECAUSE PASSPORT</p>
                        <h2 id="profile-dialog-title"></h2>
                    </div>
                    <button class="profile-close-button" type="button" aria-label="Close" data-profile-close>×</button>
                </header>
                <nav class="profile-tabs" role="tablist" aria-label="Profile sections">
                    <button type="button" role="tab" data-profile-tab="profile"></button>
                    <button type="button" role="tab" data-profile-tab="avatars"></button>
                    <button type="button" role="tab" data-profile-tab="friends"></button>
                </nav>
                <p class="profile-message" id="profile-message" role="status" aria-live="polite"></p>
                <section class="profile-panel" role="tabpanel" data-profile-panel="profile">
                    <div class="profile-edit-grid">
                        <label for="profile-name"></label>
                        <input id="profile-name" type="text" maxlength="20" autocomplete="nickname">
                        <label for="profile-title"></label>
                        <select id="profile-title"></select>
                        <button class="profile-primary-button" type="button" data-profile-save></button>
                    </div>
                    <div class="profile-stat-heading"><h3 data-profile-stat-heading></h3></div>
                    <div class="profile-summary-stats" id="profile-summary-stats"></div>
                    <div class="profile-game-stats" id="profile-game-stats"></div>
                    <p class="profile-local-note" data-profile-local-note></p>
                </section>
                <section class="profile-panel" role="tabpanel" data-profile-panel="avatars" hidden>
                    <h3 data-profile-avatar-heading></h3>
                    <div class="profile-avatar-grid" id="profile-avatar-grid"></div>
                    <label class="profile-upload-label" for="profile-avatar-upload">
                        <span data-profile-upload-label></span>
                        <input id="profile-avatar-upload" type="file" accept="image/*">
                    </label>
                    <p class="profile-upload-note" data-profile-upload-note></p>
                    <h3 data-profile-badge-heading></h3>
                    <div class="profile-badge-grid" id="profile-badge-grid"></div>
                </section>
                <section class="profile-panel" role="tabpanel" data-profile-panel="friends" hidden>
                    <div class="profile-friend-code-card">
                        <div>
                            <span data-profile-code-label></span>
                            <strong id="profile-friend-code"></strong>
                        </div>
                        <button class="profile-secondary-button" type="button" data-copy-code></button>
                    </div>
                    <label class="profile-invite-label" for="profile-invite-link"></label>
                    <div class="profile-copy-row">
                        <input id="profile-invite-link" type="text" readonly>
                        <button class="profile-secondary-button" type="button" data-copy-invite></button>
                    </div>
                    <button class="profile-secondary-button profile-share-button" type="button" data-copy-passport></button>
                    <p class="profile-local-note" data-profile-friends-note></p>
                    <form class="profile-add-form" id="profile-add-form">
                        <label for="profile-friend-input" data-profile-add-label></label>
                        <div class="profile-copy-row">
                            <input id="profile-friend-input" type="text" autocomplete="off">
                            <button class="profile-primary-button" type="submit" data-profile-add-button></button>
                        </div>
                    </form>
                    <h3 data-profile-friends-heading></h3>
                    <div class="profile-friends-list" id="profile-friends-list"></div>
                    <button class="profile-battle-button" type="button" disabled></button>
                </section>
            </div>`;
        document.body.append(dialog);
        dialog.querySelector("[data-profile-close]").addEventListener("click", () => dialog.close());
        dialog.addEventListener("click", event => {
            if (event.target === dialog) dialog.close();
        });
        dialog.querySelectorAll("[data-profile-tab]").forEach(button => {
            button.addEventListener("click", () => activateTab(button.dataset.profileTab));
        });
        dialog.querySelector("[data-profile-save]").addEventListener("click", saveIdentity);
        dialog.querySelector("#profile-add-form").addEventListener("submit", addFriend);
        dialog.querySelector("[data-copy-code]").addEventListener("click", () => copyValue(profile.friendCode, "Friend code copied."));
        dialog.querySelector("[data-copy-invite]").addEventListener("click", () => copyValue(inviteLink(), "Invite link copied."));
        dialog.querySelector("[data-copy-passport]").addEventListener("click", () => copyValue(shareMessage(), "Passport message copied."));
        dialog.querySelector("#profile-avatar-upload").addEventListener("change", uploadAvatar);
        dialog.querySelector("#profile-friends-list").addEventListener("click", event => {
            const removeButton = event.target.closest("[data-remove-friend]");
            if (!removeButton) return;
            profile.friends = profile.friends.filter(friend => friend.code !== removeButton.dataset.removeFriend);
            saveProfile();
            renderModal();
        });
        return dialog;
    }

    function updateTrigger() {
        document.querySelectorAll("[data-profile-switcher]").forEach(container => {
            const avatar = container.querySelector("[data-profile-trigger-avatar]");
            const label = container.querySelector("[data-profile-trigger-label]");
            if (!avatar || !label) return;
            avatar.replaceChildren(currentAvatarMarkup());
            label.textContent = profile.name === "Player" ? translate("Player") : profile.name;
            container.querySelector(".profile-trigger")?.setAttribute("aria-label", translate("Profile"));
        });
    }

    function activateTab(tabName) {
        activeTab = tabName;
        const dialog = document.querySelector("#profile-dialog");
        if (!dialog) return;
        dialog.querySelectorAll("[data-profile-tab]").forEach(button => {
            const selected = button.dataset.profileTab === activeTab;
            button.setAttribute("aria-selected", String(selected));
            button.tabIndex = selected ? 0 : -1;
        });
        dialog.querySelectorAll("[data-profile-panel]").forEach(panel => {
            panel.hidden = panel.dataset.profilePanel !== activeTab;
        });
    }

    function setMessage(key, fallback, values) {
        const message = document.querySelector("#profile-message");
        if (message) message.textContent = translate(key, fallback, values);
    }

    function renderTitleOptions(stats) {
        const select = document.querySelector("#profile-title");
        if (!select) return;
        select.replaceChildren();
        for (const title of titles) {
            const option = document.createElement("option");
            option.value = title.id;
            option.textContent = translate(title.label);
            option.disabled = !titleUnlocked(title, stats);
            select.append(option);
        }
        select.value = titleUnlocked(titles.find(item => item.id === profile.title), stats) ? profile.title : "curious";
    }

    function renderStats(stats) {
        const summary = document.querySelector("#profile-summary-stats");
        const gameList = document.querySelector("#profile-game-stats");
        if (!summary || !gameList) return;
        summary.replaceChildren();
        const summaryItems = [
            { label: "Games played", value: `${stats.gamesPlayed.size} / ${gameStats.length}` },
            { label: "Personal Bests", value: `${stats.personalBestCount} / ${gameStats.length}` },
            { label: "Daily streak", value: `🔥 ${stats.dailyStreak}` }
        ];
        for (const item of summaryItems) {
            const card = document.createElement("div");
            card.className = "profile-summary-card";
            const label = document.createElement("span");
            label.textContent = translate(item.label);
            const value = document.createElement("strong");
            value.textContent = item.value;
            card.append(label, value);
            summary.append(card);
        }

        gameList.replaceChildren();
        for (const game of stats.stats) {
            const row = document.createElement("div");
            row.className = "profile-game-stat";
            const name = document.createElement("span");
            name.textContent = translate(game.label);
            const record = document.createElement("strong");
            record.textContent = game.record === null
                ? translate("No record yet")
                : `${new Intl.NumberFormat(window.JB_I18N?.language || "en", { maximumFractionDigits: 0 }).format(game.record)}${game.lowerIsBetter ? " ms" : ""}`;
            row.append(name, record);
            gameList.append(row);
        }
    }

    function renderAvatars(stats) {
        const grid = document.querySelector("#profile-avatar-grid");
        if (!grid) return;
        grid.replaceChildren();

        function addAvatarButton(avatar, isUnlocked, name, emoji, lockReason = "") {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "profile-avatar-option";
            button.classList.toggle("is-selected", profile.avatar === avatar.id);
            button.disabled = !isUnlocked;
            button.setAttribute("aria-pressed", String(profile.avatar === avatar.id));
            const icon = document.createElement("span");
            icon.className = "profile-avatar-icon";
            icon.textContent = emoji;
            const label = document.createElement("strong");
            label.textContent = name;
            const detail = document.createElement("small");
            detail.textContent = avatar.free
                ? translate("Free avatar")
                : isUnlocked
                    ? translate("Unlocked")
                    : translate("Locked · {requirement}", "Locked · {requirement}", { requirement: translate(lockReason) });
            button.append(icon, label, detail);
            button.addEventListener("click", () => {
                profile.avatar = avatar.id;
                saveProfile();
                updateTrigger();
                renderModal();
            });
            grid.append(button);
        }

        for (const avatar of avatars) {
            const isUnlocked = unlocked(avatar, stats);
            addAvatarButton(avatar, isUnlocked, translate(avatar.name), avatar.emoji, avatar.requirement);
        }

        if (profile.customAvatar) {
            addAvatarButton({ id: "custom", free: true }, true, translate("Your image"), "🖼️");
            const customButton = grid.lastElementChild;
            const icon = customButton.querySelector(".profile-avatar-icon");
            const image = document.createElement("img");
            image.src = profile.customAvatar;
            image.alt = "";
            icon.replaceChildren(image);
        }
    }

    function badgeEntries(stats) {
        const gameBadges = stats.stats.map(game => ({
            icon: game.id === "guess-color" ? "🎨"
                : game.id === "higher-lower" ? "🔢"
                    : game.id === "pixel-guess" ? "🧩"
                        : game.id === "odd-one-out" ? "🔍"
                            : game.id === "two-truths" ? "🗞️"
                                : game.id === "whats-next" ? "✨"
                                    : game.id === "where-am-i" ? "🌍"
                                        : game.id === "flag-quiz" ? "🚩"
                                            : game.id === "reflex" ? "⚡"
                                                : game.id === "sequence" ? "🧠" : "↕️",
            name: "{game} Badge",
            description: "Set a personal best in {game}.",
            values: { game: translate(game.label) },
            unlocked: game.record !== null
        }));
        return [
            ...gameBadges,
            { icon: "👣", name: "First Steps", description: "Play your first game.", unlocked: stats.gamesPlayed.size >= 1 },
            { icon: "🎮", name: "Full House", description: "Play all 11 games.", unlocked: stats.gamesPlayed.size === gameStats.length },
            { icon: "🏆", name: "Record Collector", description: "Set personal bests in 3 different games.", unlocked: stats.personalBestCount >= 3 },
            { icon: "🌞", name: "Daily Challenger", description: "Complete a Daily Challenge.", unlocked: stats.hasDailyCompletion },
            { icon: "🔥", name: "Weeklong Streak", description: "Keep a Daily Streak of 7 or more.", unlocked: stats.dailyStreak >= 7 }
        ];
    }

    function renderBadges(stats) {
        const grid = document.querySelector("#profile-badge-grid");
        if (!grid) return;
        grid.replaceChildren();
        for (const badge of badgeEntries(stats)) {
            const card = document.createElement("article");
            card.className = "profile-badge";
            card.classList.toggle("is-locked", !badge.unlocked);
            const icon = document.createElement("span");
            icon.className = "profile-badge-icon";
            icon.textContent = badge.icon;
            const name = document.createElement("strong");
            name.textContent = translate(badge.name, badge.name, badge.values);
            const description = document.createElement("small");
            description.textContent = translate(badge.description, badge.description, badge.values);
            const state = document.createElement("span");
            state.className = "profile-badge-state";
            state.textContent = translate(badge.unlocked ? "Unlocked" : "Locked");
            card.append(icon, name, description, state);
            grid.append(card);
        }
    }

    function renderFriends() {
        const list = document.querySelector("#profile-friends-list");
        if (!list) return;
        list.replaceChildren();
        if (!profile.friends.length) {
            const empty = document.createElement("p");
            empty.className = "profile-empty-state";
            empty.textContent = translate("No friends added yet.");
            list.append(empty);
            return;
        }
        for (const friend of profile.friends) {
            const card = document.createElement("article");
            card.className = "profile-friend-card";
            const avatar = document.createElement("span");
            avatar.className = "profile-friend-avatar";
            avatar.textContent = friend.avatar || "👤";
            const details = document.createElement("div");
            const name = document.createElement("strong");
            name.textContent = friend.name || translate("Player {code}", "Player {code}", { code: friend.code });
            const code = document.createElement("small");
            code.textContent = friend.code;
            details.append(name, code);
            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "profile-remove-friend";
            remove.dataset.removeFriend = friend.code;
            remove.textContent = translate("Remove friend");
            card.append(avatar, details, remove);
            list.append(card);
        }
    }

    function renderModal() {
        const dialog = document.querySelector("#profile-dialog");
        if (!dialog) return;
        const stats = readStats();
        dialog.querySelector("#profile-dialog-title").textContent = translate("Just Because Passport");
        dialog.querySelector(".profile-eyebrow").textContent = translate("Just Because Passport").toLocaleUpperCase();
        dialog.querySelector(".profile-tabs").setAttribute("aria-label", translate("Profile sections"));
        dialog.querySelector("[data-profile-close]").setAttribute("aria-label", translate("Close"));
        dialog.querySelectorAll("[data-profile-tab]").forEach(button => {
            const key = button.dataset.profileTab;
            button.textContent = translate(key === "profile" ? "Profile" : key === "avatars" ? "Avatars & Badges" : "Friends");
        });
        dialog.querySelector('label[for="profile-name"]').textContent = translate("Player name");
        dialog.querySelector('label[for="profile-title"]').textContent = translate("Choose a title");
        dialog.querySelector("#profile-name").value = profile.name === "Player" ? translate("Player") : profile.name;
        renderTitleOptions(stats);
        dialog.querySelector("[data-profile-save]").textContent = translate("Save Profile");
        dialog.querySelector("[data-profile-stat-heading]").textContent = translate("Statistics");
        dialog.querySelector("[data-profile-local-note]").textContent = translate("Your profile and friends stay on this device.");
        dialog.querySelector("[data-profile-avatar-heading]").textContent = translate("Choose an avatar");
        dialog.querySelector("[data-profile-upload-label]").textContent = translate("Upload your own image");
        dialog.querySelector("[data-profile-upload-note]").textContent = translate("Image ready · resized to 128 × 128 px.");
        dialog.querySelector("[data-profile-badge-heading]").textContent = translate("Badge Collection");
        dialog.querySelector("[data-profile-code-label]").textContent = translate("Friend code");
        dialog.querySelector("#profile-friend-code").textContent = profile.friendCode;
        dialog.querySelector("[data-copy-code]").textContent = translate("Copy code");
        dialog.querySelector('label[for="profile-invite-link"]').textContent = translate("Invite link");
        dialog.querySelector("#profile-invite-link").value = inviteLink();
        dialog.querySelector("[data-copy-invite]").textContent = translate("Copy invite link");
        dialog.querySelector("[data-copy-passport]").textContent = translate("Share my Passport");
        dialog.querySelector("[data-profile-friends-note]").textContent = translate("Your profile and friends stay on this device.");
        dialog.querySelector("[data-profile-add-label]").textContent = translate("Add a friend");
        dialog.querySelector("#profile-friend-input").placeholder = translate("Enter a code or invite link");
        dialog.querySelector("[data-profile-add-button]").textContent = translate("Add friend");
        dialog.querySelector("[data-profile-friends-heading]").textContent = translate("Your friends");
        dialog.querySelector(".profile-battle-button").textContent = translate("1v1 Battle (Multiplayer Soon)");
        renderStats(stats);
        renderAvatars(stats);
        renderBadges(stats);
        renderFriends();
        activateTab(activeTab);
        if (storageError) setMessage("Your profile could not be saved in this browser.");
    }

    function openProfile() {
        const dialog = document.querySelector("#profile-dialog");
        if (!dialog) return;
        renderModal();
        if (!dialog.open) dialog.showModal();
    }

    function generateFriendCode() {
        const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        const random = new Uint8Array(4);
        if (window.crypto?.getRandomValues) {
            window.crypto.getRandomValues(random);
        } else {
            random.forEach((_, index) => { random[index] = Math.floor(Math.random() * 256); });
        }
        return `JB-${Array.from(random, value => alphabet[value % alphabet.length]).join("")}`;
    }

    function inviteLink() {
        const origin = location.protocol === "file:" ? "https://netlify.app" : window.location.origin;
        const invite = new URL("/", origin);
        invite.searchParams.set("addfriend", profile.friendCode);
        invite.searchParams.set("friendname", profile.name);
        invite.searchParams.set("friendavatar", avatarById.has(profile.avatar) ? profile.avatar : avatars[0].id);
        return invite.href;
    }

    function shareMessage() {
        return translate(
            "Hey! Add me on Just Because Games! I'm {name} (friend code {code}). Join me: {link}",
            "Hey! Add me on Just Because Games! I'm {name} (friend code {code}). Join me: {link}",
            {
                name: profile.name,
                code: profile.friendCode,
                link: inviteLink()
            }
        );
    }

    function fallbackCopy(value) {
        const temporary = document.createElement("textarea");
        temporary.value = value;
        temporary.style.position = "fixed";
        temporary.style.left = "-9999px";
        temporary.style.opacity = "0";
        const dialogContent = document.querySelector("#profile-dialog[open] .profile-dialog-card");
        (dialogContent || document.body).append(temporary);
        try {
            temporary.focus();
            temporary.select();
            return document.execCommand("copy");
        } finally {
            temporary.remove();
        }
    }

    async function copyValue(value, successKey) {
        try {
            if (navigator.clipboard?.writeText) {
                try {
                    await navigator.clipboard.writeText(value);
                } catch {
                    if (!fallbackCopy(value)) throw new Error("Clipboard copy was rejected.");
                }
            } else if (!fallbackCopy(value)) {
                throw new Error("Clipboard copy was rejected.");
            }
            setMessage(successKey);
        } catch {
            setMessage("Copy failed. Select and copy the link manually.");
        }
    }

    function parseFriendInvite(value) {
        const raw = value.trim();
        try {
            const invite = new URL(raw, location.href);
            const code = invite.searchParams.get("addfriend");
            if (code) {
                return {
                    code: code.toUpperCase(),
                    name: invite.searchParams.get("friendname") || "",
                    avatar: invite.searchParams.get("friendavatar") || ""
                };
            }
        } catch {
            // A plain friend code is not a URL.
        }
        return { code: raw.toUpperCase(), name: "", avatar: "" };
    }

    function addFriend(event) {
        event.preventDefault();
        const input = document.querySelector("#profile-friend-input");
        const added = addFriendDetails(parseFriendInvite(input.value));
        if (added) input.value = "";
    }

    function addFriendDetails(invite) {
        const code = invite.code.trim().toUpperCase();
        if (!/^JB-[A-Z0-9]{4}$/.test(code)) {
            setMessage("Enter a valid friend code or invite link.");
            return false;
        }
        if (code === profile.friendCode) {
            setMessage("You cannot add your own code.");
            return false;
        }
        if (profile.friends.some(friend => friend.code === code)) {
            setMessage("That player is already on your list.");
            return false;
        }
        const name = typeof invite.name === "string" ? invite.name.trim().slice(0, 20) : "";
        const avatar = avatarById.get(invite.avatar)?.emoji || "👤";
        profile.friends.push({ code, name, avatar });
        if (!saveProfile()) {
            profile.friends.pop();
            setMessage("Your profile could not be saved in this browser.");
            return false;
        }
        if (name) {
            setMessage("Added {name} to your friends!", "Added {name} to your friends!", { name });
        } else {
            setMessage("Friend added.");
        }
        renderModal();
        return true;
    }

    function saveIdentity() {
        const name = document.querySelector("#profile-name").value.trim();
        if (name.length < 1 || name.length > 20) {
            setMessage("The player name must be between 1 and 20 characters.");
            return;
        }
        const stats = readStats();
        const chosenTitle = document.querySelector("#profile-title").value;
        profile.name = name;
        profile.title = titleUnlocked(titles.find(title => title.id === chosenTitle), stats) ? chosenTitle : "curious";
        if (!saveProfile()) {
            setMessage("Your profile could not be saved in this browser.");
            return;
        }
        updateTrigger();
        setMessage("Profile saved.");
        renderModal();
    }

    function uploadAvatar(event) {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/") || file.size > 10 * 1024 * 1024) {
            setMessage("Image must be 10 MB or smaller.");
            event.target.value = "";
            return;
        }
        const objectUrl = URL.createObjectURL(file);
        const image = new Image();
        image.onload = () => {
            URL.revokeObjectURL(objectUrl);
            try {
                const size = 128;
                const canvas = document.createElement("canvas");
                canvas.width = size;
                canvas.height = size;
                const context = canvas.getContext("2d");
                const cropSize = Math.min(image.naturalWidth, image.naturalHeight);
                const cropX = (image.naturalWidth - cropSize) / 2;
                const cropY = (image.naturalHeight - cropSize) / 2;
                context.drawImage(image, cropX, cropY, cropSize, cropSize, 0, 0, size, size);
                profile.customAvatar = canvas.toDataURL("image/webp", 0.8);
                profile.avatar = "custom";
                if (!saveProfile()) {
                    setMessage("Your profile could not be saved in this browser.");
                    return;
                }
                updateTrigger();
                setMessage("Image ready · resized to 128 × 128 px.");
                renderModal();
            } catch {
                setMessage("Unable to process this image.");
            }
        };
        image.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            setMessage("Unable to process this image.");
        };
        image.src = objectUrl;
    }

    function recordGame(gameId) {
        if (!validGameIds.has(gameId) || profile.playedGames.includes(gameId)) return;
        profile.playedGames.push(gameId);
        saveProfile();
        updateTrigger();
        if (document.querySelector("#profile-dialog")?.open) renderModal();
    }

    function recordDailyChallenge(date = new Date().toISOString().slice(0, 10)) {
        if (!profile.dailyCompletedDates.includes(date)) {
            profile.dailyCompletedDates.push(date);
            saveProfile();
        }
        if (document.querySelector("#profile-dialog")?.open) renderModal();
    }

    window.JustBecauseProfile = {
        recordGame,
        recordDailyChallenge,
        refresh() {
            profile = readProfile();
            updateTrigger();
            renderModal();
        }
    };

    function initialize() {
        if (!profile.friendCode) {
            profile.friendCode = generateFriendCode();
            saveProfile();
        }
        document.querySelectorAll("[data-profile-switcher]").forEach(createSwitcher);
        createDialog();
        renderModal();
        window.addEventListener("jb:languagechange", () => {
            updateTrigger();
            renderModal();
        });
        window.addEventListener("storage", event => {
            if (event.key !== profileStorageKey) return;
            profile = readProfile();
            updateTrigger();
            renderModal();
        });

        const params = new URLSearchParams(location.search);
        const inviteCode = params.get("addfriend");
        if (!inviteCode) return;
        activeTab = "friends";
        openProfile();
        addFriendDetails({
            code: inviteCode,
            name: params.get("friendname") || "",
            avatar: params.get("friendavatar") || ""
        });
        const cleanedUrl = new URL(location.href);
        ["addfriend", "friendname", "friendavatar"].forEach(key => cleanedUrl.searchParams.delete(key));
        history.replaceState(null, "", cleanedUrl.href);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
})();
