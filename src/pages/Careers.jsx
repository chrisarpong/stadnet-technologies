import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaLaptopCode, FaPaintBrush, FaCloud, FaServer, FaBullhorn, FaTasks } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
    const positions = [
        {
            title: 'Senior Full Stack Developer',
            description: 'Accra, Ghana / Remote • Full-time • Join our development team to build cutting-edge web and mobile applications using React, Node.js, and cloud technologies.',
            icon: <FaLaptopCode />,
            link: '/contact',
            linkText: 'Apply Now'
        },
        {
            title: 'UI/UX Designer',
            description: 'Accra, Ghana • Full-time • Create beautiful, user-centered designs for web and mobile applications using modern design tools and methodologies.',
            icon: <FaPaintBrush />,
            link: '/contact',
            linkText: 'Apply Now'
        },
        {
            title: 'Cloud Solutions Architect',
            description: 'Accra, Ghana / Remote • Full-time • Design and implement scalable cloud infrastructure solutions for enterprise clients using AWS, Azure, and GCP.',
            icon: <FaCloud />,
            link: '/contact',
            linkText: 'Apply Now'
        },
        {
            title: 'DevOps Engineer',
            description: 'Remote • Full-time • Build and maintain CI/CD pipelines, automate infrastructure, and ensure system reliability and performance.',
            icon: <FaServer />,
            link: '/contact',
            linkText: 'Apply Now'
        },
        {
            title: 'Digital Marketing Specialist',
            description: 'Accra, Ghana • Full-time • Drive our digital marketing initiatives across social media, content marketing, and SEO to grow our brand presence.',
            icon: <FaBullhorn />,
            link: '/contact',
            linkText: 'Apply Now'
        },
        {
            title: 'Project Manager',
            description: 'Accra, Ghana • Full-time • Lead cross-functional teams to deliver technology projects on time and within budget while exceeding client expectations.',
            icon: <FaTasks />,
            link: '/contact',
            linkText: 'Apply Now'
        }
    ];

    return (
        <div className="careers-page">
            <Hero
                title="Join Our Team"
                subtitle="Be part of an innovative team shaping the future of technology"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="careers-intro glass-light p-xl rounded-lg mb-xl animate-fadeInUp">
                        <h2 className="text-gradient mb-md">Why Work at Stadnet?</h2>
                        <p>
                            At Stadnet Technologies, we believe in fostering a culture of innovation, collaboration,
                            and continuous learning. We offer competitive compensation, flexible work arrangements,
                            professional development opportunities, and a supportive environment where your ideas matter.
                        </p>
                    </div>

                    <h3 className="section-title text-center mb-lg">Open Positions</h3>
                    <InteractiveServiceCards services={positions} />

                    <div className="no-position-cta glass-light p-lg rounded-lg mt-xl text-center">
                        <h4>Don't see the right position?</h4>
                        <p className="mb-md">We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.</p>
                        <a href="/contact" className="btn btn-secondary">Send Your Resume</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
