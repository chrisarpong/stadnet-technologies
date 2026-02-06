import { useEffect, useRef } from 'react';
import './ParallaxHero.css';

const ParallaxHero = ({ title, subtitle, ctaText, ctaLink }) => {
    const heroRef = useRef(null);
    const shapesRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const hero = heroRef.current;

            if (hero) {
                // Parallax effect for background
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;

                // Parallax effect for floating shapes
                shapesRef.current.forEach((shape, index) => {
                    if (shape) {
                        const speed = 0.2 + (index * 0.1);
                        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="parallax-hero">
            <div className="parallax-background" ref={heroRef}>
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            {/* Floating geometric shapes */}
            <div className="floating-shapes">
                <div className="shape shape-circle" ref={el => shapesRef.current[0] = el}></div>
                <div className="shape shape-square" ref={el => shapesRef.current[1] = el}></div>
                <div className="shape shape-triangle" ref={el => shapesRef.current[2] = el}></div>
                <div className="shape shape-hexagon" ref={el => shapesRef.current[3] = el}></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title animate-fade-in">
                    {title}
                </h1>
                <p className="hero-subtitle animate-fade-in animate-delay-200">
                    {subtitle}
                </p>
                {ctaText && ctaLink && (
                    <a href={ctaLink} className="hero-cta animate-fade-in animate-delay-400">
                        {ctaText}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                )}
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator animate-pulse">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll to explore</p>
            </div>
        </div>
    );
};

export default ParallaxHero;
