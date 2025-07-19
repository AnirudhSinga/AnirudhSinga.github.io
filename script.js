// Loader screen logic
document.addEventListener('DOMContentLoaded', function() {
    const progressElement = document.getElementById('progress');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 1;
        if (progress > 100) progress = 100;
        progressElement.textContent = progress;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 500);
        }
    }, 200);
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
