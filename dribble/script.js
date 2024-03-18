// var colors = ["#e9edc9", "#ffafcc", "#ced4da"];
// var col = document.querySelector("#color-p");

// function changeColorWithDelay(color, delay) {
//     setTimeout(function() {
//       col.style.backgroundColor = color;
//     }, delay);
//   }

// colors.forEach((colors, index) => {
//   console.log(colors);
//   var delay = index * 2000;
//   changeColorWithDelay(colors, delay)
// });


var colors = ["#e9edc9", "#ffafcc", "#ced4da", "#a3b18a", "#a2d2ff", "#e3d5ca", "#a4c3b2"];
var col = document.querySelector("#color-p");
var currentIndex = 0;

// Define a function to change the background color
function changeColor() {
  col.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

// Call the changeColor function initially
changeColor();

// Set interval to call changeColor function repeatedly
var intervalId = setInterval(changeColor, 3000);
