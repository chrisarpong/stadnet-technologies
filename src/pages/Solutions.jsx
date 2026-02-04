import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Solutions = () => {
    const allSolutions = [
        {
            title: 'Mobile & Web Development',
            description: 'Native and cross-platform mobile apps, progressive web applications, and responsive websites built with cutting-edge technology.',
            linkUrl: '/mobile-web-development'
        },
        {
            title: 'Cloud Computing',
            description: 'Cloud migration, infrastructure management, serverless architecture, and cloud-native application development.',
            linkUrl: '/cloud-computing'
        },
        {
            title: 'Graphic Design',
            description: 'Brand identity, logo design, marketing materials, and visual content that tells your story.',
            linkUrl: '/graphic-design'
        },
        {
            title: 'Product Design',
            description: 'UI/UX design, prototyping, user research, and design systems for digital products.',
            linkUrl: '/product-design'
        },
        {
            title: 'Consulting',
            description: 'Strategic technology consulting, digital transformation roadmaps, and IT optimization strategies.',
            linkUrl: '/consulting'
        },
        {
            title: 'Engineering & Digitization',
            description: 'Legacy system modernization, process automation, and enterprise digitization solutions.',
            linkUrl: '/engineering'
        }
    ];

    return (
        <div className="solutions-page">
            <Hero
                title="Our Solutions"
                subtitle="Comprehensive IT services tailored to your business needs"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        {allSolutions.map((solution, index) => (
                            <ServiceCard
                                key={index}
                                title={solution.title}
                                description={solution.description}
                                linkUrl={solution.linkUrl}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
