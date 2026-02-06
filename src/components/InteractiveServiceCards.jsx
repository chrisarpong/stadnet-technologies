import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './InteractiveServiceCards.css';

const InteractiveServiceCards = ({ services }) => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    return (
        <section className="interactive-services">
            <div className="container">
                <h2 className="section-title">Our Solutions</h2>
                <p className="section-subtitle">
                    Comprehensive technology services tailored to your business needs
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card-3d"
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={(e) => {
                                handleMouseLeave(e);
                                setHoveredCard(null);
                            }}
                        >
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <Link
                                    to={service.link}
                                    className="service-link"
                                >
                                    Learn more
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteractiveServiceCards;
