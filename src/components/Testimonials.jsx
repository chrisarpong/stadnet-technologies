import './Testimonials.css';
import PropTypes from 'prop-types';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Mensah",
            position: "CEO",
            company: "Tech Innovations Ghana",
            image: "https://ui-avatars.com/api/?name=John+Mensah&background=0066CC&color=fff&size=80",
            quote: "KYNOVA transformed our digital infrastructure completely. Their cloud solutions helped us scale efficiently while reducing costs by 40%. Highly professional team!",
            rating: 5
        },
        {
            name: "Ama Osei",
            position: "Product Manager",
            company: "Digital Solutions Ltd",
            image: "https://ui-avatars.com/api/?name=Ama+Osei&background=00A896&color=fff&size=80",
            quote: "Working with KYNOVA was a game-changer for our mobile app development. Their expertise in React Native delivered a beautiful, performant app that exceeded our expectations.",
            rating: 5
        },
        {
            name: "Kwame Asante",
            position: "Founder",
            company: "StartUp Hub",
            image: "https://ui-avatars.com/api/?name=Kwame+Asante&background=0099FF&color=fff&size=80",
            quote: "The consulting services from KYNOVA helped us make critical technology decisions. Their team provided clear, actionable insights that saved us time and money.",
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>
                ★
            </span>
        ));
    };

    return (
        <section className="testimonials-section section" data-aos="fade-up">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-gradient">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Trusted by businesses across Ghana and beyond
                    </p>
                </div>

                <div className="testimonials-grid grid grid-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="stars-rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <div className="testimonial-author">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="author-image"
                                />
                                <div className="author-info">
                                    <h5 className="author-name">{testimonial.name}</h5>
                                    <p className="author-position">
                                        {testimonial.position}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

Testimonials.propTypes = {
    // No props for now, but keeping for future expansion
};

export default Testimonials;
