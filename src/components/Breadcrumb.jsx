/**
 * Breadcrumb Component
 * Navigation breadcrumbs for better UX
 */

import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        {index < items.length - 1 ? (
                            <>
                                <Link to={item.path}>{item.label}</Link>
                                <span className="breadcrumb-separator" aria-hidden="true">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </>
                        ) : (
                            <span className="breadcrumb-current" aria-current="page">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
