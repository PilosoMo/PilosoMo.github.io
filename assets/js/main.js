function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggle) return; // Safety check

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        let theme = 'light';
        if (body.classList.contains('dark-theme')) {
            theme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });
}

// --- Scroll-to-Hide Logic ---
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // If the current scroll is greater than the last, the user is scrolling down
    if (lastScrollY < window.scrollY) {
        nav.classList.add('nav-hidden');
    } else {
        // If the current scroll is less, the user is scrolling up
        nav.classList.remove('nav-hidden');
    }
    
    // Update the last scroll position
    lastScrollY = window.scrollY;
});

// Single function to load all shared components
function loadComponents() {
    // 1. Load Navigation
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            // IMPORTANT: Initialize theme toggle ONLY after nav is in the DOM
            initThemeToggle();
        })
        .catch(err => console.error("Error loading navigation:", err));

    // 2. Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error("Error loading footer:", err));
}

// Use one single onload event to trigger the process
window.onload = loadComponents;