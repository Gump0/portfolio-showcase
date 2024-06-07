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

// const colors = ['#000012', '#4967fc', '#7a00ff', '#521344', '#002bff', '#29295c', '#5e8db2', '#df60e5', '#000012'];
// const selfportrait = document.querySelector('.selfportrait');

// function changeBorderColor() {
//    selfportrait.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
// }

// setInterval(changeBorderColor, 5000); // Change color every 5 seconds
