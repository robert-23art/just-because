(() => {
    "use strict";

    const payload = window.WHERE_AM_I_DATA;
    const countries = payload?.countries || [];
    const regions = [
        ["all", "All Countries", "A little of the whole world"],
        ["Europe", "Europe", "From the Atlantic to the Urals"],
        ["Asia", "Asia", "Across the world's largest region"],
        ["Africa", "Africa", "54 countries, one continent"],
        ["North America", "North America", "Including Central America & the Caribbean"],
        ["South America", "South America", "From the Andes to the Atlantic"],
        ["Oceania", "Oceania", "Islands and the world's smallest continent"]
    ];
    const difficulties = [["all", "All difficulties"], ["easy", "Easy"], ["medium", "Medium"], ["hard", "Hard"]];
    const difficultyLabel = { all: "All difficulties", easy: "Easy", medium: "Medium", hard: "Hard" };
    const difficultyCaption = { all: "A little of everything", easy: "Recognizable country shapes", medium: "Look a little closer", hard: "Smaller or less familiar outlines" };
    const $ = id => document.getElementById(`wai-${id}`);
    const el = {
        setup:$("setup"), regions:$("region-grid"), difficulties:$("difficulty-options"), difficultyCaption:$("difficulty-caption"), poolNote:$("pool-note"), setupMessage:$("setup-message"), start:$("start"), best:$("best"), bestLabel:$("best-label"),
        game:$("game"), roundRegion:$("round-region"), roundDifficulty:$("round-difficulty"), round:$("round"), score:$("score"), streak:$("streak"), shape:$("country-shape"), attempts:$("attempts"), hintsUsed:$("hints-used"), hint:$("hint"), hintCount:$("hint-count"), hintList:$("hint-list"), answerForm:$("answer-form"), answer:$("answer"), submit:$("submit"), answerHelp:$("answer-help"), feedback:$("feedback"), feedbackMark:$("feedback-mark"), feedbackTitle:$("feedback-title"), points:$("points"), feedbackText:$("feedback-text"), next:$("next"), quit:$("quit"),
        results:$("results"), resultTitle:$("result-title"), finalScore:$("final-score"), correct:$("correct"), wrong:$("wrong"), accuracy:$("accuracy"), bestStreak:$("best-streak"), resultMessage:$("result-message"), playAgain:$("play-again"), back:$("back")
    };
    let selectedRegion = "all", selectedDifficulty = "all";
    let run = [], roundIndex = 0, current = null, score = 0, streak = 0, bestStreak = 0, correctCount = 0;
    let attemptsUsed = 0, hintsUsed = 0, answered = false;

    const regionName = value => value === "all" ? "All Countries" : value;
    const storageRead = key => { try { return Number(localStorage.getItem(key)) || 0; } catch { return 0; } };
    const storageWrite = (key, value) => { try { localStorage.setItem(key, String(value)); } catch { /* Browser storage is optional. */ } };
    const shuffle = input => { const result = [...input]; for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; } return result; };
    const pool = () => countries.filter(country => (selectedRegion === "all" || country.region === selectedRegion) && (selectedDifficulty === "all" || country.difficulty === selectedDifficulty));
    const scoreKey = () => `jb-wai-best-${selectedRegion}-${selectedDifficulty}`;

    const regionArt = {
        all:'<svg viewBox="0 0 48 40"><circle cx="24" cy="20" r="15"/><path d="M9 20h30M24 5c5 5 7 10 7 15s-2 10-7 15m0-30c-5 5-7 10-7 15s2 10 7 15"/></svg>',
        Europe:'<svg viewBox="0 0 48 40"><path d="m22 4 8 3 2 5 7 3-2 5-4 1 1 6-5 4-5-3-4 5-5-5 1-6-6-4 4-5-2-5 5-2Z"/><circle cx="33" cy="31" r="2"/></svg>',
        Asia:'<svg viewBox="0 0 48 40"><path d="m5 13 7-5 8 2 4-4 8 3 4 6 7 3-3 5-7 1-4 6-9 2-4-5-7-1 2-6-7-2Z"/><path d="m31 26 2 6m5-5 2 4"/></svg>',
        Africa:'<svg viewBox="0 0 48 40"><path d="m20 3 9 2 7 9-3 7 2 5-7 2-4 8-6-5-4-10-5-6 4-8Z"/><path d="m32 31 2 4"/></svg>',
        'North America':'<svg viewBox="0 0 48 40"><path d="m7 7 8-3 7 4 4-2 5 4-3 6-6 3-3 7-5-1-4-6-7-2Z"/><path d="m21 25 4 3 2 8m7-13 3 5"/></svg>',
        'South America':'<svg viewBox="0 0 48 40"><path d="m14 4 10 2 8 7-4 5-2 7-5 4-3 8-4-5 1-7-4-5-3-8Z"/></svg>',
        Oceania:'<svg viewBox="0 0 48 40"><path d="m5 14 7-5 8 2 3 5-6 4-9-1Zm20 12 4-4 2 3-3 4Zm8 5 3-4 2 4-3 4Zm-1-23 6 2 3 5-3 4-5-4Z"/></svg>'
    };

    function renderSetup() {
        el.regions.replaceChildren();
        for (const [id,name,description] of regions) {
            const available = countries.filter(country => (id === "all" || country.region === id) && (selectedDifficulty === "all" || country.difficulty === selectedDifficulty)).length;
            const button = document.createElement("button");
            button.type = "button"; button.className = `wai-region-card${selectedRegion === id ? " is-selected" : ""}`; button.dataset.region = id; button.setAttribute("aria-pressed", String(selectedRegion === id));
            button.innerHTML = `<span class="wai-region-top"><span class="wai-region-art" aria-hidden="true">${regionArt[id]}</span><span class="wai-region-count">${available} ${available === 1 ? "COUNTRY" : "COUNTRIES"}</span></span><strong>${name}</strong><span class="visually-hidden">${description}</span>`;
            el.regions.append(button);
        }
        el.difficulties.replaceChildren();
        for (const [id,label] of difficulties) {
            const button=document.createElement("button"); button.type="button"; button.className=`wai-difficulty-button${id===selectedDifficulty?" is-selected":""}`; button.dataset.difficulty=id; button.setAttribute("aria-pressed",String(id===selectedDifficulty)); button.textContent=label; el.difficulties.append(button);
        }
        const count = pool().length;
        el.difficultyCaption.textContent = difficultyCaption[selectedDifficulty];
        el.poolNote.textContent = `${countries.length} country outlines in the collection`;
        el.setupMessage.textContent = `${count} countries in this selection · up to ${Math.min(10,count)} rounds · no repeats.`;
        el.start.disabled = count === 0;
        el.best.textContent = storageRead(scoreKey());
        el.bestLabel.textContent = `${regionName(selectedRegion)} · ${difficultyLabel[selectedDifficulty]}`;
    }

    function normalize(value) {
        return String(value ?? "").normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("en")
            .replace(/&/g, " and ").replace(/[.’'`]/g, "").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
    }
    function validNames(country) {
        const aliases = Array.isArray(country.aliases) ? country.aliases : (typeof country.aliases === "string" ? [country.aliases] : []);
        return [...new Set([country.name, ...aliases].map(normalize).filter(Boolean))];
    }
    function editDistanceAtMostOne(left, right) {
        if (Math.abs(left.length-right.length)>1) return 2;
        let i=0,j=0,edits=0;
        while(i<left.length&&j<right.length){
            if(left[i]===right[j]){i++;j++;continue;}
            edits++;if(edits>1)return 2;
            if(left.length===right.length){
                if(i+1<left.length&&j+1<right.length&&left[i]===right[j+1]&&left[i+1]===right[j]){i+=2;j+=2;}
                else{i++;j++;}
            }else if(left.length>right.length){i++;}else{j++;}
        }
        if(i<left.length||j<right.length)edits++;
        return edits;
    }
    function findAnswer(rawAnswer) {
        const answer=normalize(rawAnswer);if(!answer)return {match:null,ambiguous:false};
        const exact=countries.filter(country=>validNames(country).includes(answer));
        if(exact.length===1)return {match:exact[0],ambiguous:false};
        if(exact.length>1)return {match:null,ambiguous:true};
        if(answer.replace(/\s/g,"").length<5)return {match:null,ambiguous:false};
        const close=new Set();
        for(const country of countries){for(const name of validNames(country)){if(name.replace(/\s/g,"").length>=5&&editDistanceAtMostOne(answer,name)===1){close.add(country.id);break;}}}
        if(close.size!==1)return {match:null,ambiguous:close.size>1};
        return {match:countries.find(country=>country.id===[...close][0])||null,ambiguous:false};
    }

    function validateData() {
        if (!payload?.metadata?.source || !payload.metadata.license || countries.length < 100) throw new Error("Country map data did not load.");
        const ids=new Set(),names=new Set();
        for(const country of countries){
            if(!country.id||!country.name||!country.path||country.path.length<25||!regions.some(region=>region[0]===country.region)||!['easy','medium','hard'].includes(country.difficulty)||ids.has(country.id)||names.has(country.name)) throw new Error(`Invalid country silhouette: ${country.name||"unknown"}`);
            ids.add(country.id);names.add(country.name);
        }
    }

    function startGame() {
        const available=shuffle(pool());if(!available.length)return;
        run=available.slice(0,Math.min(10,available.length));roundIndex=0;score=0;streak=0;bestStreak=0;correctCount=0;
        el.setup.classList.add("is-hidden");el.results.classList.add("is-hidden");el.game.classList.remove("is-hidden");renderRound();
        el.game.scrollIntoView({behavior:"smooth",block:"start"});
    }
    function renderRound() {
        current=run[roundIndex];attemptsUsed=0;hintsUsed=0;answered=false;
        el.roundRegion.textContent=current.region.toUpperCase();el.roundDifficulty.textContent=current.difficulty.toUpperCase();el.roundDifficulty.dataset.level=current.difficulty;
        el.round.textContent=`${roundIndex+1} / ${run.length}`;el.score.textContent=score;el.streak.textContent=streak;
        el.shape.setAttribute("d",current.path);el.hintsUsed.textContent="Hints used: 0 / 3";el.hintList.replaceChildren();el.attempts.textContent="3 tries left";el.hintCount.textContent="−20 pts";el.hint.disabled=false;el.hint.classList.remove("is-used");
        el.answer.value="";el.answer.disabled=false;el.submit.disabled=false;el.answerHelp.textContent="Use the English country name. Press Enter to submit.";
        el.feedback.classList.add("is-hidden");el.feedback.classList.remove("is-correct","is-wrong");el.next.classList.add("is-hidden");
    }
    function useHint() {
        if(answered||hintsUsed>=3)return;
        hintsUsed++;
        const item=document.createElement("p");
        if(hintsUsed===1)item.textContent=`Continent: ${current.region}.`;
        if(hintsUsed===2)item.textContent=`The name starts with “${current.name[0].toLocaleUpperCase("en")}”.`;
        if(hintsUsed===3){const count=Math.min(3,Math.max(2,Math.ceil(current.name.length/3)));item.textContent=`Name clue: ${current.name.slice(0,count)}…`;}
        el.hintList.append(item);el.hintsUsed.textContent=`Hints used: ${hintsUsed} / 3`;el.hintCount.textContent=hintsUsed===3?"No more hints":"−20 pts";el.hint.classList.add("is-used");if(hintsUsed===3)el.hint.disabled=true;
    }
    function showFeedback(correct,finalAnswer=false) {
        answered=correct||finalAnswer;el.answer.disabled=true;el.submit.disabled=true;el.hint.disabled=true;
        el.feedback.classList.remove("is-hidden","is-correct","is-wrong");el.feedback.classList.add(correct?"is-correct":"is-wrong");
        el.feedbackMark.textContent=correct?"✓":"!";el.feedbackTitle.textContent=correct?"Correct!":(finalAnswer?"The answer was:":"Not quite!");
        if(correct){const award=[100,70,40,20][hintsUsed];score+=award;correctCount++;streak++;bestStreak=Math.max(bestStreak,streak);el.score.textContent=score;el.streak.textContent=streak;el.points.textContent=`+${award} pts`;el.feedbackText.textContent=`${current.name} — nicely placed${hintsUsed?` with ${hintsUsed} ${hintsUsed===1?"hint":"hints"}`:""}.`;
        }else if(finalAnswer){streak=0;el.streak.textContent=0;el.points.textContent="+0 pts";el.feedbackText.textContent=`${current.name} was the country. Take another look at its outline before the next round.`;
        }else{answered=false;streak=0;el.streak.textContent=0;el.feedback.classList.remove("is-wrong");el.points.textContent="";const remaining=3-attemptsUsed;el.feedbackText.textContent=remaining===1?"Not quite. One try left — take another look.":`Not quite. ${remaining} tries left — take another look.`;el.answer.disabled=false;el.submit.disabled=false;el.hint.disabled=hintsUsed===3;el.answer.focus();return;}
        if(score>storageRead(scoreKey()))storageWrite(scoreKey(),score);el.best.textContent=storageRead(scoreKey());
        el.next.querySelector("span").textContent=roundIndex+1===run.length?"See Results":"Next Country";el.next.classList.remove("is-hidden");
    }
    function submitAnswer(event) {
        event.preventDefault();if(answered)return;
        const input=el.answer.value.trim();if(!input){el.answerHelp.textContent="Type a country name before submitting.";el.answer.focus();return;}
        el.answerHelp.textContent="Use the English country name. Press Enter to submit.";
        const result=findAnswer(input);
        if(result.match?.id===current.id){showFeedback(true);return;}
        attemptsUsed++;el.attempts.textContent=`${3-attemptsUsed} ${3-attemptsUsed===1?"try":"tries"} left`;
        if(attemptsUsed>=3){showFeedback(false,true);return;}
        showFeedback(false,false);
    }
    function nextCountry(){if(!answered)return;roundIndex++;if(roundIndex>=run.length){showResults();return;}renderRound();el.game.scrollIntoView({behavior:"smooth",block:"start"});}
    function showResults(){el.game.classList.add("is-hidden");el.results.classList.remove("is-hidden");const wrong=run.length-correctCount,accuracy=Math.round(correctCount/run.length*100);el.finalScore.textContent=score;el.correct.textContent=`${correctCount} / ${run.length}`;el.wrong.textContent=wrong;el.accuracy.textContent=`${accuracy}%`;el.bestStreak.textContent=bestStreak;
        if(accuracy===100){el.resultTitle.textContent="Geography Master!";el.resultMessage.textContent="Every outline landed in the right place. That's a world-class run.";}else if(accuracy>=70){el.resultTitle.textContent="Amazing!";el.resultMessage.textContent="You know your way around a map. Nicely done.";}else if(accuracy>=40){el.resultTitle.textContent="Great job!";el.resultMessage.textContent="A few coastlines were tricky. You're getting there.";}else{el.resultTitle.textContent="Keep practicing!";el.resultMessage.textContent="Every outline is a new place to learn.";}}
    function backToSetup(){el.game.classList.add("is-hidden");el.results.classList.add("is-hidden");el.setup.classList.remove("is-hidden");renderSetup();window.scrollTo({top:0,behavior:"smooth"});}

    el.regions.addEventListener("click",event=>{const button=event.target.closest("[data-region]");if(!button)return;selectedRegion=button.dataset.region;renderSetup();});
    el.difficulties.addEventListener("click",event=>{const button=event.target.closest("[data-difficulty]");if(!button)return;selectedDifficulty=button.dataset.difficulty;renderSetup();});
    el.start.addEventListener("click",startGame);el.playAgain.addEventListener("click",startGame);el.next.addEventListener("click",nextCountry);el.quit.addEventListener("click",backToSetup);el.back.addEventListener("click",backToSetup);el.hint.addEventListener("click",useHint);el.answerForm.addEventListener("submit",submitAnswer);
    try{validateData();}catch(error){el.setupMessage.textContent="The country map data needs a quick repair before this game can start.";el.start.disabled=true;console.error(error);}
    renderSetup();
})();
