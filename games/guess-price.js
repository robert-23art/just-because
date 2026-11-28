(()=>{
"use strict";
const data=window.GUESS_PRICE_DATA||[];
let queue=[],index=0,score=0,answered=false;
function tr(k,f){return window.JB_I18N?.t?window.JB_I18N.t(k,f):f} function lang(){return window.JB_I18N?.language||"en"}
function shuffle(a){return a.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1])}
function render(){const item=queue[index];document.getElementById("price-round").textContent=`${tr("ROUND","ROUND")} ${index+1} / 8`;document.getElementById("price-art").textContent=item.art;document.getElementById("price-name").textContent=item.n[lang()];document.getElementById("price-hint").textContent=item.h[lang()];const range=document.getElementById("price-range");range.max=Math.max(1000,Math.ceil(item.price*2));range.value=Math.round(range.max/2);sync(range.value);answered=false;document.getElementById("price-feedback").textContent=""}
function sync(v){document.getElementById("price-range").value=v;document.getElementById("price-number").value=v}
document.getElementById("price-range").addEventListener("input",e=>sync(e.target.value));document.getElementById("price-number").addEventListener("input",e=>sync(e.target.value));
document.getElementById("price-submit").addEventListener("click",()=>{if(answered)return;answered=true;const item=queue[index],guess=Number(document.getElementById("price-number").value)||0,percentage=Math.abs(item.price-guess)/Math.max(item.price,1);const points=Math.max(0,Math.round(1000*(1-Math.min(percentage,1))));score+=points;document.getElementById("price-feedback").textContent=`${tr("The real price is","The real price is")} €${item.price.toFixed(2)} · +${points}`;window.JustBecauseSound?.play(points>=700?"record":points>=350?"good":"bad");setTimeout(()=>{index++;if(index>=8)finish();else render()},900)});
function finish(){document.getElementById("price-game").hidden=true;document.getElementById("price-results").hidden=false;document.getElementById("price-final").textContent=String(score);const key="jb_guess_price_best_all";const best=Number(localStorage.getItem(key))||0;if(score>best){localStorage.setItem(key,String(score));window.JustBecauseLeaderboard?.refresh();window.JustBecauseSupabase?.upsertScore("guess-price","all",window.JustBecauseProfile?.getProfile?.()?.friendCode||"local",score)}}
document.getElementById("price-again").addEventListener("click",()=>{document.getElementById("price-results").hidden=true;document.getElementById("price-game").hidden=false;start()});
function start(){queue=shuffle(data).slice(0,8);index=0;score=0;render()}window.addEventListener("jb:languagechange",render);start();
})();
