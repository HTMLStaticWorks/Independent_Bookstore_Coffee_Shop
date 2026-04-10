// Theme Toggle Logic
function toggleTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Mobile Menu Logic (Hamburger from Left)
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    
    if (menu.classList.contains('-translate-x-full')) {
        menu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        menu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

// Active Nav Link Highlighter
function highlightActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-orange-600', 'dark:text-orange-400', 'font-semibold');
            // Remove both desktop and mobile default text color classes
            link.classList.remove('text-gray-600', 'dark:text-gray-300', 'text-gray-700', 'dark:text-gray-200');
        }
    });
}

// RTL Toggle Logic
function toggleRTL() {
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    if (isRTL) {
        html.removeAttribute('dir');
        localStorage.rtl = 'ltr';
    } else {
        html.setAttribute('dir', 'rtl');
        localStorage.rtl = 'rtl';
    }
    // Update all RTL button icons on the page
    document.querySelectorAll('.rtl-icon-ltr, .rtl-icon-rtl').forEach(el => {
        el.classList.toggle('hidden');
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme based on localStorage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Set initial RTL state based on localStorage
    if (localStorage.rtl === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.querySelectorAll('.rtl-icon-ltr').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.rtl-icon-rtl').forEach(el => el.classList.remove('hidden'));
    }

    highlightActiveNav();
});
