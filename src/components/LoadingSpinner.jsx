/**
 * Loading Spinner Component
 * Reusable loading indicator
 */

import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
    return (
        <div className={`loading-spinner loading-spinner-${size} loading-spinner-${color}`}>
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
