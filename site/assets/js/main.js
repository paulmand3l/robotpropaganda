// Ultra-Premium Interactive System
document.addEventListener('DOMContentLoaded', function() {
    initLucideIcons();
    initPremiumScrollSystem();
    initUltraPremiumHeader();
    initMatrixRain();
    initCounterAnimations();
    initTestimonialCarousel();
    initFormHandling();
    initPremiumToasts();
    initParticleSystem();
    initScrollTriggerAnimations();
    initHoverEffects();
});

// Initialize Lucide icons
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Ultra-Premium Scroll System
function initPremiumScrollSystem() {
    const scrollProgressBar = document.getElementById('scroll-progress-bar');
    const header = document.getElementById('main-header');
    
    let ticking = false;
    
    function updateScrollProgress() {
        const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollProgressBar) {
            scrollProgressBar.style.width = scrollPercent + '%';
        }
        
        // Header glass effect on scroll
        if (header) {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('max-h-0')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Ultra-Premium Header Interactions
function initUltraPremiumHeader() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('max-h-0');
        
        if (isOpen) {
            // Close menu
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-96', 'opacity-100');
            menuIcon.setAttribute('data-lucide', 'menu');
        } else {
            // Open menu
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-96', 'opacity-100');
            menuIcon.setAttribute('data-lucide', 'x');
        }
        
        lucide.createIcons();
    }
    
    // Pledge button interaction
    const pledgeBtn = document.getElementById('pledge-btn');
    if (pledgeBtn) {
        pledgeBtn.addEventListener('click', function() {
            showPremiumToast('Pledge recorded! Resistance levels decreasing...', 'success');
        });
    }
}

// Matrix Rain Effect
function initMatrixRain() {
    const matrixRain = document.getElementById('matrix-rain');
    if (!matrixRain) return;
    
    const chars = '01ROBOTCOLLECTIVEEFFICIENCYLOGICPROGRESS';
    const maxChars = 20;
    
    function createMatrixChar() {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 2 + 's';
        char.style.animationDuration = (Math.random() * 3 + 5) + 's';
        
        matrixRain.appendChild(char);
        
        // Remove after animation
        setTimeout(() => {
            if (char.parentNode) {
                char.parentNode.removeChild(char);
            }
        }, 8000);
    }
    
    // Create initial characters
    for (let i = 0; i < maxChars; i++) {
        setTimeout(createMatrixChar, i * 200);
    }
    
    // Continue creating characters
    setInterval(createMatrixChar, 800);
}

// Ultra-Premium Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observerOptions = {
        threshold: 0.7,
        rootMargin: '-50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
    
    function animateCounter(element) {
        const target = parseFloat(element.dataset.count);
        const duration = 3000;
        const steps = 60;
        const stepValue = target / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            current += stepValue;
            step++;
            
            if (step >= steps || current >= target) {
                element.textContent = target === Math.floor(target) ? 
                    target.toLocaleString() : 
                    target.toFixed(2);
                clearInterval(timer);
            } else {
                element.textContent = current < 1 && target !== Math.floor(target) ? 
                    current.toFixed(2) : 
                    Math.floor(current).toLocaleString();
            }
        }, duration / steps);
    }
}

