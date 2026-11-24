(() => {
    "use strict";
    const questions = window.TWO_TRUTHS_DATA || [];
    const categories = [
        ["all","All Categories","Mix every subject"],["animals","Animals","Wildlife & nature"],["food","Food & Drinks","Things on the menu"],
        ["science-nature","Science & Nature","How the world works"],["geography","Geography","Places & planet Earth"],["history","History","People & moments"],
        ["sports","Sports","Games & competition"],["movies-tv","Movies & TV","Stories on screen"],["technology","Technology","Inventions & computers"],
        ["space","Space","Our solar system & beyond"],["general-knowledge","General Knowledge","A bit of everything"]
    ];
    const difficulties = [["all","All difficulties"],["easy","Easy"],["medium","Medium"],["hard","Hard"]];
    const difficultyLabels = { all:"All difficulties",easy:"Easy",medium:"Medium",hard:"Hard" };
    const captions = { all:"A little of everything",easy:"Familiar facts to warm up",medium:"A few surprises",hard:"Look a little closer" };
    const categoryName = id => categories.find(item => item[0] === id)?.[1] || "All Categories";
    const $ = id => document.getElementById(`ttl-${id}`);
    const els = { setup:$('setup'), categoryGrid:$('category-grid'), difficultyOptions:$('difficulty-options'), caption:$('difficulty-caption'), poolNote:$('pool-note'), setupMessage:$('setup-message'), start:$('start'), best:$('best'), bestLabel:$('best-label'), game:$('game'), roundCategory:$('round-category'), roundDifficulty:$('round-difficulty'), round:$('round'), score:$('score'), streak:$('streak'), statements:$('statements'), feedback:$('feedback'), feedbackMark:$('feedback-mark'), feedbackHeading:$('feedback-heading'), points:$('points'), streakNote:$('streak-note'), explanations:$('explanations'), next:$('next'), results:$('results'), resultTitle:$('result-title'), finalScore:$('final-score'), correct:$('correct'), wrong:$('wrong'), accuracy:$('accuracy'), bestStreak:$('best-streak'), resultMessage:$('result-message'), playAgain:$('play-again'), back:$('back') };
    let selectedCategory = "all", selectedDifficulty = "all", run = [], index = 0, current = null, displayOrder = [];
    let score = 0, streak = 0, bestStreak = 0, correctCount = 0, answered = false;
    const readScore = key => { try { return Number(localStorage.getItem(key)) || 0; } catch { return 0; } };
    const writeScore = (key, value) => { try { localStorage.setItem(key, String(value)); } catch { /* Game remains playable if storage is blocked. */ } };
    const shuffle = array => { const result = [...array]; for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; } return result; };
    function renderSelectors() {
        els.categoryGrid.replaceChildren();
        const art = {
            all:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="17"/><path d="M24 7v34M7 24h34M12 12l24 24m0-24L12 36"/></svg>',
            animals:'<svg viewBox="0 0 48 48"><path d="M24 23c-5 0-12 6-12 12 0 4 4 5 8 3l4-2 4 2c4 2 8 1 8-3 0-6-7-12-12-12Z"/><circle cx="13" cy="16" r="4"/><circle cx="22" cy="11" r="4"/><circle cx="31" cy="12" r="4"/><circle cx="37" cy="19" r="3.5"/></svg>',
            food:'<svg viewBox="0 0 48 48"><path d="M24 17c-9-8-18 1-14 12 3 9 9 13 14 9 5 4 11 0 14-9 4-11-5-20-14-12Z"/><path d="M24 17c0-7 4-11 10-12M25 10c-4-4-8-4-11-3"/></svg>',
            'science-nature':'<svg viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="18" ry="8"/><ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(120 24 24)"/><circle cx="24" cy="24" r="3"/></svg>',
            geography:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c6 6 8 12 8 18s-2 12-8 18m0-36c-6 6-8 12-8 18s2 12 8 18"/></svg>',
            history:'<svg viewBox="0 0 48 48"><path d="M13 8h23v30H13a5 5 0 0 1-5-5V13a5 5 0 0 1 5-5Zm0 0a5 5 0 0 0-5 5v20a5 5 0 0 1 5-5h23M17 16h13M17 22h13"/></svg>',
            sports:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><path d="m24 6 5 9-5 9-10-1-8-7m36 0-8 7-10 1m-5 0-6 9 4 9m7-18 6 9-4 9"/></svg>',
            'movies-tv':'<svg viewBox="0 0 48 48"><rect x="7" y="12" width="34" height="27" rx="3"/><path d="M7 20h34M13 12l5 8m4-8 5 8m4-8 5 8m-5 13-8-5v10l8-5Z"/></svg>',
            technology:'<svg viewBox="0 0 48 48"><rect x="12" y="11" width="24" height="23" rx="3"/><path d="M18 39h12m-6-5v5M7 16h5m-5 7h5m-5 7h5m24-14h5m-5 7h5m-5 7h5M18 18h12v9H18z"/></svg>',
            space:'<svg viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-28 24 24)"/><circle cx="24" cy="24" r="7"/><circle cx="7" cy="30" r="2.5"/></svg>',
            'general-knowledge':'<svg viewBox="0 0 48 48"><path d="M15 21a9 9 0 1 1 18 0c0 5-4 7-5 11h-8c-1-4-5-6-5-11Zm6 15h6m-5 4h4"/><path d="M24 5V2m14 9 3-2M10 11l-3-2"/></svg>'
        };
        for (const [id,name,desc] of categories) {
            const count = questions.filter(q => (id === "all" || q.category === id) && (selectedDifficulty === "all" || q.difficulty === selectedDifficulty)).length;
            const button = document.createElement("button"); button.type="button"; button.className=`ttl-category-card${id===selectedCategory?" is-selected":""}`; button.dataset.category=id; button.setAttribute("aria-pressed",String(id===selectedCategory));
            button.innerHTML = `<span class="ttl-category-art" aria-hidden="true">${art[id]}</span><span class="ttl-category-copy"><strong>${name}</strong><small>${desc} · ${count} ${count===1?"question":"questions"}</small></span><span class="ttl-selected-mark" aria-hidden="true">✓</span>`;
            els.categoryGrid.append(button);
        }
        els.difficultyOptions.replaceChildren();
        for (const [id,label] of difficulties) { const button=document.createElement("button"); button.type="button"; button.className=`ttl-difficulty-button${id===selectedDifficulty?" is-selected":""}`; button.dataset.difficulty=id; button.setAttribute("aria-pressed",String(id===selectedDifficulty)); button.textContent=label; els.difficultyOptions.append(button); }
        els.caption.textContent=captions[selectedDifficulty];
        const pool=matchingQuestions(); const count=pool.length;
        els.poolNote.textContent=`${count} curated question${count===1?"":"s"} available`;
        els.setupMessage.textContent=`${count} question${count===1?"":"s"} in this selection · no repeats in a run.`;
        els.start.disabled=!count;
        const key=scoreKey(); els.best.textContent=readScore(key); els.bestLabel.textContent=`${categoryName(selectedCategory)} · ${difficultyLabels[selectedDifficulty]}`;
    }
    function matchingQuestions(){ return questions.filter(q=>(selectedCategory==="all"||q.category===selectedCategory)&&(selectedDifficulty==="all"||q.difficulty===selectedDifficulty)); }
    function scoreKey(){ return `jb-ttl-best-${selectedCategory}-${selectedDifficulty}`; }
    function validate(){
        const ids=new Set(); const categoryIds=new Set(categories.filter(c=>c[0]!=="all").map(c=>c[0]));
        for(const question of questions){
            if(ids.has(question.id)||!categoryIds.has(question.category)||!difficultyLabels[question.difficulty]||question.statements?.length!==3) throw new Error(`Invalid question: ${question.id}`);
            ids.add(question.id); if(question.statements.filter(s=>s.truth).length!==2) throw new Error(`Question must have two truths and one lie: ${question.id}`);
            for(const statement of question.statements) if(!statement.text||!statement.explanation||!/^https:\/\//.test(statement.source)) throw new Error(`Missing fact explanation or source: ${question.id}`);
        }
        if(!questions.length) throw new Error("No questions loaded");
    }
    function startGame(){
        const pool=matchingQuestions(); if(!pool.length) return;
        run=shuffle(pool).slice(0,Math.min(10,pool.length)); index=0; score=0; streak=0; bestStreak=0; correctCount=0;
        els.setup.classList.add("is-hidden"); els.results.classList.add("is-hidden"); els.game.classList.remove("is-hidden"); renderRound();
    }
    function renderRound(){
        current=run[index]; answered=false; els.roundCategory.textContent=categoryName(current.category).toUpperCase(); els.roundDifficulty.textContent=current.difficulty.toUpperCase(); els.roundDifficulty.dataset.level=current.difficulty;
        els.round.textContent=`${index+1} / ${run.length}`; els.score.textContent=score; els.streak.textContent=streak;
        els.feedback.classList.add("is-hidden"); els.feedback.classList.remove("is-correct","is-wrong"); els.next.classList.add("is-hidden"); els.statements.replaceChildren();
        displayOrder = shuffle(current.statements.map((statement,originalIndex)=>({statement,originalIndex}))).map(item=>item.originalIndex);
        displayOrder.map(originalIndex=>({statement:current.statements[originalIndex],originalIndex})).forEach(({statement,originalIndex},i)=>{
            const button=document.createElement("button"); button.type="button"; button.className="ttl-statement-card"; button.dataset.originalIndex=originalIndex; button.setAttribute("aria-label",`Statement ${String.fromCharCode(65+i)}: ${statement.text}`);
            button.innerHTML=`<span class="ttl-statement-letter">${String.fromCharCode(65+i)}</span><span class="ttl-statement-text"></span><span class="ttl-statement-mark" aria-hidden="true"></span>`; button.querySelector(".ttl-statement-text").textContent=statement.text;
            button.addEventListener("click",()=>chooseAnswer(originalIndex)); els.statements.append(button);
        });
    }
    function chooseAnswer(choiceIndex){
        if(answered||!current)return; answered=true;
        const answerIndex=current.statements.findIndex(s=>!s.truth); const isCorrect=choiceIndex===answerIndex;
        let earned=0, note="";
        if(isCorrect){ streak++; correctCount++; bestStreak=Math.max(bestStreak,streak); earned=100+Math.min((streak-1)*10,50); score+=earned; note=streak===2?"A streak is taking shape!":streak>=3?`${streak} in a row — nicely spotted!`:""; }
        else { note=streak?`Your ${streak}-answer streak ends here.` : "Your streak resets. The next one is yours."; streak=0; }
        [...els.statements.children].forEach(button=>{const statement=current.statements[Number(button.dataset.originalIndex)]; button.disabled=true; if(!statement.truth){button.classList.add("is-lie");button.querySelector(".ttl-statement-mark").textContent="LIE";} if(Number(button.dataset.originalIndex)===choiceIndex&&!isCorrect){button.classList.add("is-wrong");button.querySelector(".ttl-statement-mark").textContent="×";} if(Number(button.dataset.originalIndex)===choiceIndex&&isCorrect)button.classList.add("is-picked-correct");});
        els.score.textContent=score; els.streak.textContent=streak; els.feedback.classList.remove("is-hidden"); els.feedback.classList.add(isCorrect?"is-correct":"is-wrong"); els.feedbackMark.textContent=isCorrect?"✓":"!"; els.feedbackHeading.textContent=isCorrect?"Correct!":"Not quite!"; els.points.textContent=isCorrect?`+${earned}`:"+0"; els.streakNote.textContent=note; els.explanations.replaceChildren();
        displayOrder.forEach((originalIndex,i)=>{const statement=current.statements[originalIndex];const item=document.createElement("article");item.className="ttl-explanation-card"; const title=document.createElement("strong"); title.textContent=`${String.fromCharCode(65+i)} · ${statement.truth?"TRUE":"THE LIE"}`; const body=document.createElement("p"); body.textContent=statement.explanation; const link=document.createElement("a"); link.href=statement.source; link.target="_blank"; link.rel="noopener noreferrer"; link.textContent="Check source ↗"; item.append(title,body,link); els.explanations.append(item);});
        els.next.querySelector("span").textContent=index+1===run.length?"See results":"Next question"; els.next.classList.remove("is-hidden");
        if(score>readScore(scoreKey()))writeScore(scoreKey(),score); els.best.textContent=readScore(scoreKey());
    }
    function nextQuestion(){if(!answered)return;index++; if(index>=run.length){showResults();return;}renderRound();els.game.scrollIntoView({behavior:"smooth",block:"start"});}
    function showResults(){els.game.classList.add("is-hidden");els.results.classList.remove("is-hidden");const wrong=run.length-correctCount,percent=Math.round(correctCount/run.length*100);els.finalScore.textContent=score;els.correct.textContent=`${correctCount} / ${run.length}`;els.wrong.textContent=wrong;els.accuracy.textContent=`${percent}%`;els.bestStreak.textContent=bestStreak;
        if(percent===100){els.resultTitle.textContent="Amazing!";els.resultMessage.textContent="A perfect run. You saw right through every lie.";}else if(percent>=70){els.resultTitle.textContent="Great job!";els.resultMessage.textContent="Sharp instincts. You caught most of the fibs.";}else if(percent>=40){els.resultTitle.textContent="Pretty good!";els.resultMessage.textContent="A few facts caught you out. Now you know something new.";}else{els.resultTitle.textContent="Keep practicing!";els.resultMessage.textContent="The next round is another chance to catch the lie.";}}
    function backToSetup(){els.game.classList.add("is-hidden");els.results.classList.add("is-hidden");els.setup.classList.remove("is-hidden");renderSelectors();window.scrollTo({top:0,behavior:"smooth"});}
    els.categoryGrid.addEventListener("click",event=>{const button=event.target.closest("[data-category]");if(!button)return;selectedCategory=button.dataset.category;renderSelectors();});
    els.difficultyOptions.addEventListener("click",event=>{const button=event.target.closest("[data-difficulty]");if(!button)return;selectedDifficulty=button.dataset.difficulty;renderSelectors();});
    els.start.addEventListener("click",startGame);els.next.addEventListener("click",nextQuestion);els.playAgain.addEventListener("click",startGame);els.back.addEventListener("click",backToSetup);
    try{validate();}catch(error){els.setupMessage.textContent="The question set needs a quick repair before the game can start.";els.start.disabled=true;console.error(error);}
    renderSelectors();
})();
