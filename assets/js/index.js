// 返回顶部按钮功能
var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// 页面滚动时元素优雅进入视线的动画 (Intersection Observer API)
const cards = document.querySelectorAll('.section-card');
const observerOptions = {
    root: null, // 默认视口
    rootMargin: '0px',
    threshold: 0.1 // 10% 可见时触发
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            // 可选: 动画执行一次后取消观察，避免重复触发
            // observer.unobserve(entry.target);
        } else {
            // 可选: 如果希望元素移出视口后重置动画，以便再次进入时播放
            // entry.target.style.opacity = '0'; 
            // entry.target.style.transform = 'translateY(20px)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    // 初始化时暂停动画，等待进入视口
    card.style.animationPlayState = 'paused'; 
    observer.observe(card);
});

// 二维码图片鼠标悬停效果
document.querySelectorAll('.qr-code-section img').forEach(img => {
    img.onmouseover = function() { this.style.transform = 'scale(1.05)'; };
    img.onmouseout = function() { this.style.transform = 'scale(1)'; };
});