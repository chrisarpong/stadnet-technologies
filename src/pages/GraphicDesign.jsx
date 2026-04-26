import Hero from '../components/Hero';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaPencilRuler, FaPalette, FaPrint, FaInstagram, FaBullhorn, FaFilm } from 'react-icons/fa';
import './ServicePage.css';

const GraphicDesign = () => {
    const features = [
        {
            title: 'Brand Identity Design',
            description: 'Create compelling logos, brand guidelines, and visual identities that make your business stand out and resonate with your audience.',
            icon: <FaPalette />
        },
        {
            title: 'UI/UX Design',
            description: 'Design intuitive, user-centered interfaces for web and mobile applications that delight users and drive engagement.',
            icon: <FaPencilRuler />
        },
        {
            title: 'Print Design',
            description: 'Professional brochures, business cards, banners, and all print materials designed with precision and creativity.',
            icon: <FaPrint />
        },
        {
            title: 'Social Media Graphics',
            description: 'Eye-catching social media posts, stories, and campaign visuals optimized for every platform.',
            icon: <FaInstagram />
        },
        {
            title: 'Marketing Materials',
            description: 'Impactful flyers, posters, presentations, and infographics that communicate your message effectively.',
            icon: <FaBullhorn />
        },
        {
            title: 'Motion Graphics',
            description: 'Engaging animated visuals, video intros, and motion design that bring your brand story to life.',
            icon: <FaFilm />
        }
    ];

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Graphic Design', path: '/graphic-design' }
    ];

    return (
        <div className="service-page">
            <SEO
                title="Graphic Design Services | KYNOVA"
                description="Professional graphic design services in Ghana. Brand identity, UI/UX design, print materials, social media graphics, and motion design."
                keywords="graphic design, brand identity, UI/UX design, print design, social media graphics, Ghana"
            />

            <Breadcrumb items={breadcrumbItems} />

            <Hero
                title="Graphic Design"
                subtitle="Stunning visuals that capture your brand essence and engage your audience"
                ctaText="Start Your Project"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Visual Excellence, Delivered</h2>
                        <p>
                            At KYNOVA, our creative team transforms ideas into powerful visual experiences.
                            From brand identity to motion graphics, we craft designs that not only look stunning
                            but drive real business results. Every pixel is placed with purpose, every colour chosen
                            with intention.
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
