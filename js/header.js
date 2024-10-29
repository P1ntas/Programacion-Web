const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function() {
    if (navMenu.classList.contains('active')) {
        // Start closing transition by removing active class
        navMenu.classList.remove('active');
        
        // Wait for transition to complete before hiding the menu
        setTimeout(() => {
            navMenu.style.display = 'none';
        }, 300); // Match with CSS transition duration
    } else {
        // Show the menu with display: flex, then trigger the opening transition
        navMenu.style.display = 'flex';
        
        // Allow a slight delay before adding 'active' to trigger the transition
        setTimeout(() => {
            navMenu.classList.add('active');
        }, 10);
    }
});
