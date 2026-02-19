// ============================
// Elements
// ============================
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const navClose = document.getElementById('navClose');

// breakpoint (match CSS)
const MQ = window.matchMedia('(max-width: 900px)');

// ============================
// Header scroll effect
// ============================
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================
// Menu open/close helpers
// ============================
function openMenu() {
    // only mobile
    if (!MQ.matches) return;

    nav.classList.add('active');
    nav.setAttribute('aria-hidden', 'false');

    // ✅ hide hamburger when menu is open
    menuBtn.classList.add('is-hidden');
    menuBtn.setAttribute('aria-expanded', 'true');

    // lock scroll
    document.body.classList.add('menu-open');
}

function closeMenu() {
    nav.classList.remove('active');
    nav.setAttribute('aria-hidden', 'true');

    // ✅ show hamburger back
    menuBtn.classList.remove('is-hidden');
    menuBtn.setAttribute('aria-expanded', 'false');

    // unlock scroll
    document.body.classList.remove('menu-open');
}

function toggleMenu() {
    nav.classList.contains('active') ? closeMenu() : openMenu();
}

// ============================
// Events
// ============================

// Hamburger toggle
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close button (X / CLOSE)
if (navClose) {
    navClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
    });
}

// Click menu link -> close
nav.addEventListener('click', (e) => {
    // click link
    if (e.target.tagName === 'A') {
        closeMenu();
        return;
    }

    // click background overlay (not nav-panel)
    if (e.target === nav) {
        closeMenu();
    }
});

// Click outside -> close
document.addEventListener('click', (e) => {
    if (!nav.classList.contains('active')) return;
    if (nav.contains(e.target) || menuBtn.contains(e.target)) return;
    closeMenu();
});

// ESC -> close
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

// When switching back to desktop, reset
MQ.addEventListener('change', () => {
    if (!MQ.matches) closeMenu();
});

// ============================
// a11y attributes init
// ============================
menuBtn.setAttribute('aria-controls', 'nav');
menuBtn.setAttribute('aria-expanded', 'false');
nav.setAttribute('aria-hidden', 'true');