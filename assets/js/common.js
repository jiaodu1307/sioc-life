document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button Logic
    const backToTopBtn = document.getElementById("backToTopBtn");
    
    if (backToTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopBtn.style.display = "flex"; // Changed to flex for centering content
                setTimeout(() => { backToTopBtn.style.opacity = "1"; }, 10);
            } else {
                backToTopBtn.style.opacity = "0";
                setTimeout(() => { if(backToTopBtn.style.opacity === "0") backToTopBtn.style.display = "none"; }, 300);
            }
        };

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // Intersection Observer for Fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-card, .food-section, .fade-in-up, .fade-element');
    animatedElements.forEach(el => {
        if (!el.classList.contains('fade-element')) {
             el.classList.add('fade-element');
        }
        observer.observe(el);
    });
});
