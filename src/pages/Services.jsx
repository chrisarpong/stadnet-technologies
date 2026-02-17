import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import Breadcrumb from '../components/Breadcrumb';
import { FaMobileAlt, FaCloud, FaHandshake, FaCogs } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: 'Mobile & Web Development',
            description: 'Native and cross-platform mobile apps, progressive web applications, and responsive websites built with cutting-edge technology.',
            link: '/mobile-web-development',
            icon: <FaMobileAlt />
        },
        {
            title: 'Cloud Computing',
            description: 'Cloud migration, infrastructure management, serverless architecture, and cloud-native application development.',
            link: '/cloud-computing',
            icon: <FaCloud />
        },
        {
            title: 'Consulting',
            description: 'Strategic technology consulting, digital transformation roadmaps, and IT optimization strategies.',
            link: '/consulting',
            icon: <FaHandshake />
        },
        {
            title: 'Engineering & Digitization',
            description: 'Legacy system modernization, process automation, and enterprise digitization solutions.',
            link: '/engineering',
            icon: <FaCogs />
        }
    ];

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' }
    ];

    return (
        <div className="services-page">
            <Breadcrumb items={breadcrumbItems} />

            <Hero
                title="Our Services"
                subtitle="Comprehensive IT services tailored to your business needs"
                height="medium"
            />

            <section className="interactive-services">
                <div className="container">
                    <InteractiveServiceCards services={services} />
                </div>
            </section>
        </div>
    );
};

export default Services;
