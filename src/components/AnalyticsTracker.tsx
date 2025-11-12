import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-X87YSK2YWZ', {
        page_path: pathname,
      });
      console.log('GA4: Tracked pageview for', pathname);
    } else {
      console.warn('GA4: gtag not loaded');
    }
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
