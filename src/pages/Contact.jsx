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
            // EmailJS configuration
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

            setFormData({ user_name: '', user_email: '', contact_number: '', subject: '', message: '' });

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
                keywords="contact KYNOVA, IT support Ghana, web development inquiry"
            />

            <Hero
                title="Get In Touch"
                subtitle="We look forward to collaborating with you"
                height="small"
                overlay={true}
            />

            <section className="section contact-intro-section">
                <div className="container text-center">
                    <h2 className="section-title">We look forward to collaborating with you</h2>
                    <p className="section-subtitle">You can choose from the options below how best we can help.</p>
                </div>
            </section>

            <section className="section contact-options-section">
                <div className="container">
                    <div className="contact-options-grid">
                        {/* Option 1: General Enquiries */}
                        <div className="contact-option-card glass-card animate-fadeInUp">
                            <div className="icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                            </div>
                            <h3>General Enquiries</h3>
                            <div className="contact-details">
                                <p>
                                    <strong>Email:</strong><br />
                                    <a href="mailto:info@kynova.com">info@kynova.com</a>
                                </p>
                                <p>
                                    <strong>Phone:</strong><br />
                                    <a href="tel:+233201876093">+233 20 187 6093</a><br />
                                    <a href="tel:+2348034579536">+234 803 457 9536</a>
                                </p>
                            </div>
                        </div>

                        {/* Option 2: Locate Us */}
                        <div className="contact-option-card glass-card animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                            <div className="icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <h3>Locate Us</h3>
                            <div className="contact-details">
                                <p>
                                    Ministry of Foreign Affairs<br />
                                    No. 1 Revenue Close, Off Liberation Road<br />
                                    Accra, Ghana
                                </p>
                                <div className="mini-map">
                                    <iframe
                                        title="Office Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9975682851644!2d-0.17424068523755!3d5.573215995943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7b0e8b0f55%3A0x2bce99e2e4c0e0a9!2sMinistry%20of%20Foreign%20Affairs%20%26%20Regional%20Integration!5e0!3m2!1sen!2sgh!4v1707868800000!5m2!1sen!2sgh"
                                        width="100%"
                                        height="150"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section contact-form-section section-alt">
                <div className="container">
                    <div className="form-wrapper glass-card">
                        <div className="text-center mb-lg">
                            <h2 className="section-title">For specific questions, get in touch below</h2>
                            <p className="section-subtitle">Fill out the form and our team will get back to you shortly.</p>
                        </div>

                        {formStatus.success && (
                            <div className="alert alert-success">✓ {formStatus.message}</div>
                        )}
                        {formStatus.error && (
                            <div className="alert alert-error">✗ {formStatus.message}</div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
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
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="contact_number"
                                        value={formData.contact_number}
                                        onChange={handleChange}
                                        placeholder="+233..."
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
                                        placeholder="Inquiry about..."
                                    />
                                </div>
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
                                    placeholder="How can we help you?"
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
            </section>
        </div>
    );
};

export default Contact;
