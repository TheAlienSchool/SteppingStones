import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

/**
 * Hook for scroll-triggered reveal animations
 * Respects prefers-reduced-motion for accessibility
 * Returns refs to attach to elements that should animate on scroll
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    delay = 0
  } = options;

  const elementsRef = useRef<Set<HTMLElement>>(new Set());
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      // If user prefers reduced motion, just make elements visible immediately
      elementsRef.current.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add reveal class after delay
          setTimeout(() => {
            entry.target.classList.add('reveal-animate');
            observer.unobserve(entry.target);
          }, delay);
        }
      });
    }, {
      threshold,
      rootMargin
    });

    elementsRef.current.forEach(el => observer.observe(el));

    return () => {
      elementsRef.current.forEach(el => observer.unobserve(el));
    };
  }, [threshold, rootMargin, delay, prefersReducedMotion]);

  return elementsRef;
}

/**
 * Hook for parallax scroll effect
 * Gradually moves element based on scroll position
 */
export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return; // Skip for accessibility
    }

    const handleScroll = () => {
      if (!elementRef.current) return;
      const scrollY = window.scrollY;
      elementRef.current.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
}
