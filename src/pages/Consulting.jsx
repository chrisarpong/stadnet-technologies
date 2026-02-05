import Hero from '../components/Hero';
import './ServicePage.css';
import Breadcrumb from '../components/Breadcrumb';


const Consulting = () => {
    const features = [
        {
            title: 'Digital Strategy',
            description: 'Develop comprehensive digital strategies aligned with your business objectives.'
        },
        {
            title: 'Technology Assessment',
            description: 'Evaluate your current technology stack and identify opportunities for improvement.'
        },
        {
            title: 'IT Roadmapping',
            description: 'Create detailed technology roadmaps to guide your digital transformation journey.'
        },
        {
            title: 'Process Optimization',
            description: 'Streamline business processes with technology solutions that increase efficiency.'
        },
        {
            title: 'Vendor Selection',
            description: 'Expert guidance in selecting the right technology partners and solutions.'
        },
        {
            title: 'Change Management',
            description: 'Support your organization through technology transitions with minimal disruption.'
        }
    ];

    return (
        <div className="service-page">
            <Hero
                title="IT Consulting Services"
                subtitle="Strategic guidance to navigate your digital transformation"
                ctaText="Schedule Consultation"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Expert Strategic Guidance</h2>
                        <p>
                            Our consulting services help organizations make informed technology decisions that drive
                            business value. With years of industry experience, we provide strategic insights and
                            practical recommendations tailored to your unique challenges and goals.
                        </p>
                    </div>

                    <h3 className="text-center mb-lg">Consulting Services</h3>
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

export default Consulting;
