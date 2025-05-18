document.addEventListener('DOMContentLoaded', () => {
    // Animate fade-up elements on scroll
    const fadeUps = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeUps.forEach(el => observer.observe(el));

    // Animate fade-in elements on load
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'none';
        }, 300 + i * 300);
    });

    // Contact form feedback (demo only)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            form.reset();
            form.querySelector('button').textContent = "Sent!";
            setTimeout(() => {
                form.querySelector('button').textContent = "Send Message";
            }, 2000);
        });
    }
});