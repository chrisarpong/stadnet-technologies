import Hero from '../components/Hero';
import './ServicePage.css';

const MobileWebDev = () => {
    const features = [
        {
            title: 'Native Mobile Apps',
            description: 'iOS and Android apps built with Swift, Kotlin, and platform-specific tools for optimal performance.'
        },
        {
            title: 'Cross-Platform Development',
            description: 'React Native and Flutter apps that work seamlessly across multiple platforms.'
        },
        {
            title: 'Progressive Web Apps',
            description: 'Modern web applications with offline capabilities and native app-like experiences.'
        },
        {
            title: 'Responsive Web Design',
            description: 'Beautiful, mobile-first websites that adapt perfectly to any screen size.'
        },
        {
            title: 'E-Commerce Solutions',
            description: 'Full-featured online stores with secure payment processing and inventory management.'
        },
        {
            title: 'API Development',
            description: 'RESTful and GraphQL APIs for seamless integration with third-party services.'
        }
    ];

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Mobile & Web Development', path: '/mobile-web-development' }
    ];

    return (
        <div className="service-page">
            <SEO
                title="Mobile & Web Development Services | Stadnet Technologies"
                description="Professional mobile and web development services in Ghana. Build cutting-edge applications with React, Node.js, and modern technologies."
                keywords="mobile development, web development, React, Node.js, Ghana"
            />

            <Breadcrumb items={breadcrumbItems} />

            <Hero
                title="Mobile & Web Development"
                subtitle="Build powerful applications that engage users and drive business growth"
                ctaText="Start Your Project"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Crafting Digital Experiences</h2>
                        <p>
                            At Stadnet Technologies, we specialize in creating cutting-edge mobile and web applications
                            that combine stunning design with robust functionality. Our team of experienced developers
                            uses the latest technologies and best practices to deliver solutions that exceed expectations.
                        </p>
                    </div>

                    <h3 className="text-center mb-lg">What We Offer</h3>
                    <div className="grid grid-3">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card glass-card" style={{ animationDelay: `${index * 100}ms` }}>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileWebDev;
