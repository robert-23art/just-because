(()=>{
"use strict";
const lobbyRoot=document.getElementById("connect-lobby"),match=document.getElementById("connect-match"),boardEl=document.getElementById("connect-board"),status=document.getElementById("connect-status"),playersEl=document.getElementById("connect-players"),rematch=document.getElementById("connect-rematch");
let board=Array.from({length:6},()=>Array(7).fill(null)),turn="red",ended=false,timer=null,seconds=15,mode="bot";
function tr(k,f){return window.JB_I18N?.t?window.JB_I18N.t(k,f):f}
function renderPlayers(matchInfo){playersEl.replaceChildren();for(const [key,p] of [["self",matchInfo.self],["opponent",matchInfo.opponent]]){const el=document.createElement("div");el.className="match-player";el.innerHTML=`<span class="match-avatar">${p.avatar}</span><span>${p.name}${p.role==="owner"?" 👑 "+tr("ADMIN (OWNER)","ADMIN (OWNER)"):p.role==="admin"?" "+tr("ADMIN","ADMIN"):""}</span>`;playersEl.append(el)}}
function render(){boardEl.replaceChildren();for(let r=0;r<6;r++)for(let c=0;c<7;c++){const cell=document.createElement("button");cell.type="button";cell.className="connect-cell"+(board[r][c]?` ${board[r][c]}`:"");cell.dataset.col=c;boardEl.append(cell)}}
function check(){for(let r=0;r<6;r++)for(let c=0;c<7;c++){const v=board[r][c];if(!v)continue;for(const [dr,dc] of [[0,1],[1,0],[1,1],[1,-1]]){let ok=true;for(let k=1;k<4;k++){const rr=r+dr*k,cc=c+dc*k;if(rr<0||rr>=6||cc<0||cc>=7||board[rr][cc]!==v){ok=false;break}}if(ok)return v}}return null}
function drop(c){if(ended||turn==="yellow"&&mode==="bot")return false;for(let r=5;r>=0;r--)if(!board[r][c]){board[r][c]=turn;render();const win=check();if(win){finish(win);return true}turn=turn==="red"?"yellow":"red";resetTimer();if(mode==="bot"&&turn==="yellow")setTimeout(botDrop,500);return true}return false}
function botDrop(){if(ended)return;let options=[];for(let c=0;c<7;c++)if(board[0][c]==null)options.push(c);const c=options[Math.floor(Math.random()*options.length)]||0;drop(c)}
function resetTimer(){clearInterval(timer);seconds=15;timer=setInterval(()=>{seconds--;status.textContent=`${turn==="red"?tr("Your turn","Your turn"):tr("Opponent turn","Opponent turn")} · ${seconds}s`;if(seconds<=0){turn=turn==="red"?"yellow":"red";resetTimer()}},1000)}
function finish(win){ended=true;clearInterval(timer);status.textContent=tr(win==="red"?"You win!":"Opponent wins!");rematch.hidden=false;window.JustBecauseSound?.play(win==="red"?"record":"bad");const score=win==="red"?1:0;localStorage.setItem("jb_connect_4_score_"+(mode||"online"),String(score));window.JustBecauseLeaderboard?.refresh();window.JustBecauseSupabase?.upsertScore("connect-4",mode,"local",score)}
boardEl.addEventListener("click",e=>{const c=e.target.closest("[data-col]");if(c)drop(Number(c.dataset.col))});
rematch.addEventListener("click",()=>{board=Array.from({length:6},()=>Array(7).fill(null));turn="red";ended=false;rematch.hidden=true;render();resetTimer();});
document.getElementById("connect-back").addEventListener("click",()=>{clearInterval(timer);match.hidden=true;lobbyRoot.hidden=false});
window.JustBecauseLobby.mount("connect-4",lobbyRoot,matchInfo=>{lobbyRoot.hidden=true;match.hidden=false;mode=matchInfo.mode==="bot"?"bot":"online";renderPlayers(matchInfo);board=Array.from({length:6},()=>Array(7).fill(null));turn="red";ended=false;render();resetTimer()});
})();
