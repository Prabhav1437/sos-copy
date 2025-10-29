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

// Animated custom cursor (dot + trailing ring)
(() => {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  const bodyEl = document.body;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';

  bodyEl.appendChild(dot);
  bodyEl.appendChild(ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let ringScale = 1;
  let targetScale = 1;

  const lerp = (start, end, amt) => start + (end - start) * amt;

  const update = () => {
    ringX = lerp(ringX, mouseX, 0.15);
    ringY = lerp(ringY, mouseY, 0.15);
    ringScale = lerp(ringScale, targetScale, 0.2);

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) scale(${ringScale})`;

    requestAnimationFrame(update);
  };

  const setHover = (hovering) => {
    targetScale = hovering ? 1.4 : 1;
    ring.style.borderColor = hovering ? getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00E5FF' : getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#FF0055';
  };

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('mousedown', () => {
    targetScale = 0.8;
  });
  window.addEventListener('mouseup', () => {
    targetScale = 1;
  });

  // Highlight on interactive elements
  const interactiveSelector = 'a, button, [role="button"], .btn-primary, .btn-secondary, .nav-links a, .hamburger';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) setHover(true);
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) setHover(false);
  });

  // Keep cursor within viewport smoothly across theme toggles/resizes
  window.addEventListener('resize', () => {
    mouseX = Math.min(Math.max(mouseX, 0), window.innerWidth);
    mouseY = Math.min(Math.max(mouseY, 0), window.innerHeight);
  });

  update();
})();

// Footer interactions: newsletter submit + back-to-top visibility
(() => {
  // Newsletter submit (front-end only)
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const message = document.getElementById('newsletterMessage');

  if (form && emailInput && message) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = (emailInput.value || '').trim();
      const emailOk = /.+@.+\..+/.test(email);
      if (!emailOk) {
        message.textContent = 'Please enter a valid email.';
        message.style.color = 'var(--primary)';
        emailInput.focus();
        return;
      }
      message.textContent = 'Subscribed! Check your inbox shortly.';
      message.style.color = 'var(--accent)';
      form.reset();
      // subtle confetti-like pulse on subscribe button
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.style.transform = 'translateY(-2px) scale(1.02)';
        setTimeout(() => (btn.style.transform = ''), 180);
      }
    });
  }

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const toggleBtn = () => {
      const show = window.scrollY > 400;
      backToTop.classList.toggle('visible', show);
    };
    toggleBtn();
    window.addEventListener('scroll', toggleBtn, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

// Feature cards: scroll-reveal + 3D tilt
(() => {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const features = Array.from(document.querySelectorAll('.feature'));
  if (!features.length) return;

  // Add staggered transition delay so reveals cascade
  features.forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });

  // Scroll-reveal with IntersectionObserver
  let io;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    features.forEach((card) => io.observe(card));
  } else {
    // Fallback: reveal immediately
    features.forEach((card) => card.classList.add('in-view'));
  }

  // Extra safety: manual check on load/scroll/resize to mark in-view
  const manualRevealCheck = () => {
    features.forEach((card) => {
      if (!card.classList.contains('in-view')) {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          card.classList.add('in-view');
        }
      }
    });
  };
  window.addEventListener('load', manualRevealCheck);
  window.addEventListener('scroll', manualRevealCheck, { passive: true });
  window.addEventListener('resize', manualRevealCheck);

  if (!isFinePointer) return;

  // Tilt per card
  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const maxTilt = 10; // degrees

  features.forEach((card) => {
    let raf = 0;
    let rx = 0, ry = 0;

    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;

      const ryTarget = clamp(((x / rect.width) - 0.5) * (maxTilt * 2), -maxTilt, maxTilt); // left/right
      const rxTarget = clamp(-((y / rect.height) - 0.5) * (maxTilt * 2), -maxTilt, maxTilt); // up/down

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        rx = rx + (rxTarget - rx) * 0.2;
        ry = ry + (ryTarget - ry) * 0.2;
        card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
        card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
        card.style.setProperty('--px', px + '%');
        card.style.setProperty('--py', py + '%');
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      const relax = () => {
        rx *= 0.8;
        ry *= 0.8;
        card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
        card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
        if (Math.abs(rx) > 0.1 || Math.abs(ry) > 0.1) requestAnimationFrame(relax);
      };
      requestAnimationFrame(relax);
    };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    card.addEventListener('mouseenter', onMove);
  });
})();

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