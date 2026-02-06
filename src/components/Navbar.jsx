import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const services = [
        { name: 'Mobile & Web Development', path: '/mobile-web-development' },
        { name: 'Cloud Computing', path: '/cloud-computing' },
        { name: 'Graphic Design', path: '/graphic-design' },
        { name: 'Product Design', path: '/product-design' },
        { name: 'Consulting', path: '/consulting' },
        { name: 'Engineering & Digitization', path: '/engineering' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <img src="/logo.png" alt="Stadnet Technologies" className="logo-image" />
                        <span className="logo-text-brand">Stadnet</span>
                    </Link>

                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/solutions" className="nav-link">Solutions</Link>

                        <div className={`nav-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
                            <button
                                className="nav-link dropdown-toggle"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleDropdown('services');
                                }}
                            >
                                <span style={{ pointerEvents: 'none' }}>Services</span>
                                <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                            <div className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
                                {services.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        className="dropdown-item"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link to="/careers" className="nav-link">Careers</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
