import { useEffect, useRef } from 'react';
import './ParallaxHero.css';

const ParallaxHero = ({ title, subtitle, ctaText, ctaLink }) => {
    const heroRef = useRef(null);
    const shapesRef = useRef([]);

    useEffect(() => {
        // Disable parallax on mobile — the scroll handler fights native
        // touch scrolling and makes it difficult/impossible to scroll
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) return;

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

        window.addEventListener('scroll', handleScroll, { passive: true });
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

            <div className="container">
                <div className="hero-split-layout">
                    {/* Left side - Text content */}
                    <div className="hero-text-content">
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

                    {/* Right side - Tech Illustration */}
                    <div className="hero-image-box">
                        <svg className="hero-illustration" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Central monitor */}
                            <rect x="150" y="80" width="200" height="140" rx="12" stroke="rgba(0,102,255,0.6)" strokeWidth="2" fill="rgba(0,102,255,0.08)" />
                            <rect x="165" y="95" width="170" height="100" rx="6" fill="rgba(0,102,255,0.12)" />
                            {/* Screen content lines */}
                            <rect x="180" y="110" width="80" height="4" rx="2" fill="rgba(0,102,255,0.5)" />
                            <rect x="180" y="122" width="120" height="4" rx="2" fill="rgba(0,102,255,0.3)" />
                            <rect x="180" y="134" width="60" height="4" rx="2" fill="rgba(0,102,255,0.4)" />
                            <rect x="180" y="146" width="100" height="4" rx="2" fill="rgba(0,102,255,0.25)" />
                            <rect x="180" y="158" width="90" height="4" rx="2" fill="rgba(0,102,255,0.35)" />
                            <rect x="180" y="170" width="50" height="4" rx="2" fill="rgba(0,102,255,0.3)" />
                            {/* Monitor stand */}
                            <rect x="230" y="220" width="40" height="20" fill="rgba(0,102,255,0.15)" />
                            <rect x="210" y="240" width="80" height="6" rx="3" fill="rgba(0,102,255,0.2)" />

                            {/* Floating nodes */}
                            <circle cx="80" cy="120" r="20" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" fill="rgba(0,102,255,0.06)">
                                <animate attributeName="r" values="20;22;20" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="80" cy="120" r="8" fill="rgba(0,102,255,0.3)" />

                            <circle cx="420" cy="100" r="18" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" fill="rgba(0,102,255,0.06)">
                                <animate attributeName="r" values="18;20;18" dur="4s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="420" cy="100" r="7" fill="rgba(0,102,255,0.3)" />

                            <circle cx="400" cy="280" r="22" stroke="rgba(0,102,255,0.4)" strokeWidth="1.5" fill="rgba(0,102,255,0.05)">
                                <animate attributeName="r" values="22;24;22" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="400" cy="280" r="9" fill="rgba(0,102,255,0.25)" />

                            <circle cx="100" cy="300" r="16" stroke="rgba(0,102,255,0.4)" strokeWidth="1.5" fill="rgba(0,102,255,0.05)">
                                <animate attributeName="r" values="16;18;16" dur="2.8s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="100" cy="300" r="6" fill="rgba(0,102,255,0.25)" />

                            {/* Connection lines */}
                            <line x1="100" y1="120" x2="150" y2="130" stroke="rgba(0,102,255,0.2)" strokeWidth="1" strokeDasharray="4 4">
                                <animate attributeName="strokeDashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                            </line>
                            <line x1="350" y1="130" x2="402" y2="100" stroke="rgba(0,102,255,0.2)" strokeWidth="1" strokeDasharray="4 4">
                                <animate attributeName="strokeDashoffset" values="0;8" dur="2.5s" repeatCount="indefinite" />
                            </line>
                            <line x1="330" y1="220" x2="378" y2="275" stroke="rgba(0,102,255,0.15)" strokeWidth="1" strokeDasharray="4 4">
                                <animate attributeName="strokeDashoffset" values="0;8" dur="3s" repeatCount="indefinite" />
                            </line>
                            <line x1="170" y1="220" x2="116" y2="290" stroke="rgba(0,102,255,0.15)" strokeWidth="1" strokeDasharray="4 4">
                                <animate attributeName="strokeDashoffset" values="0;8" dur="2.8s" repeatCount="indefinite" />
                            </line>

                            {/* Small floating dots */}
                            <circle cx="300" cy="50" r="3" fill="rgba(0,102,255,0.4)">
                                <animate attributeName="cy" values="50;45;50" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="60" cy="200" r="2.5" fill="rgba(0,102,255,0.3)">
                                <animate attributeName="cy" values="200;195;200" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="450" cy="200" r="3" fill="rgba(0,102,255,0.35)">
                                <animate attributeName="cy" values="200;194;200" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="200" cy="330" r="2" fill="rgba(0,102,255,0.3)">
                                <animate attributeName="cy" values="330;325;330" dur="2.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="350" cy="350" r="2.5" fill="rgba(0,102,255,0.25)">
                                <animate attributeName="cy" values="350;344;350" dur="2.7s" repeatCount="indefinite" />
                            </circle>

                            {/* Gear icon */}
                            <circle cx="250" cy="340" r="18" stroke="rgba(0,102,255,0.3)" strokeWidth="1.5" fill="none" />
                            <circle cx="250" cy="340" r="10" stroke="rgba(0,102,255,0.3)" strokeWidth="1.5" fill="rgba(0,102,255,0.08)">
                                <animateTransform attributeName="transform" type="rotate" values="0 250 340;360 250 340" dur="10s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallaxHero;
