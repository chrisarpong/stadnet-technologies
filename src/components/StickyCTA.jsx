import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StickyCTA.css';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <Link
            to="/contact"
            className={`sticky-cta ${isVisible ? 'visible' : ''}`}
            aria-label="Get Started"
        >
            <span className="cta-icon">💬</span>
            <span className="cta-text">Get Started</span>
        </Link>
    );
};

export default StickyCTA;
