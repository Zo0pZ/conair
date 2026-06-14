/**
 * Conair Extract Solutions — Main JavaScript
 * Handles: Navigation, Scroll Animations, Form Validation, Counter Animation
 */

(function () {
    'use strict';

    // ========== Mobile Navigation ==========
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            const isOpen = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isOpen);
            navLinks.classList.toggle('open');
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        // Close nav when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Close nav on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
                mobileToggle.focus();
            }
        });
    }

    // ========== Sticky Header Scroll Effect ==========
    const header = document.getElementById('header');
    let lastScroll = 0;

    function handleHeaderScroll() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // ========== Scroll Animations (Intersection Observer) ==========
    const animatedElements = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const delay = entry.target.getAttribute('data-delay') || 0;
                        setTimeout(function () {
                            entry.target.classList.add('animated');
                        }, parseInt(delay));
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        animatedElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show all elements immediately
        animatedElements.forEach(function (el) {
            el.classList.add('animated');
        });
    }

    // ========== Counter Animation ==========
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out-quart)
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(eased * (target - start) + start);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Observe counter elements
    const counterElements = document.querySelectorAll('[data-count]');

    if ('IntersectionObserver' in window && counterElements.length) {
        const counterObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counterElements.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    // ========== Form Validation ==========
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        const validators = {
            firstName: function (value) {
                if (!value.trim()) return 'First name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            },
            lastName: function (value) {
                if (!value.trim()) return 'Last name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            },
            email: function (value) {
                if (!value.trim()) return 'Email address is required';
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            },
            phone: function (value) {
                if (!value.trim()) return 'Phone number is required';
                var phoneRegex = /^[\d\s+()-]{10,}$/;
                if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
                return '';
            },
            consent: function (checked) {
                if (!checked) return 'You must agree to be contacted';
                return '';
            },
        };

        function validateField(field) {
            var name = field.name;
            var value = field.type === 'checkbox' ? field.checked : field.value;
            var validator = validators[name];

            if (!validator) return true;

            var error = validator(value);
            var errorEl = field.closest('.form-group').querySelector('.form-error');

            if (error) {
                field.classList.add('error');
                if (errorEl) errorEl.textContent = error;
                return false;
            } else {
                field.classList.remove('error');
                if (errorEl) errorEl.textContent = '';
                return true;
            }
        }

        // Real-time validation on blur
        leadForm.querySelectorAll('input, select, textarea').forEach(function (field) {
            field.addEventListener('blur', function () {
                validateField(this);
            });

            // Clear error on input
            field.addEventListener('input', function () {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Form submission
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var isValid = true;
            var firstError = null;

            // Validate all required fields
            leadForm.querySelectorAll('[required]').forEach(function (field) {
                if (!validateField(field)) {
                    isValid = false;
                    if (!firstError) firstError = field;
                }
            });

            if (!isValid) {
                firstError.focus();
                return;
            }

            // Form submission success state
            var submitBtn = leadForm.querySelector('button[type="submit"]');
            var originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Quote Request Sent!';
            submitBtn.style.background = '#10b981';
            submitBtn.style.borderColor = '#10b981';
            submitBtn.disabled = true;

            // Reset after 3 seconds (in production this would redirect or show a thank-you)
            setTimeout(function () {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.borderColor = '';
                submitBtn.disabled = false;
                leadForm.reset();
            }, 3000);
        });
    }

    // ========== Smooth Scroll for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // ========== Performance: Lazy load below-the-fold images ==========
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
            img.src = img.dataset.src;
        });
    }
})();