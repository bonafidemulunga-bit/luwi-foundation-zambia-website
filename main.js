// main.js - LUWI FOUNDATION Zambia

// ------------------------
// 1️⃣ Smooth scrolling for navigation links
// ------------------------
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ------------------------
// 2️⃣ Scroll reveal animations
// ------------------------
const srElements = document.querySelectorAll('.hero-content, .program-card, .team-member, .impact-card');

srElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s ease-out';
});

const srObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

srElements.forEach(el => srObserver.observe(el));
