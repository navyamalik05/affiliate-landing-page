// ========================
// SMOOTH SCROLLING
// ========================

function scrollToVideo() {
    const videoSection = document.getElementById('video');
    videoSection.scrollIntoView({ behavior: 'smooth' });
}

// ========================
// NAVBAR ACTIVE STATE
// ========================

const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================
// SCROLL ANIMATIONS
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe benefit cards and testimonial cards
document.querySelectorAll('.benefit-card, .testimonial-card, .step-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add slide up animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu a.active {
        color: #ffc107 !important;
    }
`;
document.head.appendChild(style);

// ========================
// BUTTON CLICK HANDLERS
// ========================

const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add your CTA logic here
        // For example: redirect to signup page, open modal, etc.
        console.log('CTA Button clicked');
    });
});

// ========================
// VIDEO MODAL (Optional)
// ========================

const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
        // You can add functionality to open a modal or play video here
        console.log('Video placeholder clicked');
    });
}

// ========================
// FORM SUBMISSION (Optional)
// ========================

// If you add a form in the future, use this template:
/*
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted');
    });
}
*/

// ========================
// CURSOR EFFECTS (Optional Enhancement)
// ========================

document.addEventListener('mousemove', function(e) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Optional: Add glow effect on hover
        // button.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,193,7,0.3), rgba(255,193,7,0.1))`;
    });
});

// ========================
// PERFORMANCE OPTIMIZATION
// ========================

// Lazy load images (if needed in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// ========================
// CONSOLE GREETING
// ========================

console.log('%cWelcome to Affiliate Marketing Hub! 🚀', 'font-size: 16px; color: #ffc107; font-weight: bold;');
console.log('Ready to transform your income? Let\'s go! 💪');
