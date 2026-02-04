import Hero from '../components/Hero';
import './Careers.css';

const Careers = () => {
    const positions = [
        {
            title: 'Senior Full Stack Developer',
            location: 'Accra, Ghana / Remote',
            type: 'Full-time',
            description: 'Join our development team to build cutting-edge web and mobile applications using React, Node.js, and cloud technologies.'
        },
        {
            title: 'UI/UX Designer',
            location: 'Accra, Ghana',
            type: 'Full-time',
            description: 'Create beautiful, user-centered designs for web and mobile applications using modern design tools and methodologies.'
        },
        {
            title: 'Cloud Solutions Architect',
            location: 'Accra, Ghana / Remote',
            type: 'Full-time',
            description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients using AWS, Azure, and GCP.'
        },
        {
            title: 'DevOps Engineer',
            location: 'Remote',
            type: 'Full-time',
            description: 'Build and maintain CI/CD pipelines, automate infrastructure, and ensure system reliability and performance.'
        },
        {
            title: 'Digital Marketing Specialist',
            location: 'Accra, Ghana',
            type: 'Full-time',
            description: 'Drive our digital marketing initiatives across social media, content marketing, and SEO to grow our brand presence.'
        },
        {
            title: 'Project Manager',
            location: 'Accra, Ghana',
            type: 'Full-time',
            description: 'Lead cross-functional teams to deliver technology projects on time and within budget while exceeding client expectations.'
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

                    <h3 className="text-center mb-lg">Open Positions</h3>
                    <div className="positions-grid">
                        {positions.map((position, index) => (
                            <div key={index} className="position-card glass-card" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="position-header">
                                    <h4>{position.title}</h4>
                                    <span className="position-type">{position.type}</span>
                                </div>
                                <div className="position-meta">
                                    <span className="position-location">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M8 14C10 11.3333 14 9.05714 14 6C14 2.90729 11.3137 1 8 1C4.68629 1 2 2.90729 2 6C2 9.05714 6 11.3333 8 14Z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                        {position.location}
                                    </span>
                                </div>
                                <p className="position-description">{position.description}</p>
                                <a href="/contact" className="btn btn-primary">Apply Now</a>
                            </div>
                        ))}
                    </div>

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
