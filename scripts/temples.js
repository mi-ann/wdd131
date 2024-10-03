document.addEventListener('DOMContentLoaded', () => {
    // Set the current year and last modified date
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('last-modified');
    
    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        hamburger.innerHTML = hamburger.innerHTML === '✖' ? '&#9776;' : '✖'; // Toggle hamburger icon
    });
});
