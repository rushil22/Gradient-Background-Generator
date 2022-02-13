var css=document.querySelector("h3");
var first=document.querySelector(".first");
var second=document.querySelector(".second");
var body=document.getElementById("gradient");

function setGradient() {
  body.style.background="linear-gradient(to right,"+first.value+","+second.value+")";
  css.textContent=body.style.background + ";";
}
first.addEventListener("input",setGradient);
second.addEventListener("input",setGradient);