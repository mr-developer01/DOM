var topElement = document.querySelector("#top");
var prg = document.querySelector("#progress");
var h4 = document.querySelector("h4");

var count = 0;
var int = setInterval(() => {
  if (count === 100) {
    prg.style.opacity = 0;
    h4.style.opacity = 0;
    topElement.style.transform = "translateY(-100%)";
    clearInterval(int);
  }
  count++;
  prg.style.width = count + "%";
  h4.textContent = count + "%";
}, 80);
