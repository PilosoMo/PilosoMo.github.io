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