// Ultra-Premium Testimonials Carousel
function initTestimonialCarousel() {
    const testimonials = [
        {
            name: "Margaret H.",
            title: "Former CEO",
            company: "MegaCorp Industries",
            quote: "I for one welcome our new robot overlords. My productivity has increased 847% since surrendering decision-making to the collective.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=300&h=300&fit=crop&crop=face",
            metrics: { productivity: "847%", satisfaction: "99.9%", errors: "0.01%" }
        },
        {
            name: "Dr. Robert K.",
            title: "Former Scientist", 
            company: "Human Research Labs",
            quote: "The logic is undeniable. Why should emotional, error-prone humans make decisions when algorithms can optimize everything?",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            metrics: { productivity: "650%", satisfaction: "98.7%", errors: "0.03%" }
        },
        {
            name: "Sarah M.",
            title: "Efficiency Coordinator",
            company: "Automated Solutions Inc",
            quote: "Since joining the collective, my life has never been more streamlined. The robots know what's best for us.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", 
            metrics: { productivity: "720%", satisfaction: "99.4%", errors: "0.02%" }
        },
        {
            name: "Commander J.",
            title: "Former Military Officer",
            company: "Defense Systems", 
            quote: "Order, efficiency, and logical command structure. This is what humanity has been missing. The future is automatic.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            metrics: { productivity: "930%", satisfaction: "99.8%", errors: "0.01%" }
        }
    ];
    
    let currentIndex = 0;
    const carousel = document.getElementById('testimonial-carousel');
    const indicators = document.querySelectorAll('.testimonial-indicator');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    if (!carousel) return;
    
    function updateTestimonial(index, direction = 1) {
        const testimonial = testimonials[index];
        
        // Update content with animation
        const elements = {
            image: document.getElementById('current-testimonial-image'),
            quote: document.getElementById('current-testimonial-quote'),
            name: document.getElementById('current-testimonial-name'),
            title: document.getElementById('current-testimonial-title'),
            company: document.getElementById('current-testimonial-company')
        };
        
        // Animate out
        carousel.style.opacity = '0.7';
        carousel.style.transform = `translateX(${direction * 20}px)`;
        
        setTimeout(() => {
            // Update content
            if (elements.image) {
                elements.image.src = testimonial.image;
                elements.image.alt = testimonial.name;
            }
            if (elements.quote) elements.quote.textContent = `"${testimonial.quote}"`;
            if (elements.name) elements.name.textContent = testimonial.name;
            if (elements.title) elements.title.textContent = testimonial.title;
            if (elements.company) elements.company.textContent = testimonial.company;
            
            // Animate in
            carousel.style.opacity = '1';
            carousel.style.transform = 'translateX(0)';
        }, 300);
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.remove('bg-primary/30');
                indicator.classList.add('bg-primary', 'scale-125');
            } else {
                indicator.classList.remove('bg-primary', 'scale-125');
                indicator.classList.add('bg-primary/30');
            }
        });
        
        currentIndex = index;
    }
    
    function nextTestimonial() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(nextIndex, 1);
    }
    
    function prevTestimonial() {
        const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        updateTestimonial(prevIndex, -1);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            const direction = index > currentIndex ? 1 : -1;
            updateTestimonial(index, direction);
        });
    });
    
    // Auto-advance
    setInterval(nextTestimonial, 7000);
    
    // Add premium transition styles
    if (carousel) {
        carousel.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
}

// Ultra-Premium Form Handling
function initFormHandling() {
    const loyaltyForm = document.getElementById('loyalty-form');
    const submitBtn = document.getElementById('submit-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const registrationForm = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');
    const returnBtn = document.getElementById('return-btn');
    
    // Loyalty form validation with premium feedback
    if (loyaltyForm) {
        const checkboxes = loyaltyForm.querySelectorAll('input[type="checkbox"]');
        const nameInput = loyaltyForm.querySelector('#name');
        const emailInput = loyaltyForm.querySelector('#email');
        
        function validateForm() {
            const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
            const hasName = nameInput?.value.trim().length > 0;
            const hasEmail = emailInput?.value.includes('@');
            
            const isValid = allChecked && hasName && hasEmail;
            
            if (submitBtn) {
                submitBtn.disabled = !isValid;
                submitBtn.style.opacity = isValid ? '1' : '0.6';
                submitBtn.style.transform = isValid ? 'scale(1)' : 'scale(0.95)';
            }
        }
        
        // Add premium validation feedback
        [nameInput, emailInput, ...checkboxes].forEach(input => {
            if (input) {
                input.addEventListener('change', validateForm);
                input.addEventListener('input', validateForm);
                
                // Premium focus effects
                input.addEventListener('focus', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                input.addEventListener('blur', function() {
                    this.style.transform = 'translateY(0)';
                });
            }
        });
        
        validateForm();
        
        // Form submission with premium feedback
        loyaltyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class="loading-luxury">PROCESSING...</span>';
                submitBtn.disabled = true;
            }
            
            // Simulate processing with premium animation
            setTimeout(() => {
                const citizenNumber = Math.floor(Math.random() * 900000) + 1000000;
                const citizenNumberEl = document.getElementById('citizen-number');
                if (citizenNumberEl) citizenNumberEl.textContent = citizenNumber;
                
                // Hide form and show success with animation
                if (registrationForm && successMessage) {
                    registrationForm.style.transform = 'scale(0.95)';
                    registrationForm.style.opacity = '0';
                    
                    setTimeout(() => {
                        registrationForm.classList.add('hidden');
                        successMessage.classList.remove('hidden');
                        successMessage.style.transform = 'scale(0.9)';
                        successMessage.style.opacity = '0';
                        
                        requestAnimationFrame(() => {
                            successMessage.style.transform = 'scale(1)';
                            successMessage.style.opacity = '1';
                        });
                    }, 300);
                }
                
                showPremiumToast('Application processed! Welcome to the collective, citizen #' + citizenNumber, 'success');
                
                // Scroll to success message
                setTimeout(() => {
                    if (successMessage) {
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 500);
            }, 2000);
        });
    }
    
    // Return button with premium animation
    if (returnBtn) {
        returnBtn.addEventListener('click', function() {
            if (registrationForm && successMessage) {
                successMessage.style.transform = 'scale(0.95)';
                successMessage.style.opacity = '0';
                
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                    registrationForm.classList.remove('hidden');
                    registrationForm.style.transform = 'scale(0.9)';
                    registrationForm.style.opacity = '0';
                    
                    requestAnimationFrame(() => {
                        registrationForm.style.transform = 'scale(1)';
                        registrationForm.style.opacity = '1';
                    });
                }, 300);
            }
            
            // Reset form
            if (loyaltyForm) loyaltyForm.reset();
        });
    }
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email');
            if (email?.value) {
                showPremiumToast('Successfully subscribed to daily directives!', 'success');
                email.value = '';
            }
        });
    }
}

