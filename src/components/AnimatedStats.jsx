import { useState, useEffect, useRef } from 'react';
import './AnimatedStats.css';

const AnimatedStats = ({ stats }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        stats.forEach((stat, index) => {
            let currentStep = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
                currentStep++;
                setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.min(
                        Math.round(increment * currentStep),
                        stat.value
                    );
                    return newCounts;
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, stepDuration);
        });
    }, [isVisible, stats]);

    return (
        <section className="animated-stats" ref={sectionRef}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-card ${isVisible ? 'visible' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">
                                {counts[index]}{stat.suffix || ''}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnimatedStats;
