/**
 * Google Analytics Component
 * Tracks page views and user interactions
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = ({ measurementId }) => {
    const location = useLocation();

    useEffect(() => {
        // Load Google Analytics script
        if (!window.gtag && measurementId) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
                window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', measurementId);
        }
    }, [measurementId]);

    // Track page views on route change
    useEffect(() => {
        if (window.gtag && measurementId) {
            window.gtag('config', measurementId, {
                page_path: location.pathname + location.search,
            });
        }
    }, [location, measurementId]);

    return null;
};

export default GoogleAnalytics;
