import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStoredConsent, setStoredConsent } from '../lib/consent';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (getStoredConsent()) {
            return undefined;
        }

        const showBanner = () => setIsVisible(true);

        if ('requestIdleCallback' in window) {
            const idleId = window.requestIdleCallback(showBanner, { timeout: 2000 });
            return () => window.cancelIdleCallback(idleId);
        }

        const timeoutId = window.setTimeout(showBanner, 1200);
        return () => window.clearTimeout(timeoutId);
    }, []);

    const handleConsent = (value) => {
        setStoredConsent(value);
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                left: '16px',
                right: '16px',
                bottom: '16px',
                zIndex: 1100,
                maxWidth: '980px',
                margin: '0 auto',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: 'rgba(26, 26, 26, 0.96)',
                boxShadow: '0 18px 40px rgba(0, 0, 0, 0.28)'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    padding: '16px 18px'
                }}
            >
                <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#ffffff', flex: '1 1 420px' }}>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking &quot;Accept All&quot;, you consent to our use of cookies.{` `}
                <Link to="/privacy" style={{ color: '#BBBBBB', textDecoration: 'underline' }}>
                    Learn more
                </Link>
                </span>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                        type="button"
                        onClick={() => handleConsent('declined')}
                        style={{
                            background: 'transparent',
                            color: '#ffffff',
                            fontSize: '14px',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '8px',
                            padding: '12px 20px',
                            cursor: 'pointer'
                        }}
                    >
                        Decline
                    </button>
                    <button
                        type="button"
                        onClick={() => handleConsent('accepted')}
                        style={{
                            background: '#333333',
                            color: '#ffffff',
                            fontSize: '14px',
                            fontWeight: '600',
                            borderRadius: '8px',
                            padding: '12px 20px',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
