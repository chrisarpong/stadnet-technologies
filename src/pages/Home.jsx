import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import './Home.css';

const Home = () => {
    const services = [
        {
            title: 'Mobile & Web Development',
            description: 'Build cutting-edge mobile and web applications with modern technologies and best practices for optimal performance.',
            linkUrl: '/mobile-web-development',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
                    <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            delay: 0
        },
        {
            title: 'Cloud Computing',
            description: 'Leverage the power of cloud infrastructure for scalable, secure, and cost-effective solutions tailored to your business.',
            linkUrl: '/cloud-computing',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            delay: 100
        },
        {
            title: 'Graphic Design',
            description: 'Create stunning visual identities and designs that capture your brand essence and engage your audience effectively.',
            linkUrl: '/graphic-design',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            delay: 200
        },
        {
            title: 'Product Design',
            description: 'Design user-centric products that combine aesthetics with functionality for exceptional user experiences.',
            linkUrl: '/product-design',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2" />
                    <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2" />
                </svg>
            ),
            delay: 300
        },
        {
            title: 'Consulting',
            description: 'Strategic IT consulting services to guide your digital transformation and optimize your technology investments.',
            linkUrl: '/consulting',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                    <circle cx="9" cy="7" r="4" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                </svg>
            ),
            delay: 400
        },
        {
            title: 'Engineering & Digitization',
            description: 'Transform legacy systems with modern engineering practices and comprehensive digitization strategies.',
            linkUrl: '/engineering',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="16 18 22 12 16 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="8 6 2 12 8 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            delay: 500
        }
    ];

    return (
        <div className="home-page">
            <SEO
                title="Home"
                description="Stadnet Technologies - Leading provider of mobile & web development, cloud computing, graphic design, product design, consulting, and engineering services in Ghana."
                keywords="IT solutions, web development, mobile apps, cloud computing, graphic design, product design, consulting, engineering, Ghana, Accra"
            />

            {/* Floating Shapes */}
            <div className="floating-shape floating-shape-1"></div>
            <div className="floating-shape floating-shape-2"></div>
            <div className="floating-shape floating-shape-3"></div>

            <Hero
                title="Welcome to Stadnet Technologies"
                subtitle="Your Partner in Digital Innovation & IT Excellence"
                ctaText="Get Started"
                ctaLink="/contact"
                height="large"
            />

            <section className="section services-section section-white">
                <div className="container">
                    <div className="section-header text-center" data-aos="fade-up">
                        <h2 className="text-gradient">Our Solutions</h2>
                        <p className="section-subtitle">
                            Comprehensive IT services designed to accelerate your digital transformation
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                linkUrl={service.linkUrl}
                                icon={service.icon}
                                delay={service.delay}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />

            <section className="section section-white cta-section">
                <div className="container-narrow">
                    <div className="cta-content glass-card text-center" data-aos="zoom-in">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Let's discuss how Stadnet Technologies can help you achieve your digital goals
                            with our innovative solutions and expert team.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Contact Us Today</a>
                            <a href="/solutions" className="btn btn-secondary btn-large">Explore Solutions</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
