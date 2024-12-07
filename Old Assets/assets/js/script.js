document.addEventListener('DOMContentLoaded', function() {
    // Highlight the active page in navigation
    const navLinks = document.querySelectorAll('nav a');
    const currentLocation = location.href;

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});
