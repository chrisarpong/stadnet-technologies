import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaServer, FaRobot, FaProjectDiagram, FaDigitalTachograph, FaDatabase, FaCode } from 'react-icons/fa';
import './ServicePage.css';
import Breadcrumb from '../components/Breadcrumb';


const Engineering = () => {
    const features = [
        {
            title: 'Legacy System Modernization',
            description: 'Transform outdated systems into modern, efficient applications without disrupting operations.',
            icon: <FaServer />
        },
        {
            title: 'Process Automation',
            description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.',
            icon: <FaRobot />
        },
        {
            title: 'Enterprise Integration',
            description: 'Connect disparate systems and applications for seamless data flow across your organization.',
            icon: <FaProjectDiagram />
        },
        {
            title: 'Digital Transformation',
            description: 'Comprehensive digitization strategies to modernize your entire business operation.',
            icon: <FaDigitalTachograph />
        },
        {
            title: 'Data Migration',
            description: 'Safe and efficient migration of data from legacy systems to modern platforms.',
            icon: <FaDatabase />
        },
        {
            title: 'Custom Software Development',
            description: 'Bespoke software solutions designed to address your unique business challenges.',
            icon: <FaCode />
        }
    ];

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Engineering & Digitization', path: '/engineering' }
    ];

    return (
        <div className="service-page">
            <Breadcrumb items={breadcrumbItems} />

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

                    <h3 className="section-title text-center mb-lg">Engineering Services</h3>
                    <InteractiveServiceCards services={features} />
                </div>
            </section>
        </div>
    );
};

export default Engineering;
