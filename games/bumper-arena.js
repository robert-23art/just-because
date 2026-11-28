(()=>{
"use strict";
const lobby=document.getElementById("bumper-lobby"),match=document.getElementById("bumper-match"),canvas=document.getElementById("bumper-canvas"),ctx=canvas.getContext("2d"),players=document.getElementById("bumper-players");
let mode="bot",round=1,score=[0,0],a={x:260,y:400,vx:0,vy:0,r:38},b={x:540,y:400,vx:0,vy:0,r:38},keys={},arena=340;
function tr(k,f){return window.JB_I18N?.t?window.JB_I18N.t(k,f):f}
function renderPlayers(info){players.replaceChildren();[info.self,info.opponent].forEach(p=>{const e=document.createElement("div");e.className="match-player";e.innerHTML=`<span class="match-avatar">${p.avatar}</span><span>${p.name}${p.role==="owner"?" 👑 "+tr("ADMIN (OWNER)","ADMIN (OWNER)"):p.role==="admin"?" "+tr("ADMIN","ADMIN"):""}</span>`;players.append(e)})}
window.addEventListener("keydown",e=>keys[e.key.toLowerCase()]=true);window.addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false);
function draw(){ctx.clearRect(0,0,800,800);arena=Math.max(210,340-round*14);ctx.fillStyle="#101b2b";ctx.beginPath();ctx.arc(400,400,arena,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#ff6b00";ctx.lineWidth=8;ctx.stroke();
if(keys.w)a.vy-=.12;if(keys.s)a.vy+=.12;if(keys.a)a.vx-=.12;if(keys.d)a.vx+=.12;
if(mode==="bot"){const dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy)||1;b.vx-=dx/d*.03;b.vy-=dy/d*.03}
for(const p of [a,b]){p.vx*=.96;p.vy*=.96;p.x+=p.vx;p.y+=p.vy;const d=Math.hypot(p.x-400,p.y-400);if(d+ p.r>arena){p.vx*=.5;p.vy*=.5;p.x=400+(p.x-400)*(arena-p.r)/d;p.y=400+(p.y-400)*(arena-p.r)/d}}
const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1;if(d<a.r+b.r){const nx=dx/d,ny=dy/d,impact=1.2;a.vx-=nx*impact;a.vy-=ny*impact;b.vx+=nx*impact;b.vy+=ny*impact}
for(const [p,color] of [[a,"#ff6b00"],[b,"#79c7e3"]]){ctx.fillStyle=color;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}
ctx.fillStyle="#f3f4f6";ctx.font="24px DM Sans";ctx.fillText(`${score[0]} : ${score[1]} · round ${round}/5`,310,55);
if(round<=5){if(Math.hypot(a.x-400,a.y-400)>arena-10){score[1]++;nextRound()}if(Math.hypot(b.x-400,b.y-400)>arena-10){score[0]++;nextRound()}}
requestAnimationFrame(draw)}
function nextRound(){if(round>=5){finish();return}round++;a={x:260,y:400,vx:0,vy:0,r:38};b={x:540,y:400,vx:0,vy:0,r:38};window.JustBecauseSound?.play("good")}
function finish(){window.JustBecauseSound?.play(score[0]>score[1]?"record":"bad");localStorage.setItem("jb_bumper_arena_score_"+mode,String(score[0]));window.JustBecauseLeaderboard?.refresh();window.JustBecauseSupabase?.upsertScore("bumper-arena",mode,"local",score[0])}
document.getElementById("bumper-turbo").addEventListener("click",()=>{a.vx*=1.8;a.vy*=1.8});
window.JustBecauseLobby.mount("bumper-arena",lobby,info=>{lobby.hidden=true;match.hidden=false;mode=info.mode==="bot"?"bot":"online";renderPlayers(info);draw()});
})();
