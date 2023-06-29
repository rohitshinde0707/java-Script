var dot = document.querySelector("#dot");
var main = document.querySelector("#main");

main.addEventListener("mousemove",function(dets){
   dot.style.left = dets.x+"px"
   dot.style.top = dets.y+"px"
})