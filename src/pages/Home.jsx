import SEO from '../components/SEO';
import ParallaxHero from '../components/ParallaxHero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import AnimatedStats from '../components/AnimatedStats';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
    const services = [
        {
            title: 'Mobile & Web Development',
            description: 'Build cutting-edge mobile and web applications with modern technologies and best practices for optimal performance.',
            link: '/mobile-web-development',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
                    <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Cloud Computing',
            description: 'Leverage the power of cloud infrastructure for scalable, secure, and cost-effective solutions tailored to your business.',
            link: '/cloud-computing',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: 'Graphic Design',
            description: 'Create stunning visual identities and designs that capture your brand essence and engage your audience effectively.',
            link: '/graphic-design',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: 'Product Design',
            description: 'Design user-centric products that combine aesthetics with functionality for exceptional user experiences.',
            link: '/product-design',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2" />
                    <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: 'Consulting',
            description: 'Strategic IT consulting services to guide your digital transformation and optimize your technology investments.',
            link: '/consulting',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                    <circle cx="9" cy="7" r="4" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: 'Engineering & Digitization',
            description: 'Transform legacy systems with modern engineering practices and comprehensive digitization strategies.',
            link: '/engineering',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="16 18 22 12 16 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="8 6 2 12 8 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    const stats = [
        {
            value: 150,
            suffix: '+',
            label: 'Projects Completed',
            icon: '🚀'
        },
        {
            value: 98,
            suffix: '%',
            label: 'Client Satisfaction',
            icon: '⭐'
        },
        {
            value: 50,
            suffix: '+',
            label: 'Happy Clients',
            icon: '🤝'
        },
        {
            value: 10,
            suffix: '+',
            label: 'Years Experience',
            icon: '💼'
        }
    ];

    return (
        <div className="home-page">
            <SEO
                title="Home"
                description="Stadnet Technologies - Leading provider of mobile & web development, cloud computing, graphic design, product design, consulting, and engineering services in Ghana."
                keywords="IT solutions, web development, mobile apps, cloud computing, graphic design, product design, consulting, engineering, Ghana, Accra"
            />

            {/* New Parallax Hero */}
            <ParallaxHero
                title="Your Partner in Digital Innovation"
                subtitle="We provide cutting-edge technology solutions that drive growth and transform businesses across Africa"
                ctaText="Get Started"
                ctaLink="#services"
            />

            {/* Animated Stats */}
            <AnimatedStats stats={stats} />

            {/* Interactive Service Cards */}
            <InteractiveServiceCards services={services} />

            {/* Testimonials Section */}
            <Testimonials />

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