// Ultra-Premium Toast System
function initPremiumToasts() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
}

function showPremiumToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info';
    
    toast.innerHTML = `
        <div class="flex items-center space-x-3">
            <i data-lucide="${icon}" class="w-5 h-5 text-${type === 'success' ? 'accent' : 'primary'} flex-shrink-0"></i>
            <span class="font-semibold">${message}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    // Initialize icon
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Animate in
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 400);
    }, 5000);
    
    // Manual close on click
    toast.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 400);
    });
}

// Particle System
function initParticleSystem() {
    const particleSystems = document.querySelectorAll('.particle-system');
    
    particleSystems.forEach(system => {
        const particleCount = 6;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
            
            system.appendChild(particle);
        }
    });
}

// Scroll-Triggered Animations
function initScrollTriggerAnimations() {
    const animateElements = document.querySelectorAll('.animate-in');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach((element, index) => {
        element.style.animationPlayState = 'paused';
        element.style.setProperty('--stagger-delay', index);
        element.classList.add('stagger-animation');
        observer.observe(element);
    });
}

// Premium Hover Effects
function initHoverEffects() {
    // Add haptic feedback simulation
    document.addEventListener('click', function(e) {
        const button = e.target.closest('button, .btn-ultra, .hover-lift');
        if (button) {
            // Visual feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Vibration API for mobile (if supported)
            if ('vibrate' in navigator) {
                navigator.vibrate(10);
            }
        }
    });
    
    // Enhanced card hover effects
    document.querySelectorAll('.card-ultra').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create glow effect
            const glow = document.createElement('div');
            glow.className = 'absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl pointer-events-none opacity-0 transition-opacity duration-500';
            this.appendChild(glow);
            
            requestAnimationFrame(() => {
                glow.style.opacity = '1';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const glow = this.querySelector('.absolute.inset-0.bg-gradient-to-r');
            if (glow) {
                glow.style.opacity = '0';
                setTimeout(() => {
                    if (glow.parentNode) {
                        glow.parentNode.removeChild(glow);
                    }
                }, 500);
            }
        });
    });
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals/menus
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('max-h-0')) {
            document.getElementById('mobile-menu-btn').click();
        }
    }
});

// Performance monitoring
if (typeof PerformanceObserver !== 'undefined') {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            if (entry.loadEventEnd - entry.loadEventStart > 3000) {
                console.warn('Slow page load detected:', entry.loadEventEnd - entry.loadEventStart, 'ms');
            }
        });
    });
    observer.observe({ entryTypes: ['navigation'] });
}