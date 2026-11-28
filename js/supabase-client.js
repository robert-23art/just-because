(() => {
    "use strict";
    const SUPABASE_URL = "https://egdiqbexltqjjimbxwhw.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_89tNM0o6FxCpICr-Ufa9Uw_eLfA-2h7";
    let client = null;
    let ready = false;
    let unavailableReason = "";

    if (window.supabase?.createClient) {
        try {
            client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            ready = true;
        } catch (error) {
            unavailableReason = String(error?.message || error);
        }
    }

    function offlineValue(key, fallback = null) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? fallback : JSON.parse(value);
        } catch {
            return fallback;
        }
    }

    function offlineSet(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // local-only fallback remains in memory only when storage is unavailable.
        }
    }

    async function syncProfile(profile) {
        if (!profile?.friendCode) return false;
        const row = {
            friend_code: profile.friendCode,
            name: profile.name,
            avatar: profile.avatar,
            title: profile.title,
            role: profile.role === "owner" ? "owner" : profile.role === "admin" ? "admin" : "player"
        };
        offlineSet("jb_supabase_profile", row);
        if (!ready) return false;
        const { error } = await client.from("players").upsert(row, { onConflict: "friend_code" });
        if (error) console.error("Profile sync failed.", error);
        return !error;
    }

    async function findPlayer(code) {
        if (!ready) return offlineValue("jb_supabase_profile")?.friend_code === code
            ? offlineValue("jb_supabase_profile")
            : null;
        const { data, error } = await client.from("players").select("friend_code,name,avatar,title,role").eq("friend_code", code).maybeSingle();
        if (error) {
            console.error("Friend lookup failed.", error);
            return null;
        }
        return data;
    }

    async function createFriendship(ownerCode, friendCode) {
        if (!ready) return false;
        const rows = [
            { player_code: ownerCode, friend_code: friendCode },
            { player_code: friendCode, friend_code: ownerCode }
        ];
        const { error } = await client.from("friendships").upsert(rows, { onConflict: "player_code,friend_code" });
        if (error) console.error("Friendship sync failed.", error);
        return !error;
    }

    async function updateFriendRole(friendCode, role) {
        if (!ready) return false;
        const { error } = await client.from("players").update({ role }).eq("friend_code", friendCode);
        if (error) console.error("Admin role update failed.", error);
        return !error;
    }

    async function upsertScore(gameId, mode, playerCode, score) {
        const scoreRow = { game_id: gameId, mode: mode || "all", player_code: playerCode, score: Number(score) };
        const existing = offlineValue("jb_supabase_scores", []);
        const filtered = existing.filter(row => !(row.game_id === gameId && row.mode === (mode || "all") && row.player_code === playerCode));
        offlineSet("jb_supabase_scores", [...filtered, scoreRow]);
        if (!ready) return false;
        const { error } = await client.from("scores").upsert(scoreRow, { onConflict: "game_id,mode,player_code" });
        if (error) console.error("Score sync failed.", error);
        return !error;
    }

    async function loadScores(gameId, playerCode) {
        if (!ready) {
            const rows = offlineValue("jb_supabase_scores", [])
                .filter(row => row.game_id === gameId);
            return { global: rows, friends: rows.filter(row => row.player_code === playerCode) };
        }
        const [globalResult, friendsResult] = await Promise.all([
            client.from("scores").select("player_code,mode,score").eq("game_id", gameId).order("score", { ascending: gameId === "reflex" }).limit(10),
            playerCode
                ? client.from("scores").select("player_code,mode,score").eq("game_id", gameId).limit(50)
                : Promise.resolve({ data: [], error: null })
        ]);
        if (globalResult.error) console.error("Global scores failed.", globalResult.error);
        if (friendsResult.error) console.error("Friend scores failed.", friendsResult.error);
        return { global: globalResult.data || [], friends: friendsResult.data || [] };
    }

    async function getFriendships(playerCode) {
        if (!ready) return offlineValue("jb_supabase_friendships", []);
        const { data, error } = await client.from("friendships").select("friend_code").eq("player_code", playerCode);
        if (error) {
            console.error("Friendship load failed.", error);
            return [];
        }
        return data || [];
    }

    async function reportScore(gameId, mode, score) {
        let playerCode = "local";
        try {
            const profile = JSON.parse(localStorage.getItem("jb_profile") || "{}");
            if (profile.friendCode) playerCode = profile.friendCode;
        } catch {
            // local fallback is sufficient for offline play.
        }
        return upsertScore(gameId, mode, playerCode, score);
    }

    window.JustBecauseSupabase = {
        ready: () => ready,
        unavailableReason: () => unavailableReason,
        syncProfile,
        findPlayer,
        createFriendship,
        updateFriendRole,
        upsertScore,
        loadScores,
        getFriendships,
        reportScore,
        client: () => client
    };
})();
