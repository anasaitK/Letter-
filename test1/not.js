


/* =================================================================== */
/* test.js */
const textLines = [
"You have been on my mind in every quiet moment the way your laughter fills a room, the way your hand fits in mine.",
"I’m really sorry for everything. I know I’ve made a lot of mistakes and I haven’t always been the person I should be. I admit that I was wrong",
"I am not perfect. I said things that sting, and for that small, painful mistake I am truly sorry.",
"You are a great and beautiful woman, and I honestly have feelings for you. There are so many things I like about you.",
"But at the same time, I feel like I don’t deserve anything. I know I’ve made mistakes, and sometimes I feel like I’m not good enough for you."
];


const typedEl = document.getElementById('typed');
const revealBtn = document.getElementById('revealBtn');


function typeParagraph(text, parent, callback){
const p = document.createElement('p');
parent.appendChild(p);
let i = 0;
const interval = setInterval(()=>{
p.textContent += text.charAt(i);
i++;
if(i >= text.length){
clearInterval(interval);
p.style.marginBottom = '20px';
setTimeout(callback, 600);
}
}, 25);
}


function startTyping(){
typedEl.innerHTML = '';
let idx = 0;
function next(){
if(idx >= textLines.length) return;
typeParagraph(textLines[idx], typedEl, ()=>{
idx++;
next();
});
}
next();
}


revealBtn.addEventListener('click', startTyping);
window.addEventListener('load', startTyping);