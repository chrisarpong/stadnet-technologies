import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaMobileAlt, FaCloud, FaPencilRuler, FaLayerGroup, FaHandshake, FaCogs } from 'react-icons/fa';

const Solutions = () => {
    const allSolutions = [
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
            title: 'Graphic Design',
            description: 'Brand identity, logo design, marketing materials, and visual content that tells your story.',
            link: '/graphic-design',
            icon: <FaPencilRuler />
        },
        {
            title: 'Product Design',
            description: 'UI/UX design, prototyping, user research, and design systems for digital products.',
            link: '/product-design',
            icon: <FaLayerGroup />
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

    return (
        <div className="solutions-page">
            <Hero
                title="Our Solutions"
                subtitle="Comprehensive IT services tailored to your business needs"
                height="medium"
            />

            <section className="interactive-services">
                <div className="container">
                    <InteractiveServiceCards services={allSolutions} />
                </div>
            </section>
        </div>
    );
};

export default Solutions;
