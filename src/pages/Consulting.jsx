import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaChess, FaSearch, FaMapSigns, FaCogs, FaHandshake, FaExchangeAlt } from 'react-icons/fa';
import './ServicePage.css';
import Breadcrumb from '../components/Breadcrumb';


const Consulting = () => {
    const features = [
        {
            title: 'Digital Strategy',
            description: 'Develop comprehensive digital strategies aligned with your business objectives.',
            icon: <FaChess />
        },
        {
            title: 'Technology Assessment',
            description: 'Evaluate your current technology stack and identify opportunities for improvement.',
            icon: <FaSearch />
        },
        {
            title: 'IT Roadmapping',
            description: 'Create detailed technology roadmaps to guide your digital transformation journey.',
            icon: <FaMapSigns />
        },
        {
            title: 'Process Optimization',
            description: 'Streamline business processes with technology solutions that increase efficiency.',
            icon: <FaCogs />
        },
        {
            title: 'Vendor Selection',
            description: 'Expert guidance in selecting the right technology partners and solutions.',
            icon: <FaHandshake />
        },
        {
            title: 'Change Management',
            description: 'Support your organization through technology transitions with minimal disruption.',
            icon: <FaExchangeAlt />
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

                    <h3 className="section-title text-center mb-lg">Consulting Services</h3>
                    <InteractiveServiceCards services={features} />
                </div>
            </section>
        </div>
    );
};

export default Consulting;
