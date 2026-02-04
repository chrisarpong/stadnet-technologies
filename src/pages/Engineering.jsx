import Hero from '../components/Hero';
import './ServicePage.css';

const Engineering = () => {
    const features = [
        {
            title: 'Legacy System Modernization',
            description: 'Transform outdated systems into modern, efficient applications without disrupting operations.'
        },
        {
            title: 'Process Automation',
            description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.'
        },
        {
            title: 'Enterprise Integration',
            description: 'Connect disparate systems and applications for seamless data flow across your organization.'
        },
        {
            title: 'Digital Transformation',
            description: 'Comprehensive digitization strategies to modernize your entire business operation.'
        },
        {
            title: 'Data Migration',
            description: 'Safe and efficient migration of data from legacy systems to modern platforms.'
        },
        {
            title: 'Custom Software Development',
            description: 'Bespoke software solutions designed to address your unique business challenges.'
        }
    ];

    return (
        <div className="service-page">
            <Hero
                title="Engineering & Digitization"
                subtitle="Modernize your technology infrastructure for the digital age"
                ctaText="Start Your Transformation"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Engineering Excellence</h2>
                        <p>
                            We help organizations transition from legacy systems to modern, scalable architectures.
                            Our engineering team combines deep technical expertise with industry best practices to
                            deliver digitization solutions that drive operational excellence and business growth.
                        </p>
                    </div>

                    <h3 className="text-center mb-lg">Engineering Services</h3>
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

export default Engineering;
