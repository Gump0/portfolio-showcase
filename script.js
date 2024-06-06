function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

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