import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Automatically scrolls to top when route changes
 */
const ScrollToTopOnMount = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll to top instantly
        window.scrollTo(0, 0);

        // Backup scroll to top after a small delay to handle transitions/renders
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollToTopOnMount;
