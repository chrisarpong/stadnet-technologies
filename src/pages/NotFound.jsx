import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <SEO
                title="Page Not Found - 404"
                description="The page you're looking for doesn't exist."
            />

            <div className="not-found-content" data-aos="fade-up">
                <div className="error-number">404</div>
                <h1 className="error-title">Page Not Found</h1>
                <p className="error-description">
                    Oops! The page you're looking for doesn't exist.
                    It might have been moved or deleted.
                </p>

                <div className="error-actions">
                    <Link to="/" className="btn btn-primary btn-large">
                        Back to Home
                    </Link>
                    <Link to="/solutions" className="btn btn-secondary btn-large">
                        View Our Solutions
                    </Link>
                </div>

                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <div className="links-grid">
                        <Link to="/mobile-web-development">Mobile & Web Development</Link>
                        <Link to="/cloud-computing">Cloud Computing</Link>
                        <Link to="/consulting">Consulting</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
