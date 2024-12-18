///////////////////////////
// Content Button Logic //
/////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.content-button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'active' class from all content divs
            contents.forEach(content => content.classList.remove('active'));

            // Get the id of the content to display
            const contentId = button.getAttribute('data-content');

            // Add the 'active' class to the content div with the corresponding id
            document.getElementById(contentId).classList.add('active');
        });
    });
});

const colors = ['#4967fc', '#7a00ff', '#521344', '#002bff', '#29295c'];

const selfportrait = document.querySelector('.selfportrait');
var tileList = document.querySelectorAll('.tile'); // Collect every instance of ".tile"

function changeBorderColor() {
    tileList.forEach(tile => {
        tile.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
    });

   selfportrait.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
}
setInterval(changeBorderColor, 10); // Change color every 10 seconds

///////////////////////////
// CURSOR RELATED LOGIC //
/////////////////////////
const cursorColors = [
    '#2A1AD8',
    '#2A1AD8',
    '#4E26E2', 
    '#4E26E2', 
    '#7231EC', 
    '#7231EC', 
    '#953DF5', 
    '#953DF5', 
    '#B948FF',
    '#B948FF'
];

const coords = { x: 0, y: 0 };
const cursorCircles = document.querySelectorAll(".cursorcircle");

cursorCircles.forEach(function (circle, index) {
  circle.x = 0;  // These should set properties on individual circles, not the entire NodeList
  circle.y = 0;
  // Fixed color reference to cursorColors
  circle.style.backgroundColor = cursorColors[index % cursorColors.length];
});

window.addEventListener("mousemove", function(e) {
  coords.x = e.pageX;
  coords.y = e.pageY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursorCircles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.scale = (cursorCircles.length - index) / cursorCircles.length;
    circle.x = x;
    circle.y = y;

    const nextCircle = cursorCircles[index + 1] || cursorCircles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

//////////////////////////////////
// Technical Skills Text Logic //
////////////////////////////////
var languageText = document.getElementById("techskillstitle"); //language text
var originalText = languageText.innerHTML; //og language text
var images = document.getElementsByClassName("icon"); //icon references

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function() {
      // Change the text to the alt tag of the hovered image
      languageText.innerHTML = `<h1><b>${this.alt}</b></h1>`;
  });

  images[i].addEventListener("mouseout", function() {
      // Revert back to the original text when the mouse leaves the image
      languageText.innerHTML = originalText;
  });
}