(()=>{
"use strict";
const lobby=document.getElementById("hockey-lobby"),match=document.getElementById("hockey-match"),canvas=document.getElementById("hockey-canvas"),ctx=canvas.getContext("2d"),playersEl=document.getElementById("hockey-players");
let mode="bot",puck={x:400,y:250,vx:5,vy:3,r:12},self={x:400,y:430,r:42},opponent={x:400,y:70,r:42},score=[0,0],powerAt=8000,power=null;
function tr(k,f){return window.JB_I18N?.t?window.JB_I18N.t(k,f):f}
function renderPlayers(info){playersEl.replaceChildren();[info.self,info.opponent].forEach(p=>{const e=document.createElement("div");e.className="match-player";e.innerHTML=`<span class="match-avatar">${p.avatar}</span><span>${p.name}${p.role==="owner"?" 👑 "+tr("ADMIN (OWNER)","ADMIN (OWNER)"):p.role==="admin"?" "+tr("ADMIN","ADMIN"):""}</span>`;playersEl.append(e)})}
function move(e){const r=canvas.getBoundingClientRect(),x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;y=(e.touches?e.touches[0].clientY:e.clientY)-r.top;const sx=canvas.width/r.width,sy=canvas.height/r.height;self.x=Math.max(self.r,Math.min(canvas.width-self.r,x*sx));self.y=Math.max(canvas.height/2,Math.min(canvas.height-self.r,y*sy))}
canvas.addEventListener("mousemove",move);canvas.addEventListener("touchmove",e=>{e.preventDefault();move(e)},{passive:false});
function loop(now=0){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle="#17263a";ctx.fillRect(0,0,800,500);ctx.strokeStyle="#344861";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,250);ctx.lineTo(800,250);ctx.stroke();if(mode==="bot")opponent.x+=(puck.x-opponent.x)*.06;
puck.x+=puck.vx;puck.y+=puck.vy;if(puck.x<puck.r||puck.x>800-puck.r)puck.vx=-puck.vx;if(puck.y<puck.r||puck.y>500-puck.r)puck.vy=-puck.vy;
for(const p of [self,opponent]){const dx=puck.x-p.x,dy=puck.y-p.y,d=Math.hypot(dx,dy);if(d<p.r+puck.r){const nx=dx/d,ny=dy/d;puck.vx=nx*8;puck.vy=ny*8}}
if(puck.y>500-puck.r){score[1]++;resetPuck()}if(puck.y<puck.r){score[0]++;resetPuck()}if(now>powerAt&&!power){power={x:200+Math.random()*400,y:150+Math.random()*200,r:18};powerAt=now+8000}if(power){ctx.fillStyle="#ff6b00";ctx.beginPath();ctx.arc(power.x,power.y,power.r,0,Math.PI*2);ctx.fill();const d=Math.hypot(puck.x-power.x,puck.y-power.y);if(d<puck.r+power.r){puck.vx*=1.35;puck.vy*=1.35;power=null}}
ctx.fillStyle="#f3c969";ctx.beginPath();ctx.arc(puck.x,puck.y,puck.r,0,Math.PI*2);ctx.fill();for(const p of [self,opponent]){ctx.fillStyle=p===self?"#ff6b00":"#79c7e3";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}ctx.fillStyle="#fff";ctx.font="30px DM Sans";ctx.fillText(`${score[0]} : ${score[1]}`,370,38);
if(score[0]>=7||score[1]>=7){const won=score[0]>=7;ctx.fillText(won?"Winner!":"Game over",350,280);window.JustBecauseSound?.play(won?"record":"bad");localStorage.setItem("jb_neon_air_hockey_score_"+mode,String(score[0]));window.JustBecauseSupabase?.upsertScore("neon-air-hockey",mode,"local",score[0]);return}requestAnimationFrame(loop)}
function resetPuck(){puck={x:400,y:250,vx:(Math.random()<.5?-5:5),vy:3,r:12};window.JustBecauseSound?.play("good")}
window.JustBecauseLobby.mount("neon-air-hockey",lobby,info=>{lobby.hidden=true;match.hidden=false;mode=info.mode==="bot"?"bot":"online";renderPlayers(info);resetPuck();requestAnimationFrame(loop)});
})();
