import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMobileAlt, FaCloud, FaPencilRuler, FaLayerGroup, FaHandshake, FaCogs } from 'react-icons/fa';
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
        { name: 'Mobile & Web Development', path: '/mobile-web-development', icon: <FaMobileAlt /> },
        { name: 'Cloud Computing', path: '/cloud-computing', icon: <FaCloud /> },
        { name: 'Graphic Design', path: '/graphic-design', icon: <FaPencilRuler /> },
        { name: 'Product Design', path: '/product-design', icon: <FaLayerGroup /> },
        { name: 'Consulting', path: '/consulting', icon: <FaHandshake /> },
        { name: 'Engineering & Digitization', path: '/engineering', icon: <FaCogs /> },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <img src="/logo.png" alt="KYNOVA" className="logo-image" />
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
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/careers" className="nav-link">Careers</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
