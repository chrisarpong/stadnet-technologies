import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { imageAssets } from '../lib/siteAssets';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;

            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 20);
                ticking = false;
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false); // eslint-disable-line
        setActiveDropdown(null);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const services = [
        { name: 'Mobile & Web Development', path: '/mobile-web-development' },
        { name: 'Cloud Computing', path: '/cloud-computing' },
        { name: 'Graphic Design', path: '/graphic-design' },
        { name: 'Consulting', path: '/consulting' },
        { name: 'Engineering & Digitization', path: '/engineering' },
    ];

    const isSolutionsActive = services.some((service) => location.pathname === service.path);

    const isAboutPage = location.pathname === '/about';

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isAboutPage ? 'navbar-about' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <img
                            src={imageAssets.logo.src}
                            alt="KYNOVA"
                            className="logo-image"
                            width={imageAssets.logo.width}
                            height={imageAssets.logo.height}
                            fetchPriority="high"
                        />
                        <span className="logo-text-brand">KYNOVA</span>
                    </Link>

                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Mobile menu backdrop overlay */}
                    {isMobileMenuOpen && (
                        <div
                            className="mobile-menu-overlay"
                            onClick={closeMobileMenu}
                        />
                    )}

                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <div
                            className="nav-dropdown"
                            onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown('solutions')}
                            onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
                        >
                            <button
                                className={`nav-link dropdown-toggle ${isSolutionsActive ? 'active' : ''}`}
                                onClick={() => isMobileMenuOpen && toggleDropdown('solutions')}
                                aria-expanded={activeDropdown === 'solutions'}
                            >
                                Solutions
                            </button>
                            <div className={`dropdown-menu ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        to={service.path}
                                        className="dropdown-item"
                                        onClick={closeMobileMenu}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link to="/careers" className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
                        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
