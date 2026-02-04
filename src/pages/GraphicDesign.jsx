import Hero from '../components/Hero';
import './ServicePage.css';

const GraphicDesign = () => {
    const features = [
        {
            title: 'Brand Identity',
            description: 'Create a memorable brand identity that reflects your values and resonates with your audience.'
        },
        {
            title: 'Logo Design',
            description: 'Professional logo design that captures your brand essence and stands out in the market.'
        },
        {
            title: 'Marketing Materials',
            description: 'Brochures, flyers, posters, and other print materials that effectively communicate your message.'
        },
        {
            title: 'Social Media Graphics',
            description: 'Eye-catching visuals optimized for various social media platforms to boost engagement.'
        },
        {
            title: 'Packaging Design',
            description: 'Product packaging that attracts customers and enhances shelf appeal.'
        },
        {
            title: 'Infographics',
            description: 'Data visualization and infographics that make complex information easy to understand.'
        }
    ];

    return (
        <div className="service-page">
            <Hero
                title="Graphic Design Services"
                subtitle="Visual storytelling that captures attention and inspires action"
                ctaText="View Portfolio"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Design That Makes an Impact</h2>
                        <p>
                            Our graphic design team creates visually stunning designs that communicate your brand message
                            effectively. From corporate identity to marketing collateral, we deliver designs that not only
                            look great but also drive results.
                        </p>
                    </div>

                    <h3 className="text-center mb-lg">Design Services</h3>
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

export default GraphicDesign;
