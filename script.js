///////////////////////////
// Content Button Logic //
/////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".content-button");
  const contents = document.querySelectorAll(".content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'active' class from all content divs
      contents.forEach((content) => content.classList.remove("active"));

      // Get the id of the content to display
      const contentId = button.getAttribute("data-content");

      // Add the 'active' class to the content div with the corresponding id
      document.getElementById(contentId).classList.add("active");
    });
  });
});

const colors = ["#4967fc", "#7a00ff", "#521344", "#002bff", "#29295c"];

const selfportrait = document.querySelector(".selfportrait");
var tileList = document.querySelectorAll(".tile"); // Collect every instance of ".tile"

function changeBorderColor() {
  tileList.forEach((tile) => {
    tile.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
  });

  selfportrait.style.borderColor =
    colors[Math.floor(Math.random() * colors.length)];
}
setInterval(changeBorderColor, 10); // Change color every 10 seconds

//////////////////////////////////
// Technical Skills Text Logic //
////////////////////////////////
var languageText = document.getElementById("techskillstitle"); //language text
var originalText = languageText.innerHTML; //og language text
var images = document.getElementsByClassName("icon"); //icon references

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    // Change the text to the alt tag of the hovered image
    languageText.innerHTML = `<h1><b>${this.alt}</b></h1>`;
  });

  images[i].addEventListener("mouseout", function () {
    // Revert back to the original text when the mouse leaves the image
    languageText.innerHTML = originalText;
  });
}
