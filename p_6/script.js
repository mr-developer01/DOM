var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var homeText = document.querySelector("#homeText");
var aboutText = document.querySelector("#aboutText");
var contactText = document.querySelector("#contactText");

homeText.style.display = "block";

home.addEventListener("click", function () {
  saareTextHatao();
  homeText.style.display = "block";
});

about.addEventListener("click", function () {
  saareTextHatao();
  aboutText.style.display = "block";
});

contact.addEventListener("click", function () {
  saareTextHatao();
  contactText.style.display = "block";
});

function saareTextHatao() {
  document.querySelectorAll("h4").forEach(function (h3) {
    h3.style.display = "none";
  });
}


// Ask chatGPT to efficiently optimise this code:--
/*
// Select all tabs and corresponding content elements
var tabs = document.querySelectorAll(".tab");
var tabContents = document.querySelectorAll("h4");

// Show the content for the first tab by default
tabContents[0].style.display = "block";

// Add event listeners to each tab
tabs.forEach(function(tab, index) {
  tab.addEventListener("click", function() {
    // Hide all content elements
    tabContents.forEach(function(content) {
      content.style.display = "none";
    });

    // Show the content corresponding to the clicked tab
    tabContents[index].style.display = "block";
  });
});
*/