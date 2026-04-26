import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-shell">
                    <div className="footer-topbar">
                        <div>
                            <span className="footer-kicker">Built for modern delivery</span>
                            <h2>Let&apos;s shape practical digital systems that move your team forward.</h2>
                        </div>
                        <Link className="footer-cta" to="/contact">Book a consultation</Link>
                    </div>

                    <div className="footer-content">
                        <div className="footer-column footer-brand-column">
                            <span className="footer-brand-mark">KYNOVA</span>
                            <p className="footer-about">
                                KYNOVA helps organisations modernise delivery across product engineering,
                                cloud, automation, and insight systems with a practical execution-first approach.
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
                        <h3 className="footer-title">About KYNOVA</h3>
                        <p className="footer-about">
                            KYNOVA is a leading provider of innovative IT solutions,
                            specializing in mobile & web development, cloud computing, design services,
                            and digital transformation consulting.
                        </p>
                        {/* TODO: Update social media links below with real KYNOVA account URLs */}
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
                    <p>&copy; {currentYear} KYNOVA. All rights reserved.</p>
                    <div className="footer-legal">
                        {/* TODO: Create actual Privacy Policy (/privacy) and Terms of Service (/terms) pages — these currently lead to 404 */}
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
