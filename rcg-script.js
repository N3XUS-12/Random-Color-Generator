
var num;

function color(){
  num = Math.floor(Math.random()*10000000);
  c = num.toString(16);
  document.querySelector("body").style.backgroundColor = "#" + c;
  document.getElementById("p").innerHTML = "#" + c;
}