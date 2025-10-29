const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
    const isDark = !body.hasAttribute('data-theme') || body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('.html')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ---------- Frontend-only form handling for login & signup (no backend) ---------- */
function showMessage(el, text, type = 'info'){
    if(!el) return;
    el.textContent = text;
    el.classList.remove('alert-success','alert-error');
    if(type === 'success') el.classList.add('alert-success');
    if(type === 'error') el.classList.add('alert-error');
}

// Login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const loginMessage = document.getElementById('loginMessage');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.querySelector('[name="email"]').value.trim();
        const password = form.querySelector('[name="password"]').value;

        if (!email || !password) {
            showMessage(loginMessage, 'Please enter both email and password.', 'error');
            return;
        }

        // Simple email format check
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
            showMessage(loginMessage, 'Please enter a valid email address.', 'error');
            return;
        }

        // Simulate success (frontend-only)
        showMessage(loginMessage, 'Signed in (frontend-only). This is a demo response.', 'success');
        // Optionally clear password field
        form.querySelector('[name="password"]').value = '';
    });
}

// Signup form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    const signupMessage = document.getElementById('signupMessage');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const password = form.querySelector('[name="password"]').value;
        const confirm = form.querySelector('[name="confirmPassword"]').value;

        if (!name || !email || !password || !confirm) {
            showMessage(signupMessage, 'Please complete all fields.', 'error');
            return;
        }

        if (password.length < 8) {
            showMessage(signupMessage, 'Password must be at least 8 characters long.', 'error');
            return;
        }

        if (password !== confirm) {
            showMessage(signupMessage, 'Passwords do not match.', 'error');
            return;
        }

        // Basic email validation
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
            showMessage(signupMessage, 'Please enter a valid email address.', 'error');
            return;
        }

        // Simulate signup success (frontend-only)
        showMessage(signupMessage, 'Account created (frontend-only). You can now sign in.', 'success');
        // Optionally clear password fields
        form.querySelector('[name="password"]').value = '';
        form.querySelector('[name="confirmPassword"]').value = '';
    });
}