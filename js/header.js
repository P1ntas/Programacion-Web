const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function() {
    if (navMenu.classList.contains('active')) {

        navMenu.classList.remove('active');
        

        setTimeout(() => {
            navMenu.style.display = 'none';
        }, 300); 
    } else {
        navMenu.style.display = 'flex';
        
        setTimeout(() => {
            navMenu.classList.add('active');
        }, 10);
    }
});
