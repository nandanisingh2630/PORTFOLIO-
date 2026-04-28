document.addEventListener("mousemove", function(e){

let heart = document.createElement("div");

heart.innerHTML = "💗";
heart.style.position = "fixed";
heart.style.left = e.clientX + "px";
heart.style.top = e.clientY + "px";
heart.style.fontSize = "12px";
heart.style.pointerEvents = "none";
heart.style.transition = "1s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.top = (e.clientY - 50) + "px";
heart.style.opacity = 0;
},10);

setTimeout(()=>{
heart.remove();
},1000);

});
const text = `Welcome to the Portfolio 💖
Myself NANDANI SINGH
Aspiring Data Analyst`;

let i = 0;

function typing(){
const el = document.querySelector(".typing");
if(!el) return;

if(i < text.length){
el.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
i++;
setTimeout(typing,50);
}
}

window.addEventListener("load", typing);