export const COOKIE_CONSENT_KEY = 'kynova-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'kynova:cookie-consent-changed';

export const getStoredConsent = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.localStorage.getItem(COOKIE_CONSENT_KEY);
};

export const hasAcceptedAnalyticsConsent = () => getStoredConsent() === 'accepted';

export const setStoredConsent = (value) => {
    if (typeof window === 'undefined') {
        return;
    }

    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
};
