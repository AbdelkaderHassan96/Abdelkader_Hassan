const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.style.getPropertyValue('--bg-color');
    if (currentTheme === '#ffffff') {
        root.style.setProperty('--bg-color', '#333');
        root.style.setProperty('--text-color', '#fff');
    } else {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000');
    }
});
