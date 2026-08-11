/* =========================================
   ARCHORA - Premium Frontend Website
   Vanilla JavaScript - No Dependencies
   ========================================= */

'use strict';

// =========================================
// MOBILE NAVIGATION
// =========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.navbar__link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// =========================================
// ACTIVE NAVIGATION LINK
// =========================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('main > section');
    const scrollPosition = window.scrollY + 100;

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const targetId = section.getAttribute('id');
            const activeLink = document.querySelector(`.navbar__link[href="#${targetId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// =========================================
// CONTACT FORM VALIDATION
// =========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearFormErrors();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const projectType = document.getElementById('projectType').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        let isValid = true;
        
        // Name validation
        if (name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters long');
            isValid = false;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Project type validation
        if (!projectType) {
            showError('projectTypeError', 'Please select a project type');
            isValid = false;
        }
        
        // Message validation
        if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        // If valid, show success message
        if (isValid) {
            showFormSuccess();
            contactForm.reset();
            
            // Simulate sending (no actual backend)
            console.log('Form submitted:', { name, email, projectType, message });
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form error
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Clear all form errors
function clearFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
}

// Show success message
function showFormSuccess() {
    if (formSuccess) {
        formSuccess.style.display = 'block';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }
}

// Real-time form input validation
const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        const errorId = input.id + 'Error';
        const errorElement = document.getElementById(errorId);
        
        if (errorElement) {
            // Clear error on blur if field is now valid
            if (input.value.trim() !== '') {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        }
    });
});

// =========================================
// SCROLL REVEAL ANIMATIONS
// =========================================
const revealElements = document.querySelectorAll(
    '.service-card, .project-card, .principle-card, .stat-card, .timeline__item, .principle-item'
);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.willChange = 'opacity, transform';
            entry.target.style.animation = 'fadeUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
            setTimeout(() => {
                entry.target.style.willChange = 'auto';
            }, 700);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.animationDelay = `${index * 0.08}s`;
    observer.observe(element);
});

// =========================================
// SMOOTH SCROLL BEHAVIOR (Fallback)
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default if it's a form or toggle
        if (href !== '#' && !this.classList.contains('navbar__toggle')) {
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

// =========================================
// DYNAMIC DEVICE MOCKUP ANIMATION
// =========================================
const phoneContent = document.querySelector('.phone-content');
const browserContent = document.querySelector('.browser-content');

if (phoneContent) {
    let phoneHue = 0;
    setInterval(() => {
        phoneHue = (phoneHue + 1) % 360;
        phoneContent.style.filter = `hue-rotate(${phoneHue}deg)`;
    }, 100);
}

// =========================================
// NAVBAR SCROLL EFFECT & SCROLL PROGRESS
// =========================================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    // Add subtle background as user scrolls down
    if (scrollTop > 10) {
        navbar.style.background = 'rgba(242, 240, 234, 0.85)';
    } else {
        navbar.style.background = 'rgba(242, 240, 234, 0.7)';
    }
    
    // Scroll Progress Indicator
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0;
    document.body.style.backgroundImage = `linear-gradient(90deg, #A68E7B ${scrollPercent}%, transparent ${scrollPercent}%)`;
    document.body.style.backgroundImage = 'none'; // Reset for actual progress bar
    
    // Update progress bar
    const progressBar = document.querySelector('body::before');
    if (document.documentElement.scrollHeight > window.innerHeight) {
        const percent = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.documentElement.style.setProperty('--scroll-percent', percent + '%');
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });

// =========================================
// PAGE LOAD INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('ARCHORA - Premium Frontend Website Loaded');
    
    // Set initial active nav link
    updateActiveNavLink();
    
    // Initialize form
    if (contactForm) {
        clearFormErrors();
    }
    
    // Add loading animation
    document.body.style.opacity = '1';
});

// =========================================
// KEYBOARD NAVIGATION
// =========================================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// =========================================
// ACCESSIBILITY ENHANCEMENT
// =========================================
// Ensure all interactive elements are keyboard accessible
const interactiveElements = document.querySelectorAll('button, a[href], input, select, textarea');

interactiveElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #A68E7B';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});
