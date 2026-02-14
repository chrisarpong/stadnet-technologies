import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Breadcrumb from '../components/Breadcrumb';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        contact_number: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, success: false, error: false, message: '' });

        try {
            // EmailJS configuration with your credentials
            const serviceId = 'service_fv1sml6';
            const templateId = 'template_akvlspq';
            const publicKey = 'BYTukTFrH6diIXbZt';

            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            setFormStatus({
                loading: false,
                success: true,
                error: false,
                message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
            });

            // Reset form
            setFormData({ user_name: '', user_email: '', contact_number: '', subject: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ loading: false, success: false, error: false, message: '' });
            }, 5000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setFormStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Oops! Something went wrong. Please try again or email us directly at info@kynova.com'
            });
        }
    };

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <div className="contact-page">
            <Breadcrumb items={breadcrumbItems} />

            <SEO
                title="Contact Us"
                description="Get in touch with KYNOVA. We're here to help with your IT and digital transformation needs."
                keywords="contact KYNOVA, IT support Ghana, web development inquiry, cloud computing consultation"
            />

            <Hero
                title="Get In Touch"
                subtitle="Let's discuss how we can help transform your business"
                height="small"
            />

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info" data-aos="fade-right">
                            <h3 className="mb-md">Contact Information</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 21C15 17 21 13.8571 21 9C21 4.02944 16.9706 1 12 1C7.02944 1 3 4.02944 3 9C3 13.8571 9 17 12 21Z" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5>Our Office</h5>
                                        <p>Ministry of Foreign Affairs<br />No. 1 Revenue Close, Off Liberation Road<br />Accra, Ghana</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 6L9 10.5L12 12.5L15 10.5L21 6M4.5 19H19.5C20.0523 19 20.5 18.5523 20.5 18V6C20.5 5.44772 20.0523 5 19.5 5H4.5C3.94772 5 3.5 5.44772 3.5 6V18C3.5 18.5523 3.94772 19 4.5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5>Email Us</h5>
                                        <p><a href="mailto:info@kynova.com">info@kynova.com</a></p>
                                        <p><a href="mailto:support@kynova.com">support@kynova.com</a></p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 4L9 7.5L11 9C11 9 11.6 11.4 13.2 13.2C14.8 15 17.2 15.6 17.2 15.6L18.6 17.6L23 23C23 23 21 24 19.2 24C15 24 9.6 21.6 6 18C2.4 14.4 0 9 0 4.8C0 3 1.2 1.2 1.2 1.2L4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5>Call Us</h5>
                                        <p><a href="tel:+233501234567">+233 50 123 4567</a></p>
                                        <p><a href="tel:+233241234567">+233 24 123 4567</a></p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5>Business Hours</h5>
                                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container glass-card" data-aos="fade-left">
                            <h3 className="mb-md">Send Us a Message</h3>

                            {/* Status Messages */}
                            {formStatus.success && (
                                <div className="alert alert-success">
                                    ✓ {formStatus.message}
                                </div>
                            )}
                            {formStatus.error && (
                                <div className="alert alert-error">
                                    ✗ {formStatus.message}
                                </div>
                            )}


                            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="contact_number"
                                        value={formData.contact_number}
                                        onChange={handleChange}
                                        placeholder="+233 50 123 4567"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-large w-100"
                                    disabled={formStatus.loading}
                                >
                                    {formStatus.loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-white cta-section">
                <div className="container-narrow">
                    <div className="cta-content glass-card text-center" data-aos="zoom-in">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Let's discuss how KYNOVA can help you achieve your digital goals
                            with our innovative solutions and expert team.
                        </p>
                        <div className="cta-buttons">
                            <a href="/solutions" className="btn btn-primary btn-large">Explore Services</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="section section-map">
                <div className="container">
                    <h2 className="section-title text-center mb-lg">Find Us</h2>
                    <div className="contact-map">
                        <iframe
                            title="KYNOVA Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9975682851644!2d-0.17424068523755!3d5.573215995943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7b0e8b0f55%3A0x2bce99e2e4c0e0a9!2sMinistry%20of%20Foreign%20Affairs%20%26%20Regional%20Integration!5e0!3m2!1sen!2sgh!4v1707868800000!5m2!1sen!2sgh"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
