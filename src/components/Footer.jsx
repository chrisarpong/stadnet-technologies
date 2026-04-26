import { Link } from 'react-router-dom';
import { FaEnvelope, FaBriefcase, FaPhoneAlt } from 'react-icons/fa';
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
                            <div className="footer-social">
                                <a href="mailto:info@kynova.com" aria-label="Email KYNOVA">
                                    <FaEnvelope />
                                </a>
                                <Link to="/contact" aria-label="Contact KYNOVA">
                                    <FaPhoneAlt />
                                </Link>
                                <Link to="/careers" aria-label="Careers at KYNOVA">
                                    <FaBriefcase />
                                </Link>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-title">Quick Links</h3>
                            <nav className="footer-nav">
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/mobile-web-development">Mobile &amp; Web Development</Link>
                                <Link to="/cloud-computing">Cloud Computing</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-title">Contact</h3>
                            <div className="footer-contact">
                                <p className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M10 17.5C13.75 14.1667 17.5 11.3214 17.5 7.5C17.5 3.63401 14.1421 1 10 1C5.85786 1 2.5 3.63401 2.5 7.5C2.5 11.3214 6.25 14.1667 10 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    <span>Ministry of Foreign Affairs<br />No. 1 Revenue Close, Off Liberation Road<br />Accra, Ghana</span>
                                </p>
                                <p className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 5L8.5 9.5L10 10.5L11.5 9.5L17.5 5M3.5 16H16.5C17.0523 16 17.5 15.5523 17.5 15V5C17.5 4.44772 17.0523 4 16.5 4H3.5C2.94772 4 2.5 4.44772 2.5 5V15C2.5 15.5523 2.94772 16 3.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <a href="mailto:info@kynova.com">info@kynova.com</a>
                                </p>
                                <p className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M3 3L7.5 6.5L9 7.5C9 7.5 9.5 9.5 11 11C12.5 12.5 14.5 13 14.5 13L15.5 14.5L19 19C19 19 17.5 20 16 20C12.5 20 8 18 5 15C2 12 0 7.5 0 4C0 2.5 1 1 1 1L3 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>
                                        <a href="tel:+233201876093">+233 20 187 6093</a><br />
                                        <a href="tel:+2348034579536">+234 803 457 9536</a>
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-title">What We Support</h3>
                            <div className="footer-note-list">
                                <span>Product engineering</span>
                                <span>Cloud modernization</span>
                                <span>Workflow automation</span>
                                <span>Reporting and insight systems</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {currentYear} KYNOVA. All rights reserved.</p>
                        <div className="footer-legal">
                            <Link to="/privacy">Privacy Policy</Link>
                            <span>|</span>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
