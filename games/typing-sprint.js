(() => {
    "use strict";
    const sentences={
en:["Orange snacks make every Tuesday feel slightly more useful.","The tiny robot loves rainy windows and fast pizza.","Just because is a perfectly good reason to try again."],
nl:["Oranje snacks maken elke dinsdag een stukje nuttiger.","De kleine robot houdt van regenachtige ramen en snelle pizza.","Gewoon omdat is een prima reden om het nog eens te proberen."],
de:["Orangenfarbene Snacks machen jeden Dienstag ein bisschen nützlicher.","Der kleine Roboter liebt verregnete Fenster und schnelle Pizza.","Einfach weil ist ein guter Grund es noch einmal zu versuchen."],
fr:["Les snacks orange rendent chaque mardi un peu plus utile.","Le petit robot adore les fenêtres pluvieuses et la pizza rapide.","Parce que est une excellente raison pour essayer encore."],
es:["Las meriendas naranjas hacen que cada martes sea más útil.","El pequeño robot ama las ventanas lluviosas y la pizza rápida.","Porque sí es una buena razón para intentarlo otra vez."]
};
    let pool=[],duration=30,started=0,timer=null,typed=0,correct=0,current="";
    const setup=document.getElementById("typing-setup"),game=document.getElementById("typing-game"),results=document.getElementById("typing-results"),input=document.getElementById("typing-input"),sentenceEl=document.getElementById("typing-sentence");
    function lang(){return window.JB_I18N?.language||"en"} function tr(key,fallback){return window.JB_I18N?.t?window.JB_I18N.t(key,fallback):fallback}
    function next(){pool=sentences[lang()].slice().sort(()=>Math.random()-.5);current=pool.shift();render()}
    function render(){sentenceEl.replaceChildren();[...current].forEach((char,i)=>{const span=document.createElement("span");span.textContent=char;const value=input.value[i];if(value!==undefined)span.className=value===char?"good":"bad";sentenceEl.append(span)})}
    function tick(){const elapsed=(performance.now()-started)/1000,remaining=Math.max(0,duration-elapsed);document.getElementById("typing-time").textContent=remaining.toFixed(1);const wpm=Math.round((correct/5)/(elapsed/60)||0);document.getElementById("typing-wpm").textContent=`${wpm} WPM`;document.getElementById("typing-accuracy").textContent=`${typed?Math.round(correct/typed*100):100}%`;if(remaining<=0)finish(wpm)}
    function finish(wpm){clearInterval(timer);game.hidden=true;results.hidden=false;document.getElementById("typing-final").textContent=`${wpm} WPM`;const key=`jb_typing_sprint_best_wpm_${duration}`;const best=Number(localStorage.getItem(key))||0;if(wpm>best){localStorage.setItem(key,String(wpm));window.JustBecauseLeaderboard?.refresh();window.JustBecauseSound?.play("record");window.JustBecauseSupabase?.upsertScore("typing-sprint",String(duration),window.JustBecauseProfile?.getProfile?.()?.friendCode||"local",wpm)}}
    input.addEventListener("input",()=>{render();typed=input.value.length;correct=[...input.value].filter((c,i)=>c===current[i]).length;if(input.value===current){input.value="";window.JustBecauseSound?.play("good");next()}});
    document.querySelector(".typing-duration").addEventListener("click",e=>{const b=e.target.closest("[data-duration]");if(!b)return;duration=Number(b.dataset.duration);document.querySelectorAll(".typing-duration button").forEach(x=>x.classList.toggle("is-selected",x===b))});
    document.getElementById("typing-start").addEventListener("click",()=>{setup.hidden=true;results.hidden=true;game.hidden=false;input.value="";typed=0;correct=0;started=performance.now();next();input.focus();timer=setInterval(tick,100)});
    document.getElementById("typing-replay").addEventListener("click",()=>{results.hidden=true;setup.hidden=false});
})();
