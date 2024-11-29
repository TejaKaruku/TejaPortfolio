// Select the menu icon, navbar, sections, and nav links
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll event to highlight the active section link
window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position
    
    // Loop through each section to check its visibility on scroll
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Section offset position
        let height = sec.offsetHeight; // Section height
        let id = sec.getAttribute('id'); // Section ID
        
        // Check if the current scroll position is within the section's bounds
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links and add to the matching link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Toggle menu icon and navbar active state on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change the menu icon to close icon
    navbar.classList.toggle('active'); // Show or hide the navbar
};

// Close the navbar when a link is clicked in mobile view
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active'); // Hide the navbar
            menuIcon.classList.remove('bx-x'); // Reset the menu icon
        }
    });
});
