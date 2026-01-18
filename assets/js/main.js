document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in Local Storage
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        // Toggle the class
        body.classList.toggle('dark-theme');
        
        // Check if dark mode is now active
        let theme = 'light';
        if (body.classList.contains('dark-theme')) {
            theme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        
        // Save the choice
        localStorage.setItem('theme', theme);
    });
});

const contactForm = document.getElementById('main-contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page from refreshing
        
        // In a real app, you would send this data to a server here
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = "Sending...";
        btn.disabled = true;

        setTimeout(() => {
            alert("Message sent successfully! We'll get back to you soon.");
            btn.textContent = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
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

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

// Call the function when the page loads
window.onload = loadFooter;


function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
}

// Call the function when the page loads
window.onload = loadNav;