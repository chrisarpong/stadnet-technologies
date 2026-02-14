import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import Breadcrumb from '../components/Breadcrumb';
import { FaLightbulb, FaHandshake, FaRocket, FaUsers, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import './About.css';

const About = () => {
    const coreValues = [
        {
            title: 'Innovation',
            description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
            icon: <FaLightbulb />,
            link: null // No link for values, just display
        },
        {
            title: 'Excellence',
            description: 'We are committed to the highest quality in every line of code, design pixel, and client interaction.',
            icon: <FaRocket />,
            link: null
        },
        {
            title: 'Integrity',
            description: 'We build trust through transparency, honesty, and accountability in all our partnerships.',
            icon: <FaShieldAlt />,
            link: null
        },
        {
            title: 'Collaboration',
            description: 'We believe in the power of teamwork, working closely with our clients to achieve shared goals.',
            icon: <FaHandshake />,
            link: null
        },
        {
            title: 'User-Centricity',
            description: 'We put the user at the heart of everything we do, ensuring intuitive and impactful experiences.',
            icon: <FaUsers />,
            link: null
        },
        {
            title: 'Sustainability',
            description: 'We design digital solutions that are sustainable, scalable, and future-proof.',
            icon: <FaLeaf />,
            link: null
        }
    ];

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' }
    ];

    return (
        <div className="about-page">
            <Breadcrumb items={breadcrumbItems} />

            <Hero
                title="About KYNOVA"
                subtitle="Building the future of digital technology, one solution at a time."
                height="medium"
            />

            <section className="section">
                <div className="container">
                    {/* Our Story */}
                    <div className="about-intro glass-light p-xl rounded-lg mb-xl animate-fadeInUp">
                        <h2 className="text-gradient mb-md">Our Story</h2>
                        <div className="story-content">
                            <p className="mb-md">
                                Founded in Accra, Ghana, KYNOVA emerged from a simple yet powerful belief:
                                that technology should be an enabler, not a barrier. What started as a small team of
                                passionate developers has grown into a premier digital transformation agency.
                            </p>
                            <p>
                                We specialize in bridging the gap between complex technical challenges and elegant,
                                user-friendly solutions. Our journey has been defined by a relentless pursuit of
                                innovation and a deep commitment to our clients' success. Today, we partner with
                                businesses across the globe to build digital products that matter.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="mission-vision-grid mb-xl">
                        <div className="mv-card glass-card animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                            <h3 className="text-gradient">Our Mission</h3>
                            <p>
                                To empower businesses with innovative digital solutions that drive growth, efficiency,
                                and meaningful user connections.
                            </p>
                        </div>
                        <div className="mv-card glass-card animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                            <h3 className="text-gradient">Our Vision</h3>
                            <p>
                                To be the leading catalyst for digital transformation in Africa and beyond, known for
                                our technical excellence and human-centric approach.
                            </p>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="core-values-section">
                        <h2 className="section-title text-center mb-md">Our Core Values</h2>
                        <p className="section-subtitle text-center mb-lg">
                            The principles that guide our work and culture
                        </p>
                        <InteractiveServiceCards services={coreValues} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
