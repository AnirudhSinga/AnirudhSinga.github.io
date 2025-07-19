// Loader screen logic
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main-content').style.display = '';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});

// IntersectionObserver for fade-in sections
const faders = document.querySelectorAll('.fade-section');
const appearOptions = {
    threshold: 0.18
};
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(section => {
    appearOnScroll.observe(section);
});
