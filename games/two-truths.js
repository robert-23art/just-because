(() => {
    "use strict";
    const questions = window.TWO_TRUTHS_DATA || [];
    const localeCatalog = {
        "ttl.category.all":{nl:"Alle categorieën",de:"Alle Kategorien",fr:"Toutes les catégories",es:"Todas las categorías"},
        "ttl.category.all.description":{nl:"Alles door elkaar",de:"Alle Themen gemischt",fr:"Tous les sujets mélangés",es:"Todos los temas mezclados"},
        "ttl.category.animals":{nl:"Dieren",de:"Tiere",fr:"Animaux",es:"Animales"},
        "ttl.category.animals.description":{nl:"Dieren en natuur",de:"Tierwelt und Natur",fr:"Faune et nature",es:"Vida silvestre y naturaleza"},
        "ttl.category.food":{nl:"Eten en drinken",de:"Essen und Trinken",fr:"Cuisine et boissons",es:"Comida y bebida"},
        "ttl.category.food.description":{nl:"Van alles op het menu",de:"Alles auf der Speisekarte",fr:"Au menu",es:"Cosas del menú"},
        "ttl.category.science-nature":{nl:"Wetenschap en natuur",de:"Wissenschaft und Natur",fr:"Sciences et nature",es:"Ciencia y naturaleza"},
        "ttl.category.science-nature.description":{nl:"Zo werkt de wereld",de:"Wie die Welt funktioniert",fr:"Comment fonctionne le monde",es:"Cómo funciona el mundo"},
        "ttl.category.geography":{nl:"Aardrijkskunde",de:"Geografie",fr:"Géographie",es:"Geografía"},
        "ttl.category.geography.description":{nl:"Plekken en planeet aarde",de:"Orte und der Planet Erde",fr:"Lieux et planète Terre",es:"Lugares y planeta Tierra"},
        "ttl.category.history":{nl:"Geschiedenis",de:"Geschichte",fr:"Histoire",es:"Historia"},
        "ttl.category.history.description":{nl:"Mensen en momenten",de:"Menschen und Momente",fr:"Personnes et événements",es:"Personas y momentos"},
        "ttl.category.sports":{nl:"Sport",de:"Sport",fr:"Sports",es:"Deportes"},
        "ttl.category.sports.description":{nl:"Spel en competitie",de:"Spiel und Wettbewerb",fr:"Jeux et compétition",es:"Juegos y competición"},
        "ttl.category.movies-tv":{nl:"Films en tv",de:"Film und Fernsehen",fr:"Films et télévision",es:"Cine y televisión"},
        "ttl.category.movies-tv.description":{nl:"Verhalen op het scherm",de:"Geschichten auf dem Bildschirm",fr:"Histoires à l'écran",es:"Historias en pantalla"},
        "ttl.category.technology":{nl:"Technologie",de:"Technologie",fr:"Technologie",es:"Tecnología"},
        "ttl.category.technology.description":{nl:"Uitvindingen en computers",de:"Erfindungen und Computer",fr:"Inventions et informatique",es:"Inventos y ordenadores"},
        "ttl.category.space":{nl:"Ruimte",de:"Weltraum",fr:"Espace",es:"Espacio"},
        "ttl.category.space.description":{nl:"Ons zonnestelsel en verder",de:"Unser Sonnensystem und mehr",fr:"Notre système solaire et au-delà",es:"Nuestro sistema solar y más allá"},
        "ttl.category.general-knowledge":{nl:"Algemene kennis",de:"Allgemeinwissen",fr:"Culture générale",es:"Cultura general"},
        "ttl.category.general-knowledge.description":{nl:"Van alles wat",de:"Ein bisschen von allem",fr:"Un peu de tout",es:"Un poco de todo"},
        "ttl.difficulty.all":{nl:"Alle niveaus",de:"Alle Schwierigkeitsgrade",fr:"Toutes les difficultés",es:"Todas las dificultades"},
        "ttl.difficulty.easy":{nl:"Makkelijk",de:"Einfach",fr:"Facile",es:"Fácil"},
        "ttl.difficulty.medium":{nl:"Gemiddeld",de:"Mittel",fr:"Moyen",es:"Medio"},
        "ttl.difficulty.hard":{nl:"Moeilijk",de:"Schwer",fr:"Difficile",es:"Difícil"},
        "ttl.ui.caption.all":{nl:"Van alles een beetje",de:"Ein bisschen von allem",fr:"Un peu de tout",es:"Un poco de todo"},
        "ttl.ui.caption.easy":{nl:"Bekende weetjes om op te warmen",de:"Vertraute Fakten zum Aufwärmen",fr:"Des faits familiers pour commencer",es:"Datos conocidos para empezar"},
        "ttl.ui.caption.medium":{nl:"Een paar verrassingen",de:"Ein paar Überraschungen",fr:"Quelques surprises",es:"Algunas sorpresas"},
        "ttl.ui.caption.hard":{nl:"Kijk nog eens goed",de:"Schau genau hin",fr:"Regardez de plus près",es:"Mira con atención"},
        "ttl.ui.question":{nl:"vraag",de:"Frage",fr:"question",es:"pregunta"},
        "ttl.ui.questions":{nl:"vragen",de:"Fragen",fr:"questions",es:"preguntas"},
        "ttl.ui.curatedAvailable":{nl:"samengestelde vraag beschikbaar",de:"kuratierte Frage verfügbar",fr:"question sélectionnée disponible",es:"pregunta seleccionada disponible"},
        "ttl.ui.curatedAvailablePlural":{nl:"samengestelde vragen beschikbaar",de:"kuratierte Fragen verfügbar",fr:"questions sélectionnées disponibles",es:"preguntas seleccionadas disponibles"},
        "ttl.ui.selectionNoRepeats":{nl:"in deze selectie · geen herhalingen in een spel.",de:"in dieser Auswahl · keine Wiederholungen pro Runde.",fr:"dans cette sélection · aucun doublon par partie.",es:"en esta selección · sin repeticiones por partida."},
        "ttl.ui.statement":{nl:"Stelling",de:"Aussage",fr:"Affirmation",es:"Afirmación"},
        "ttl.ui.lie":{nl:"LEUGEN",de:"LÜGE",fr:"MENSONGE",es:"MENTIRA"},
        "ttl.ui.true":{nl:"WAAR",de:"WAHR",fr:"VRAI",es:"VERDAD"},
        "ttl.ui.checkSource":{nl:"Bron bekijken ↗",de:"Quelle ansehen ↗",fr:"Voir la source ↗",es:"Ver fuente ↗"},
        "ttl.ui.correct":{nl:"Goed!",de:"Richtig!",fr:"Correct !",es:"¡Correcto!"},
        "ttl.ui.notQuite":{nl:"Niet helemaal!",de:"Nicht ganz!",fr:"Pas tout à fait !",es:"¡No exactamente!"},
        "ttl.ui.streakTwo":{nl:"Je reeks begint vorm te krijgen!",de:"Deine Serie nimmt Form an!",fr:"La série prend forme !",es:"¡Tu racha va tomando forma!"},
        "ttl.ui.streakMany":{nl:"op een rij — goed gezien!",de:"in Folge — gut erkannt!",fr:"d'affilée — bien vu !",es:"seguidas: ¡bien visto!"},
        "ttl.ui.streakEnds":{nl:"Je reeks van antwoorden eindigt hier.",de:"Deine Serie von Antworten endet hier.",fr:"Votre série de réponses s'arrête ici.",es:"Tu racha de respuestas termina aquí."},
        "ttl.ui.streakResets":{nl:"Je reeks wordt gereset. De volgende is voor jou.",de:"Deine Serie endet. Die nächste gehört dir.",fr:"Votre série s'arrête. La prochaine est pour vous.",es:"Tu racha se reinicia. La siguiente es tuya."},
        "ttl.ui.next":{nl:"Volgende vraag",de:"Nächste Frage",fr:"Question suivante",es:"Siguiente pregunta"},
        "ttl.ui.results":{nl:"Bekijk resultaat",de:"Ergebnis ansehen",fr:"Voir les résultats",es:"Ver resultados"},
        "ttl.ui.setupRepair":{nl:"De vragenlijst moet eerst even worden hersteld.",de:"Der Fragensatz muss erst repariert werden.",fr:"Le jeu de questions doit être corrigé avant de commencer.",es:"Hay que corregir las preguntas antes de empezar."},
        "ttl.ui.resultPerfectTitle":{nl:"Geweldig!",de:"Fantastisch!",fr:"Incroyable !",es:"¡Increíble!"},
        "ttl.ui.resultPerfect":{nl:"Perfect gespeeld. Je doorzag elke leugen.",de:"Perfekte Runde. Du hast jede Lüge durchschaut.",fr:"Partie parfaite. Vous avez démasqué tous les mensonges.",es:"Una partida perfecta. Descubriste todas las mentiras."},
        "ttl.ui.resultGreatTitle":{nl:"Goed gedaan!",de:"Gut gemacht!",fr:"Bravo !",es:"¡Muy bien!"},
        "ttl.ui.resultGreat":{nl:"Scherp gezien. Je ontdekte de meeste verzinsels.",de:"Guter Blick. Du hast die meisten Schwindeleien erkannt.",fr:"Quel flair. Vous avez repéré la plupart des bobards.",es:"Buen ojo. Detectaste la mayoría de las mentiras."},
        "ttl.ui.resultOkayTitle":{nl:"Best goed!",de:"Ziemlich gut!",fr:"Pas mal !",es:"¡Bastante bien!"},
        "ttl.ui.resultOkay":{nl:"Een paar feiten verrasten je. Weer wat geleerd.",de:"Ein paar Fakten haben dich überrascht. Wieder etwas gelernt.",fr:"Quelques faits vous ont surpris. Vous avez appris quelque chose.",es:"Algunos datos te sorprendieron. Has aprendido algo nuevo."},
        "ttl.ui.resultPracticeTitle":{nl:"Blijf oefenen!",de:"Weiter üben!",fr:"Continuez à jouer !",es:"¡Sigue practicando!"},
        "ttl.ui.resultPractice":{nl:"De volgende ronde is een nieuwe kans om de leugen te vinden.",de:"Die nächste Runde ist eine neue Chance, die Lüge zu finden.",fr:"La prochaine partie sera l'occasion de trouver le mensonge.",es:"La próxima ronda será otra oportunidad para encontrar la mentira."}
    };
    if (window.JB_I18N) window.JB_I18N.registerCatalog(localeCatalog);
    const tr = (key, fallback) => window.JB_I18N ? window.JB_I18N.t(key, fallback) : fallback;
    const categories = [
        ["all","All Categories","Mix every subject"],["animals","Animals","Wildlife & nature"],["food","Food & Drinks","Things on the menu"],
        ["science-nature","Science & Nature","How the world works"],["geography","Geography","Places & planet Earth"],["history","History","People & moments"],
        ["sports","Sports","Games & competition"],["movies-tv","Movies & TV","Stories on screen"],["technology","Technology","Inventions & computers"],
        ["space","Space","Our solar system & beyond"],["general-knowledge","General Knowledge","A bit of everything"]
    ];
    const difficulties = [["all","All difficulties"],["easy","Easy"],["medium","Medium"],["hard","Hard"]];
    const difficultyLabels = { all:"All difficulties",easy:"Easy",medium:"Medium",hard:"Hard" };
    const captions = { all:"A little of everything",easy:"Familiar facts to warm up",medium:"A few surprises",hard:"Look a little closer" };
    const localized = (key, fallback) => tr(`ttl.${key}`, fallback);
    const categoryName = id => localized(`category.${id}`, categories.find(item => item[0] === id)?.[1] || "All Categories");
    const difficultyName = id => localized(`difficulty.${id}`, difficultyLabels[id] || id);
    const questionText = (question, index, field) => tr(`ttl.q.${question.id}.${field}.${index}`, question.statements[index][field === "statement" ? "text" : "explanation"]);
    const $ = id => document.getElementById(`ttl-${id}`);
    const els = { setup:$('setup'), categoryGrid:$('category-grid'), difficultyOptions:$('difficulty-options'), caption:$('difficulty-caption'), poolNote:$('pool-note'), setupMessage:$('setup-message'), start:$('start'), best:$('best'), bestLabel:$('best-label'), game:$('game'), roundCategory:$('round-category'), roundDifficulty:$('round-difficulty'), round:$('round'), score:$('score'), streak:$('streak'), statements:$('statements'), feedback:$('feedback'), feedbackMark:$('feedback-mark'), feedbackHeading:$('feedback-heading'), points:$('points'), streakNote:$('streak-note'), explanations:$('explanations'), next:$('next'), results:$('results'), resultTitle:$('result-title'), finalScore:$('final-score'), correct:$('correct'), wrong:$('wrong'), accuracy:$('accuracy'), bestStreak:$('best-streak'), resultMessage:$('result-message'), playAgain:$('play-again'), back:$('back') };
    let selectedCategory = "all", selectedDifficulty = "all", run = [], index = 0, current = null, displayOrder = [];
    let score = 0, streak = 0, bestStreak = 0, correctCount = 0, answered = false, answerIndex = -1, earnedPoints = 0, streakNote = "", dataValid = true;
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
            const translatedName = categoryName(id);
            const translatedDescription = localized(`category.${id}.description`, desc);
            const noun = tr(count === 1 ? "ttl.ui.question" : "ttl.ui.questions", count === 1 ? "question" : "questions");
            button.innerHTML = `<span class="ttl-category-art" aria-hidden="true">${art[id]}</span><span class="ttl-category-copy"><strong>${translatedName}</strong><small>${translatedDescription} · ${count} ${noun}</small></span><span class="ttl-selected-mark" aria-hidden="true">✓</span>`;
            els.categoryGrid.append(button);
        }
        els.difficultyOptions.replaceChildren();
        for (const [id,label] of difficulties) { const button=document.createElement("button"); button.type="button"; button.className=`ttl-difficulty-button${id===selectedDifficulty?" is-selected":""}`; button.dataset.difficulty=id; button.setAttribute("aria-pressed",String(id===selectedDifficulty)); button.textContent=difficultyName(id); els.difficultyOptions.append(button); }
        els.caption.textContent=tr(`ttl.ui.caption.${selectedDifficulty}`,captions[selectedDifficulty]);
        const pool=matchingQuestions(); const count=pool.length;
        els.poolNote.textContent=`${count} ${tr(count===1?"ttl.ui.curatedAvailable":"ttl.ui.curatedAvailablePlural",count===1?"curated question available":"curated questions available")}`;
        els.setupMessage.textContent=dataValid?`${count} ${tr(count===1?"ttl.ui.question":"ttl.ui.questions",count===1?"question":"questions")} ${tr("ttl.ui.selectionNoRepeats","in this selection · no repeats in a run.")}`:tr("ttl.ui.setupRepair","The question set needs a quick repair before the game can start.");
        els.start.disabled=!count||!dataValid;
        const key=scoreKey(); els.best.textContent=readScore(key); els.bestLabel.textContent=`${categoryName(selectedCategory)} · ${difficultyName(selectedDifficulty)}`;
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
        window.JustBecauseProfile?.recordGame("two-truths");
        run=shuffle(pool).slice(0,Math.min(10,pool.length)); index=0; score=0; streak=0; bestStreak=0; correctCount=0;
        els.setup.classList.add("is-hidden"); els.results.classList.add("is-hidden"); els.game.classList.remove("is-hidden"); renderRound();
    }
    function renderRound(){
        current=run[index]; answered=false; answerIndex=-1; earnedPoints=0; streakNote=""; els.roundCategory.textContent=categoryName(current.category).toUpperCase(); els.roundDifficulty.textContent=difficultyName(current.difficulty).toUpperCase(); els.roundDifficulty.dataset.level=current.difficulty;
        els.round.textContent=`${index+1} / ${run.length}`; els.score.textContent=score; els.streak.textContent=streak;
        els.feedback.classList.add("is-hidden"); els.feedback.classList.remove("is-correct","is-wrong"); els.next.classList.add("is-hidden"); els.statements.replaceChildren();
        displayOrder = shuffle(current.statements.map((statement,originalIndex)=>({statement,originalIndex}))).map(item=>item.originalIndex);
        renderStatements();
    }
    function renderStatements(){
        els.statements.replaceChildren();
        displayOrder.map(originalIndex=>({statement:current.statements[originalIndex],originalIndex})).forEach(({statement,originalIndex},i)=>{
            const text=questionText(current,originalIndex,"statement");
            const button=document.createElement("button"); button.type="button"; button.className="ttl-statement-card"; button.dataset.originalIndex=originalIndex; button.setAttribute("aria-label",`${tr("ttl.ui.statement","Statement")} ${String.fromCharCode(65+i)}: ${text}`);
            button.innerHTML=`<span class="ttl-statement-letter">${String.fromCharCode(65+i)}</span><span class="ttl-statement-text"></span><span class="ttl-statement-mark" aria-hidden="true"></span>`; button.querySelector(".ttl-statement-text").textContent=text;
            button.addEventListener("click",()=>chooseAnswer(originalIndex));
            if(answered){
                button.disabled=true;
                if(!statement.truth){button.classList.add("is-lie");button.querySelector(".ttl-statement-mark").textContent=tr("ttl.ui.lie","LIE");}
                if(originalIndex===answerIndex&&!current.statements[originalIndex].truth){button.classList.add("is-wrong");button.querySelector(".ttl-statement-mark").textContent="×";}
                if(originalIndex===answerIndex&&current.statements[originalIndex].truth)button.classList.add("is-picked-correct");
            }
            els.statements.append(button);
        });
        if(answered)renderFeedback();
    }
    function chooseAnswer(choiceIndex){
        if(answered||!current)return; answered=true;
        const lieIndex=current.statements.findIndex(s=>!s.truth); const isCorrect=choiceIndex===lieIndex;
        if(isCorrect){ streak++; correctCount++; window.DailyChallenge?.report("two-truths", correctCount); bestStreak=Math.max(bestStreak,streak); earnedPoints=100+Math.min((streak-1)*10,50); score+=earnedPoints; streakNote=streak===2?tr("ttl.ui.streakTwo","A streak is taking shape!"):streak>=3?`${streak} ${tr("ttl.ui.streakMany","in a row — nicely spotted!")}`:""; }
        else { streakNote=streak?`${tr("ttl.ui.streakEnds","Your streak ends here.")}` : tr("ttl.ui.streakResets","Your streak resets. The next one is yours."); streak=0; }
        answerIndex=choiceIndex;
        renderStatements();
        if(score>readScore(scoreKey()))writeScore(scoreKey(),score); els.best.textContent=readScore(scoreKey());
    }
    function renderFeedback(){
        const isCorrect=answerIndex===current.statements.findIndex(s=>!s.truth);
        els.score.textContent=score; els.streak.textContent=streak; els.feedback.classList.remove("is-hidden"); els.feedback.classList.remove("is-correct","is-wrong"); els.feedback.classList.add(isCorrect?"is-correct":"is-wrong"); els.feedbackMark.textContent=isCorrect?"✓":"!"; els.feedbackHeading.textContent=tr(isCorrect?"ttl.ui.correct":"ttl.ui.notQuite",isCorrect?"Correct!":"Not quite!"); els.points.textContent=isCorrect?`+${earnedPoints}`:"+0"; els.streakNote.textContent=streakNote; els.explanations.replaceChildren();
        displayOrder.forEach((originalIndex,i)=>{const statement=current.statements[originalIndex];const item=document.createElement("article");item.className="ttl-explanation-card"; const title=document.createElement("strong"); title.textContent=`${String.fromCharCode(65+i)} · ${tr(statement.truth?"ttl.ui.true":"ttl.ui.lie",statement.truth?"TRUE":"THE LIE")}`; const body=document.createElement("p"); body.textContent=questionText(current,originalIndex,"explanation"); const link=document.createElement("a"); link.href=statement.source; link.target="_blank"; link.rel="noopener noreferrer"; link.textContent=tr("ttl.ui.checkSource","Check source ↗"); item.append(title,body,link); els.explanations.append(item);});
        els.next.querySelector("span").textContent=index+1===run.length?tr("ttl.ui.results","See results"):tr("ttl.ui.next","Next question"); els.next.classList.remove("is-hidden");
    }
    function nextQuestion(){if(!answered)return;index++; if(index>=run.length){showResults();return;}renderRound();els.game.scrollIntoView({behavior:"smooth",block:"start"});}
    let resultPercent = 0;
    function renderResults(){
        const titleKey=resultPercent===100?"ttl.ui.resultPerfectTitle":resultPercent>=70?"ttl.ui.resultGreatTitle":resultPercent>=40?"ttl.ui.resultOkayTitle":"ttl.ui.resultPracticeTitle";
        const messageKey=resultPercent===100?"ttl.ui.resultPerfect":resultPercent>=70?"ttl.ui.resultGreat":resultPercent>=40?"ttl.ui.resultOkay":"ttl.ui.resultPractice";
        const titles={ "ttl.ui.resultPerfectTitle":"Amazing!","ttl.ui.resultGreatTitle":"Great job!","ttl.ui.resultOkayTitle":"Pretty good!","ttl.ui.resultPracticeTitle":"Keep practicing!" };
        const messages={ "ttl.ui.resultPerfect":"A perfect run. You saw right through every lie.","ttl.ui.resultGreat":"Sharp instincts. You caught most of the fibs.","ttl.ui.resultOkay":"A few facts caught you out. Now you know something new.","ttl.ui.resultPractice":"The next round is another chance to catch the lie." };
        els.resultTitle.textContent=tr(titleKey,titles[titleKey]);els.resultMessage.textContent=tr(messageKey,messages[messageKey]);
    }
    function showResults(){els.game.classList.add("is-hidden");els.results.classList.remove("is-hidden");const wrong=run.length-correctCount;resultPercent=Math.round(correctCount/run.length*100);els.finalScore.textContent=score;els.correct.textContent=`${correctCount} / ${run.length}`;els.wrong.textContent=wrong;els.accuracy.textContent=`${resultPercent}%`;els.bestStreak.textContent=bestStreak;renderResults();}
    function onLanguageChange(){
        if(!els.setup.classList.contains("is-hidden"))renderSelectors();
        if(current&&!els.game.classList.contains("is-hidden")){
            els.roundCategory.textContent=categoryName(current.category).toUpperCase();
            els.roundDifficulty.textContent=difficultyName(current.difficulty).toUpperCase();
            renderStatements();
        }
        if(!els.results.classList.contains("is-hidden"))renderResults();
    }
    function backToSetup(){els.game.classList.add("is-hidden");els.results.classList.add("is-hidden");els.setup.classList.remove("is-hidden");renderSelectors();window.scrollTo({top:0,behavior:"smooth"});}
    els.categoryGrid.addEventListener("click",event=>{const button=event.target.closest("[data-category]");if(!button)return;selectedCategory=button.dataset.category;renderSelectors();});
    els.difficultyOptions.addEventListener("click",event=>{const button=event.target.closest("[data-difficulty]");if(!button)return;selectedDifficulty=button.dataset.difficulty;renderSelectors();});
    els.start.addEventListener("click",startGame);els.next.addEventListener("click",nextQuestion);els.playAgain.addEventListener("click",startGame);els.back.addEventListener("click",backToSetup);
    try{validate();}catch(error){dataValid=false;els.setupMessage.textContent=tr("ttl.ui.setupRepair","The question set needs a quick repair before the game can start.");els.start.disabled=true;console.error(error);}
    renderSelectors();
    window.addEventListener("jb:languagechange",onLanguageChange);
})();
