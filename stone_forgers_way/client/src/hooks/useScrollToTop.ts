import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if URL has a hash - if so, let browser handle scroll to anchor
    if (window.location.hash) {
      return;
    }
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
}
