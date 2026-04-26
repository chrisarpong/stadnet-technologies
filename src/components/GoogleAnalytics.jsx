/**
 * Google Analytics Component
 * Tracks page views and user interactions
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COOKIE_CONSENT_EVENT, hasAcceptedAnalyticsConsent } from '../lib/consent';

const GoogleAnalytics = ({ measurementId }) => {
    const location = useLocation();

    useEffect(() => {
        const loadAnalytics = () => {
            if (!measurementId || !hasAcceptedAnalyticsConsent() || window.gtag) {
                return;
            }

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
        };

        loadAnalytics();
        window.addEventListener(COOKIE_CONSENT_EVENT, loadAnalytics);

        return () => window.removeEventListener(COOKIE_CONSENT_EVENT, loadAnalytics);
    }, [measurementId]);

    useEffect(() => {
        if (window.gtag && measurementId && hasAcceptedAnalyticsConsent()) {
            window.gtag('config', measurementId, {
                page_path: location.pathname + location.search,
            });
        }
    }, [location, measurementId]);

    return null;
};

export default GoogleAnalytics;
