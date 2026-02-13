import { useState } from 'react';
import './FAQ.css';
import PropTypes from 'prop-types';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} data-aos="fade-up">
            <button className="faq-question" onClick={onClick}>
                <span>{question}</span>
                <svg
                    className="faq-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What services does KYNOVA offer?",
            answer: "We offer a comprehensive range of IT services including Mobile & Web Development, Cloud Computing, Graphic Design, Product Design, IT Consulting, and Engineering & Digitization services. Our team specializes in creating custom solutions tailored to your business needs."
        },
        {
            question: "How long does it take to develop a mobile or web application?",
            answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while a complex mobile app or web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
        },
        {
            question: "Do you provide ongoing support after project completion?",
            answer: "Yes! We offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally. This includes bug fixes, updates, security patches, and feature enhancements."
        },
        {
            question: "What industries do you work with?",
            answer: "We work with businesses across various industries including e-commerce, healthcare, education, finance, logistics, and more. Our diverse experience allows us to understand unique industry challenges and deliver effective solutions."
        },
        {
            question: "How do you ensure project confidentiality?",
            answer: "We take confidentiality very seriously. All our clients sign Non-Disclosure Agreements (NDAs), and we follow strict data protection protocols. Your intellectual property and sensitive information are always secure with us."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote tailored to your specific needs."
        },
        {
            question: "Can you help modernize our existing systems?",
            answer: "Absolutely! We specialize in digital transformation and system modernization. Whether you need to migrate to cloud infrastructure, update legacy systems, or improve existing applications, our engineering team can help."
        },
        {
            question: "Do you work with international clients?",
            answer: "Yes, we serve clients both locally in Ghana and internationally. We use modern collaboration tools and communication platforms to ensure smooth project delivery regardless of location."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section section section-white">
            <div className="container-narrow">
                <div className="section-header text-center" data-aos="fade-up">
                    <h2 className="text-gradient">Frequently Asked Questions</h2>
                    <p className="section-subtitle">
                        Find answers to common questions about our services
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>

                <div className="faq-cta" data-aos="fade-up">
                    <p>Still have questions?</p>
                    <a href="/contact" className="btn btn-primary">Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
