import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Automatically scrolls to top when route changes
 */
const ScrollToTopOnMount = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top instantly when route changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return null;
};

export default ScrollToTopOnMount;
