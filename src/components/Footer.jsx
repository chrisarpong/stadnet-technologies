import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3 className="footer-title">Contact Information</h3>
                        <div className="footer-contact">
                            <p className="contact-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M10 17.5C13.75 14.1667 17.5 11.3214 17.5 7.5C17.5 3.63401 14.1421 1 10 1C5.85786 1 2.5 3.63401 2.5 7.5C2.5 11.3214 6.25 14.1667 10 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <span>123 Tech Street, Innovation District<br />Accra, Ghana</span>
                            </p>
                            <p className="contact-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.5 5L8.5 9.5L10 10.5L11.5 9.5L17.5 5M3.5 16H16.5C17.0523 16 17.5 15.5523 17.5 15V5C17.5 4.44772 17.0523 4 16.5 4H3.5C2.94772 4 2.5 4.44772 2.5 5V15C2.5 15.5523 2.94772 16 3.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <a href="mailto:info@stadnet.com">info@stadnet.com</a>
                            </p>
                            <p className="contact-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M3 3L7.5 6.5L9 7.5C9 7.5 9.5 9.5 11 11C12.5 12.5 14.5 13 14.5 13L15.5 14.5L19 19C19 19 17.5 20 16 20C12.5 20 8 18 5 15C2 12 0 7.5 0 4C0 2.5 1 1 1 1L3 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <a href="tel:+233247759084">+233 24 775 9084</a>
                            </p>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Quick Links</h3>
                        <nav className="footer-nav">
                            <Link to="/">Home</Link>
                            <Link to="/solutions">Solutions</Link>
                            <Link to="/mobile-web-development">Mobile & Web Development</Link>
                            <Link to="/cloud-computing">Cloud Computing</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">About Stadnet</h3>
                        <p className="footer-about">
                            Stadnet Technologies is a leading provider of innovative IT solutions,
                            specializing in mobile & web development, cloud computing, design services,
                            and digital transformation consulting.
                        </p>
                        <div className="footer-social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.46 6c-.85.38-1.75.64-2.7.76a4.7 4.7 0 0 0 2.06-2.6c-.9.54-1.9.93-2.96 1.14A4.67 4.67 0 0 0 15.42 4c-2.58 0-4.68 2.1-4.68 4.68 0 .36.04.72.12 1.06-3.89-.2-7.34-2.06-9.65-4.9a4.68 4.68 0 0 0 1.45 6.24 4.64 4.64 0 0 1-2.12-.58v.06c0 2.27 1.61 4.16 3.75 4.59a4.7 4.7 0 0 1-2.11.08 4.68 4.68 0 0 0 4.37 3.25A9.38 9.38 0 0 1 2 19.54 13.2 13.2 0 0 0 9.29 22c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.01-.62.93-.67 1.74-1.51 2.38-2.47z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Stadnet Technologies. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="/privacy">Privacy Policy</a>
                        <span>•</span>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
