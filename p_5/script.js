// Understand this first :---
// setInterval(function, milliseconds);

var h4 = document.querySelector("h4");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var reset = document.querySelector("#reset");

var count = 0;
var interval;

start.addEventListener("click", function () {
  interval = setInterval(() => {
    h4.innerText = count;
    count++;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  count = 0;
  clearInterval(interval)
  h4.innerText = 0;
});
