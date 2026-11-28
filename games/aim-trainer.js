(() => {
    "use strict";
    const setup=document.getElementById("aim-setup"),game=document.getElementById("aim-game"),results=document.getElementById("aim-results"),board=document.getElementById("aim-board");
    let mode="easy",hits=0,attempts=0,remaining=30000,timer=null,startAt=0,targetTimer=null;
    function tr(key,fallback){return window.JB_I18N?.t?window.JB_I18N.t(key,fallback):fallback}
    function bestKey(){return `jb_aim_trainer_best_${mode}`}
    function spawn(){
        board.replaceChildren();
        const target=document.createElement("button");target.type="button";target.className=`aim-target ${mode==="medium"? "medium":mode==="hard"?"hard":""}`;
        const maxX=Math.max(0,board.clientWidth-70),maxY=Math.max(0,board.clientHeight-70);
        target.style.left=`${Math.random()*maxX}px`;target.style.top=`${Math.random()*maxY}px`;
        if(mode==="medium"){let dx=(Math.random()-.5)*3,dy=(Math.random()-.5)*3;targetTimer=setInterval(()=>{const x=parseFloat(target.style.left)+dx,y=parseFloat(target.style.top)+dy;if(x<0||x>maxX)dx=-dx;if(y<0||y>maxY)dy=-dy;target.style.left=`${Math.max(0,Math.min(maxX,x))}px`;target.style.top=`${Math.max(0,Math.min(maxY,y))}px`;},16)}
        target.addEventListener("click",e=>{e.stopPropagation();hits++;attempts++;window.JustBecauseSound?.play("good");spawn();});
        board.append(target);
    }
    board.addEventListener("click",()=>{if(mode==="hard"){hits=Math.max(0,hits-1)}attempts++;});
    function tick(){
        remaining=30000-(performance.now()-startAt);
        document.getElementById("aim-time").textContent=Math.max(0,remaining/1000).toFixed(1);
        document.getElementById("aim-hits").textContent=hits;
        document.getElementById("aim-accuracy").textContent=`${attempts?Math.round(hits/attempts*100):100}%`;
        if(remaining<=0)finish();
    }
    function finish(){
        clearInterval(timer);clearInterval(targetTimer);board.replaceChildren();
        game.hidden=true;results.hidden=false;
        document.getElementById("aim-final-score").textContent=hits;
        const previous=Number(localStorage.getItem(bestKey()))||0;
        if(hits>previous){localStorage.setItem(bestKey(),String(hits));window.JustBecauseLeaderboard?.refresh();window.JustBecauseSound?.play("record");window.JustBecauseSupabase?.upsertScore("aim-trainer",mode,window.JustBecauseProfile?.getProfile?.()?.friendCode||"local",hits)}
    }
    document.getElementById("aim-difficulties").addEventListener("click",e=>{const b=e.target.closest("[data-mode]");if(!b)return;mode=b.dataset.mode;document.querySelectorAll(".aim-difficulty").forEach(x=>x.classList.toggle("is-selected",x===b))});
    function start(){setup.hidden=true;game.hidden=false;results.hidden=true;hits=0;attempts=0;remaining=30000;startAt=performance.now();spawn();timer=setInterval(tick,50)}
    document.getElementById("aim-start").addEventListener("click",start);document.getElementById("aim-replay").addEventListener("click",start);document.getElementById("aim-back").addEventListener("click",()=>{results.hidden=true;setup.hidden=false});
    window.addEventListener("jb:languagechange", () => {
        document.querySelectorAll(".aim-difficulty").forEach(button => {
            button.textContent = tr(button.dataset.mode, button.dataset.mode);
        });
    });
})();
