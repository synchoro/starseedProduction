const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

/* header scroll effect */
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

/* menu toggle */
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});