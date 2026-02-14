import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaFingerprint, FaPenNib, FaFileAlt, FaShareAlt, FaBoxOpen, FaChartPie } from 'react-icons/fa';
import './ServicePage.css';
import Breadcrumb from '../components/Breadcrumb';


const GraphicDesign = () => {
    const features = [
        {
            title: 'Brand Identity',
            description: 'Create a memorable brand identity that reflects your values and resonates with your audience.',
            icon: <FaFingerprint />
        },
        {
            title: 'Logo Design',
            description: 'Professional logo design that captures your brand essence and stands out in the market.',
            icon: <FaPenNib />
        },
        {
            title: 'Marketing Materials',
            description: 'Brochures, flyers, posters, and other print materials that effectively communicate your message.',
            icon: <FaFileAlt />
        },
        {
            title: 'Social Media Graphics',
            description: 'Eye-catching visuals optimized for various social media platforms to boost engagement.',
            icon: <FaShareAlt />
        },
        {
            title: 'Packaging Design',
            description: 'Product packaging that attracts customers and enhances shelf appeal.',
            icon: <FaBoxOpen />
        },
        {
            title: 'Infographics',
            description: 'Data visualization and infographics that make complex information easy to understand.',
            icon: <FaChartPie />
        }
    ];

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Graphic Design', path: '/graphic-design' }
    ];

    return (
        <div className="service-page">
            <Breadcrumb items={breadcrumbItems} />

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

                    <h3 className="section-title text-center mb-lg">Design Services</h3>
                    <InteractiveServiceCards services={features} />
                </div>
            </section>
        </div>
    );
};

export default GraphicDesign;
