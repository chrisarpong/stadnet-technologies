import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './InteractiveServiceCards.css';

const InteractiveServiceCards = ({ services }) => {
    const servicesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('slide-in');
                        }, index * 150);
                    }
                });
            },
            { threshold: 0.1 }
        );

        servicesRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            servicesRef.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section className="interactive-services">
            <div className="container">
                <h2 className="section-title">Our Solutions</h2>
                <p className="section-subtitle">
                    Comprehensive technology services tailored to your business needs
                </p>

                <div className="services-list">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-item"
                            ref={el => servicesRef.current[index] = el}
                        >
                            <div className="service-number">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="service-content">
                                <div className="service-header">
                                    <div className="service-icon-wrapper">
                                        {service.icon}
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                </div>
                                <p className="service-description">{service.description}</p>
                                <Link to={service.link} className="service-link">
                                    Explore {service.title}
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="service-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteractiveServiceCards;
