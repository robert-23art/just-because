(() => {
    "use strict";

    const gameConfigs = {
        "guess-color": { prefixes: ["jb-color-score-"] },
        "higher-lower": { prefixes: ["jb-hl-score-"] },
        "pixel-guess": { prefixes: ["jb-pixel-guess-highscore-"] },
        "odd-one-out": { prefixes: ["jb-ooo-score-"] },
        "two-truths": { prefixes: ["jb-ttl-best-"] },
        "whats-next": { prefixes: ["jb-wn-score-"] },
        "where-am-i": { prefixes: ["jb-wai-best-"] },
        "flag-quiz": { prefixes: ["jb_flag_quiz_highscore_"] },
        reflex: { prefixes: ["jb_reflex_best_ms_", "jb_reflex_best_ms"], lowerIsBetter: true },
        sequence: { prefixes: ["jb_sequence_best_"] },
        "sort-it": { prefixes: ["jb_sort_it_best_"] }
    };
    const avatarEmojis = {
        cat: "🐱",
        fox: "🦊",
        frog: "🐸",
        panda: "🐼",
        penguin: "🐧",
        octopus: "🐙",
        rocket: "🚀",
        owl: "🦉",
        unicorn: "🦄",
        lion: "🦁",
        dragon: "🐉",
        butterfly: "🦋",
        mushroom: "🍄",
        alien: "👾"
    };
    const gameId = location.pathname.split("/").pop().replace(/\.html$/i, "");
    const config = gameConfigs[gameId];
    const main = document.querySelector("main");

    if (!config || !main) return;

    const section = document.createElement("section");
    section.className = "leaderboard-section";
    section.setAttribute("aria-labelledby", "leaderboard-title");

    const heading = document.createElement("div");
    heading.className = "leaderboard-heading";
    const headingCopy = document.createElement("div");
    const title = document.createElement("h2");
    title.id = "leaderboard-title";
    title.textContent = translate("Leaderboards", "Leaderboards");
    headingCopy.append(title);
    heading.append(headingCopy);

    const tabList = document.createElement("div");
    tabList.className = "leaderboard-tabs";
    tabList.setAttribute("role", "tablist");
    tabList.setAttribute("aria-label", translate("Leaderboards", "Leaderboards"));
    const friendsTab = createTab("friends", "Friends Top 10");
    const globalTab = createTab("global", "Global Top 10");
    tabList.append(friendsTab, globalTab);

    const friendsPanel = createPanel("friends");
    const friendsTitle = document.createElement("h3");
    friendsTitle.textContent = translate("Friends Top 10", "Friends Top 10");
    const friendsTable = createTable("friends");
    const friendsNote = document.createElement("p");
    friendsNote.className = "leaderboard-note";
    friendsNote.textContent = translate(
        "Friend records appear here when they are shared with this browser.",
        "Friend records appear here when they are shared with this browser."
    );
    friendsPanel.append(friendsTitle, friendsTable.wrapper, friendsNote);

    const globalPanel = createPanel("global");
    globalPanel.hidden = true;
    const globalTitle = document.createElement("h3");
    globalTitle.textContent = translate("Global Top 10", "Global Top 10");
    const globalBadge = document.createElement("span");
    globalBadge.className = "leaderboard-sync-badge";
    globalBadge.textContent = translate("Live Global Sync Soon", "Live Global Sync Soon");
    const globalNote = document.createElement("p");
    globalNote.className = "leaderboard-note";
    globalNote.textContent = translate(
        "Global scores will appear when sync is connected.",
        "Global scores will appear when sync is connected."
    );
    const globalTable = createTable("global");
    const globalHeading = document.createElement("div");
    globalHeading.className = "leaderboard-global-heading";
    globalHeading.append(globalTitle, globalBadge);
    globalPanel.append(globalHeading, globalNote, globalTable.wrapper);

    section.append(heading, tabList, friendsPanel, globalPanel);
    main.append(section);

    function translate(key, fallback, values) {
        return window.JB_I18N?.t
            ? window.JB_I18N.t(key, fallback, values)
            : fallback;
    }

    function createTab(id, label) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "leaderboard-tab";
        button.id = `leaderboard-tab-${id}`;
        button.dataset.leaderboardTab = id;
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", `leaderboard-panel-${id}`);
        button.setAttribute("aria-selected", String(id === "friends"));
        button.textContent = translate(label, label);
        button.addEventListener("click", () => selectTab(id));
        return button;
    }

    function createPanel(id) {
        const panel = document.createElement("section");
        panel.className = "leaderboard-panel";
        panel.id = `leaderboard-panel-${id}`;
        panel.dataset.leaderboardPanel = id;
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", `leaderboard-tab-${id}`);
        return panel;
    }

    function createTable(id) {
        const wrapper = document.createElement("div");
        wrapper.className = "leaderboard-table-wrap";
        const table = document.createElement("table");
        table.className = "leaderboard-table";
        table.setAttribute("aria-label", translate(id === "friends" ? "Friends Top 10" : "Global Top 10"));
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        for (const label of ["Rank", "Player", "Score"]) {
            const cell = document.createElement("th");
            cell.scope = "col";
            cell.dataset.leaderboardLabel = label;
            cell.textContent = translate(label, label);
            headerRow.append(cell);
        }
        thead.append(headerRow);
        const tbody = document.createElement("tbody");
        tbody.dataset.leaderboardRows = id;
        table.append(thead, tbody);
        wrapper.append(table);
        return { wrapper, tbody, table };
    }

    function selectTab(id) {
        for (const button of tabList.querySelectorAll("[data-leaderboard-tab]")) {
            const selected = button.dataset.leaderboardTab === id;
            button.setAttribute("aria-selected", String(selected));
            button.tabIndex = selected ? 0 : -1;
        }
        friendsPanel.hidden = id !== "friends";
        globalPanel.hidden = id !== "global";
    }

    function readProfile() {
        try {
            const parsed = JSON.parse(localStorage.getItem("jb_profile") || "null");
            return parsed && typeof parsed === "object" ? parsed : {};
        } catch (error) {
            console.error("Could not read the Just Because profile for the leaderboard.", error);
            return {};
        }
    }

    function readBest() {
        let scores = [];
        try {
            for (let index = 0; index < localStorage.length; index++) {
                const key = localStorage.key(index);
                if (!key || !config.prefixes.some(prefix => key.startsWith(prefix))) continue;
                const value = Number(localStorage.getItem(key));
                if (Number.isFinite(value)) scores.push(value);
            }
        } catch (error) {
            console.error("Could not read game records for the leaderboard.", error);
        }
        if (!scores.length) return null;
        return config.lowerIsBetter ? Math.min(...scores) : Math.max(...scores);
    }

    function readFriendRecord(friend) {
        const candidate = friend?.records?.[gameId] ?? friend?.scores?.[gameId];
        const rawValue = candidate && typeof candidate === "object"
            ? candidate.value ?? candidate.score
            : candidate;
        const score = Number(rawValue);
        return rawValue !== null && rawValue !== undefined && Number.isFinite(score) ? score : null;
    }

    function getPlayers(profile) {
        const players = [{
            name: typeof profile.name === "string" && profile.name.trim()
                ? profile.name.trim()
                : translate("Player", "Player"),
            avatar: profile.avatar || "cat",
            customAvatar: typeof profile.customAvatar === "string" && profile.customAvatar.startsWith("data:image/")
                ? profile.customAvatar
                : "",
            score: readBest(),
            isSelf: true
        }];
        const seenCodes = new Set();
        for (const friend of Array.isArray(profile.friends) ? profile.friends : []) {
            if (!friend || typeof friend.code !== "string" || seenCodes.has(friend.code)) continue;
            seenCodes.add(friend.code);
            players.push({
                name: typeof friend.name === "string" && friend.name.trim()
                    ? friend.name.trim()
                    : translate("Player {code}", "Player {code}", { code: friend.code }),
                avatar: typeof friend.avatar === "string" ? friend.avatar : "👤",
                customAvatar: "",
                score: readFriendRecord(friend),
                isSelf: false
            });
        }
        players.sort((left, right) => {
            if (left.score === null && right.score !== null) return 1;
            if (left.score !== null && right.score === null) return -1;
            if (left.score !== null && right.score !== null && left.score !== right.score) {
                return config.lowerIsBetter ? left.score - right.score : right.score - left.score;
            }
            if (left.isSelf !== right.isSelf) return left.isSelf ? -1 : 1;
            return left.name.localeCompare(right.name, window.JB_I18N?.language || "en");
        });
        return players.slice(0, 10);
    }

    function createAvatar(player) {
        const avatar = document.createElement("span");
        avatar.className = "leaderboard-avatar";
        if (player.customAvatar) {
            const image = document.createElement("img");
            image.src = player.customAvatar;
            image.alt = "";
            avatar.append(image);
        } else {
            avatar.textContent = avatarEmojis[player.avatar] || player.avatar || "👤";
        }
        return avatar;
    }

    function formatScore(score) {
        if (score === null) return "—";
        const formatted = new Intl.NumberFormat(window.JB_I18N?.language || "en").format(score);
        return config.lowerIsBetter ? `${formatted} ms` : formatted;
    }

    function fillRows(tbody, rows) {
        tbody.replaceChildren();
        rows.forEach((player, index) => {
            const row = document.createElement("tr");
            if (player.isSelf) row.className = "leaderboard-self";
            const rank = document.createElement("td");
            rank.textContent = `#${index + 1}`;
            const nameCell = document.createElement("td");
            const playerLabel = document.createElement("span");
            playerLabel.className = "leaderboard-player";
            playerLabel.append(createAvatar(player));
            const playerName = document.createElement("span");
            playerName.textContent = player.name;
            playerLabel.append(playerName);
            nameCell.append(playerLabel);
            const score = document.createElement("td");
            score.className = "leaderboard-score";
            score.textContent = formatScore(player.score);
            row.append(rank, nameCell, score);
            tbody.append(row);
        });
    }

    function render() {
        title.textContent = translate("Leaderboards", "Leaderboards");
        tabList.setAttribute("aria-label", translate("Leaderboards", "Leaderboards"));
        friendsTab.textContent = translate("Friends Top 10", "Friends Top 10");
        globalTab.textContent = translate("Global Top 10", "Global Top 10");
        friendsTitle.textContent = translate("Friends Top 10", "Friends Top 10");
        globalTitle.textContent = translate("Global Top 10", "Global Top 10");
        globalBadge.textContent = translate("Live Global Sync Soon", "Live Global Sync Soon");
        friendsNote.textContent = translate(
            "Friend records appear here when they are shared with this browser.",
            "Friend records appear here when they are shared with this browser."
        );
        globalNote.textContent = translate(
            "Global scores will appear when sync is connected.",
            "Global scores will appear when sync is connected."
        );
        for (const table of [friendsTable, globalTable]) {
            for (const cell of table.wrapper.querySelectorAll("[data-leaderboard-label]")) {
                const label = cell.dataset.leaderboardLabel;
                cell.textContent = translate(label, label);
            }
            table.table.setAttribute(
                "aria-label",
                translate(table === friendsTable ? "Friends Top 10" : "Global Top 10")
            );
        }
        const players = getPlayers(readProfile());
        fillRows(friendsTable.tbody, players);
        fillRows(globalTable.tbody, Array.from({ length: 10 }, () => ({
            name: "—",
            avatar: "",
            score: null,
            isSelf: false
        })));
    }

    window.addEventListener("jb:languagechange", render);
    window.addEventListener("jb:profile-updated", render);
    window.addEventListener("storage", event => {
        if (!event.key || event.key === "jb_profile" || config.prefixes.some(prefix => event.key.startsWith(prefix))) {
            render();
        }
    });

    window.JustBecauseLeaderboard = {
        refresh: render
    };

    selectTab("friends");
    render();
})();
