/**
 * Analytics utility for tracking user interactions
 * Uses umami analytics (already configured in index.html)
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // Track with umami if available
  if (window.umami) {
    window.umami.track(eventName, eventData);
  }
  
  // Also log to console in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, eventData);
  }
};

// Predefined event tracking functions
export const analytics = {
  // Social sharing events
  shareOnTwitter: (title: string, url: string) => {
    trackEvent('share_twitter', { title, url });
  },
  
  shareOnLinkedIn: (title: string, url: string) => {
    trackEvent('share_linkedin', { title, url });
  },
  
  shareOnFacebook: (title: string, url: string) => {
    trackEvent('share_facebook', { title, url });
  },
  
  shareViaEmail: (title: string, url: string) => {
    trackEvent('share_email', { title, url });
  },
  
  copyLink: (title: string, url: string) => {
    trackEvent('copy_link', { title, url });
  },
  
  // Newsletter events
  newsletterSignup: (email: string, location: string) => {
    trackEvent('newsletter_signup', { location, email_domain: email.split('@')[1] });
  },
  
  // Contribution events
  contributionClick: (tier: string, amount: number, location: string) => {
    trackEvent('contribution_click', { tier, amount, location });
  },

  contributionComplete: (tier: string, sessionId: string) => {
    trackEvent('contribution_complete', { tier, session_id: sessionId });
  },
  
  // Navigation events
  navigationClick: (destination: string, source: string) => {
    trackEvent('navigation_click', { destination, source });
  },
  
  // Content engagement
  readBlogPost: (title: string, category: string) => {
    trackEvent('read_blog_post', { title, category });
  },
};
