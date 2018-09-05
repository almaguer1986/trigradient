let css = document.querySelector('h3');
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let degree = document.querySelector(".degree");
let body = document.getElementById("gradient");
let deg = document.getElementById("deg");
let random = document.getElementById("random");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let hideText = document.getElementById("hideText");
let toHide = document.getElementById("toHide");
let unhide = document.getElementById("unhide");
let counter;

function randomize() {
  degree.value = Math.floor(Math.random() * 359) + 1;
  color1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  color2.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  color3.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  setGradient();
}

function setGradient() {
  body.style.background =
  "linear-gradient("
  + degree.value
  + "deg, "
  + color1.value
  + ", "
  + color2.value
  + ", "
  + color3.value
  + ")";

  css.textContent = body.style.background + ";";
  deg.textContent = degree.value;
}

function increment() {
  degree.value = degree.value % 360 + 10;
  setGradient();
    if(degree.value >= 359) {

      randomize();
      degree.value = 0;
      increment();
  }
}

function starter() {
  counter = setInterval(increment, 500);
  start.style.visibility = "hidden";
}

function stopper() {
  clearInterval(counter);
  start.style.visibility = "visible";
}

hideText.addEventListener("click", function() {
  toHide.style.visibility = "hidden";
});

unhide.addEventListener("click", function() {
  toHide.style.visibility = "visible";
});

start.addEventListener("click", starter);

stop.addEventListener("click", stopper);

random.addEventListener("click", randomize);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

degree.addEventListener("input", setGradient);

window.onload = setGradient;
