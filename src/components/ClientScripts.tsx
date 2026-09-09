'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll Reveal
        const reveals = document.querySelectorAll('.reveal-on-scroll');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
        
        reveals.forEach(el => revealObserver.observe(el));

        // Nav styling on scroll
        const handleScroll = () => {
            const nav = document.getElementById('mainNav');
            if (nav) {
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-md', 'bg-[#0a714e]/95');
                    nav.classList.remove('bg-[#0a714e]', 'shadow-sm');
                } else {
                    nav.classList.remove('shadow-md', 'bg-[#0a714e]/95');
                    nav.classList.add('bg-[#0a714e]', 'shadow-sm');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial check for nav
        handleScroll();

        // FAQ Accordion
        const faqTriggers = document.querySelectorAll('.faq-trigger');
        faqTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const parent = trigger.closest('.faq-item');
                if (parent) {
                    parent.classList.toggle('active');
                }
            });
        });

        // Billing Toggle
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const period = btn.getAttribute('data-period');
                const priceValues = document.querySelectorAll('.price-value');
                priceValues.forEach(el => {
                    const htmlEl = el as HTMLElement;
                    if (period === 'annual') {
                        htmlEl.textContent = htmlEl.getAttribute('data-annual') || '';
                    } else {
                        htmlEl.textContent = htmlEl.getAttribute('data-monthly') || '';
                    }
                });
                const badge = document.querySelector('.annual-badge');
                if (badge) {
                    if (period === 'annual') {
                        badge.classList.remove('hidden');
                    } else {
                        badge.classList.add('hidden');
                    }
                }
            });
        });

        return () => {
            reveals.forEach(el => revealObserver.unobserve(el));
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);
    
    return null;
}
