import Hero from '../components/Hero';
import './ServicePage.css';

const ProductDesign = () => {
    const features = [
        {
            title: 'UI/UX Design',
            description: 'Intuitive user interfaces and delightful user experiences that keep users engaged.'
        },
        {
            title: 'User Research',
            description: 'Data-driven insights about your users to inform design decisions and improve outcomes.'
        },
        {
            title: 'Prototyping',
            description: 'Interactive prototypes to validate design concepts before development begins.'
        },
        {
            title: 'Design Systems',
            description: 'Comprehensive design systems that ensure consistency across all touchpoints.'
        },
        {
            title: 'Usability Testing',
            description: 'Test and refine designs with real users to ensure optimal usability and satisfaction.'
        },
        {
            title: 'Mobile App Design',
            description: 'Native and responsive designs optimized for mobile devices and tablets.'
        }
    ];

    return (
        <div className="service-page">
            <Hero
                title="Product Design"
                subtitle="Design digital products that users love and businesses thrive on"
                ctaText="Discuss Your Product"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">User-Centered Design</h2>
                        <p>
                            We believe great product design starts with understanding users. Our design process combines
                            creativity with data-driven insights to create products that are not only beautiful but also
                            functional and easy to use.
                        </p>
                    </div>

                    <h3 className="text-center mb-lg">Design Expertise</h3>
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

export default ProductDesign;
