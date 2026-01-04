document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const headerLogo = document.getElementById('headerLogo');
    const footerLogo = document.getElementById('footerLogo');

    const logoPaths = {
        white: './assets/images/woxflowLogo.png',
        black: './assets/images/WoxflowLogoBlack.png'
    };

    function setLogos(theme) {
        if (!headerLogo || !footerLogo) return;

        if (theme === 'dark') {
            // Dark Mode: Header White, Footer Black
            headerLogo.src = logoPaths.white;
            footerLogo.src = logoPaths.black;
        } else {
            // Light Mode: Header Black, Footer White
            headerLogo.src = logoPaths.black;
            footerLogo.src = logoPaths.white;
        }
    }

    function updateTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (toggle) toggle.checked = true;
            setLogos('dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            if (toggle) toggle.checked = false;
            setLogos('light');
        }
    }

    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        updateTheme('dark');
    } else {
        // Ensure symbols are correct on load for light mode too
        setLogos('light');
    }

    // Add event listener to toggle switch
    if (toggle) {
        toggle.addEventListener('change', function () {
            updateTheme(this.checked ? 'dark' : 'light');
        });
    }

    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            updateTheme(e.matches ? 'dark' : 'light');
        }
    });
});
