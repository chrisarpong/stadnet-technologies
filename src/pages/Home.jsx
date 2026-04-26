/**
 * Home Page
 *
 * TODO: Future Improvements
 * -------------------------
 * 1. FAQ Component — FAQ.jsx already exists, add it to this page or Contact page for common questions
 * 2. Blog/Insights Page — Create a blog page for tech articles, case studies, and industry news (great for SEO)
 * 3. Portfolio/Case Studies — Showcase completed projects to build credibility with potential clients
 * 4. WhatsApp Integration — Add a floating WhatsApp chat button for instant client communication (common in Ghana)
 * 5. Scroll-Triggered Animations — Add AOS (Animate On Scroll) library or Intersection Observer for section animations
 * 6. Open Graph Images — Add og:image meta tags for proper social media previews on WhatsApp, LinkedIn, Twitter
 */

import SEO from '../components/SEO';
import ParallaxHero from '../components/ParallaxHero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';

import './Home.css';

const Home = () => {
    const services = [
        {
            title: 'Mobile & Web Development',
            description: 'Build cutting-edge mobile and web applications with modern technologies and best practices for optimal performance.',
            link: '/mobile-web-development',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
                    <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Cloud Computing',
            description: 'Leverage the power of cloud infrastructure for scalable, secure, and cost-effective solutions tailored to your business.',
            link: '/cloud-computing',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: 'Graphic Design',
            description: 'Create stunning visual identities and designs that capture your brand essence and engage your audience effectively.',
            link: '/graphic-design',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },

    const trustSignals = [
        {
            metric: '40% faster',
            label: 'reporting cycles',
            detail: 'from a connected operations visibility platform'
        },
        {
            metric: 'Cross-functional',
            label: 'delivery leadership',
            detail: 'spanning strategy, systems, cloud, and execution'
        },
        {
            metric: 'Phased',
            label: 'launch approach',
            detail: 'built to create visibility early and reduce delivery risk'
        }
    ];

    const trustNotes = [
        {
            title: 'Built around real operating pressure',
            description: 'We focus on delivery bottlenecks, reporting drag, and fragmented handoffs that slow teams down.'
        },
        {
            title: 'One partner across strategy and execution',
            description: 'Instead of splitting planning from implementation, KYNOVA helps teams move from decision to delivery in one flow.'
        }
    ];

    const process = [
        {
            title: 'Consulting',
            description: 'Strategic IT consulting services to guide your digital transformation and optimize your technology investments.',
            link: '/consulting',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                    <circle cx="9" cy="7" r="4" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: 'Engineering & Digitization',
            description: 'Transform legacy systems with modern engineering practices and comprehensive digitization strategies.',
            link: '/engineering',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="16 18 22 12 16 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="8 6 2 12 8 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <div className="home-page">
            <SEO
                title="Home"
                description="KYNOVA - Leading provider of mobile & web development, cloud computing, graphic design, product design, consulting, and engineering services in Ghana."
                keywords="IT solutions, web development, mobile apps, cloud computing, graphic design, product design, consulting, engineering, Ghana, Accra"
            />

            <section className="home-hero">
                <div className="container">
                    <div className="home-hero-layout">
                        <div className="home-hero-copy" data-aos="fade-up">
                            <span className="home-tag">Managed delivery for modern organisations</span>
                            <h1>On-demand digital transformation teams, ready to deliver.</h1>
                            <p className="home-hero-subtitle">
                                Move faster with a managed team that helps you modernise systems, build better platforms,
                                automate operations, and turn digital ambition into measurable progress.
                            </p>
                            <div className="home-hero-actions">
                                <Link className="btn btn-primary btn-large" to="/contact">Book a consultation</Link>
                                <a className="btn btn-secondary btn-large" href="#trust-signals">See delivery proof</a>
                            </div>
                            <div className="home-hero-trust-list">
                                <span><FaCheckCircle /> Strategy, delivery, and technical execution in one team</span>
                                <span><FaCheckCircle /> Practical support for internal platforms, cloud, and workflow modernization</span>
                                <span><FaCheckCircle /> Clear delivery rhythms designed for stakeholder visibility</span>
                            </div>
                        </div>

                        <div className="home-hero-visual" data-aos="fade-left">
                            <div className="home-hero-mesh"></div>
                            <div className="home-hero-card home-stat-card">
                                <span>Execution-first</span>
                                <strong>Strategy, build, automation, and insight in one delivery model.</strong>
                            </div>
                            <div className="home-hero-card home-play-card">
                                <div className="home-play-button"><FaPlay /></div>
                                <p>See how managed delivery helps teams ship faster without building everything in-house.</p>
                            </div>
                            <div className="home-hero-card home-mini-grid">
                                <div>
                                    <strong>Faster</strong>
                                    <span>clearer delivery cycles</span>
                                </div>
                                <div>
                                    <strong>Smarter</strong>
                                    <span>systems and workflows</span>
                                </div>
                                <div>
                                    <strong>Safer</strong>
                                    <span>modern operational foundations</span>
                                </div>
                                <div>
                                    <strong>Stronger</strong>
                                    <span>decision support and visibility</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-logo-band" data-aos="fade-up">
                        {clientLogos.map((logo) => (
                            <span key={logo} className="home-logo-item">{logo}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section home-trust" id="trust-signals">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="home-mini-tag">Why teams trust the model</span>
                        <h2 className="section-title">Proof points that help stakeholders say yes faster.</h2>
                        <p className="section-subtitle">
                            Bring decision-makers into the conversation with clearer evidence of delivery value,
                            execution structure, and the kind of outcomes this model is built to unlock.
                        </p>
                    </div>

                    <div className="home-trust-grid">
                        {trustSignals.map((signal, index) => (
                            <article className="home-trust-card" key={signal.label} data-aos="fade-up" data-aos-delay={index * 100}>
                                <strong>{signal.metric}</strong>
                                <span>{signal.label}</span>
                                <p>{signal.detail}</p>
                            </article>
                        ))}
                    </div>

                    <div className="home-trust-notes">
                        {trustNotes.map((note, index) => (
                            <article className="home-trust-note" key={note.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="home-center-cta">
                        <Link className="btn btn-primary" to="/contact">Book a consultation</Link>
                    </div>
                </div>
            </section>

            <section className="section home-problem">
                <div className="container">
                    <div className="home-two-col">
                        <div className="home-media-card" data-aos="fade-right">
                            <div className="home-media-screen">
                                <div className="home-media-badge">Why this model works</div>
                                <h3>Vetting, hiring, and coordinating the right digital talent takes time.</h3>
                                <p>
                                    When organisations need to move, internal capacity gaps can slow product progress,
                                    cloud modernization, and workflow redesign. The homepage now mirrors Ishango&apos;s
                                    direct pain-to-solution structure much more closely.
                                </p>
                            </div>
                        </div>

                        <div className="home-problem-copy" data-aos="fade-left">
                            <h2 className="section-title">Get the expertise you need without the drag of building everything in-house.</h2>
                            <p className="section-subtitle">
                                KYNOVA gives teams a clearer way to execute digital work across product,
                                infrastructure, automation, and operational insight so priorities keep moving.
                            </p>
                            <ul className="home-check-list">
                                <li><FaCheckCircle /> Product, platform, and workflow delivery under one coordinated approach</li>
                                <li><FaCheckCircle /> Practical modernization support shaped around business outcomes</li>
                                <li><FaCheckCircle /> Execution rhythms built for visibility, trust, and iteration</li>
                            </ul>
                            <Link className="btn btn-primary" to="/contact">Book a consultation</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section home-experts">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Expert-Led Project Delivery</h2>
                        <p className="section-subtitle">
                            Projects benefit from leadership experience across strategy, systems, cloud, and execution design.
                        </p>
                    </div>

                    <div className="home-company-strip" data-aos="fade-up">
                        <span>Enterprise delivery</span>
                        <span>Cloud modernization</span>
                        <span>Workflow automation</span>
                        <span>Digital platforms</span>
                        <span>Transformation strategy</span>
                    </div>

                    <div className="home-leader-grid">
                        {leaders.map((leader, index) => (
                            <article className="home-leader-card" key={leader.name} data-aos="fade-up" data-aos-delay={index * 100}>
                                <img
                                    className="home-avatar-image"
                                    src={leader.image.src}
                                    srcSet={leader.image.srcSet}
                                    sizes={leader.image.sizes}
                                    width={leader.image.width}
                                    height={leader.image.height}
                                    alt={leader.name}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <h3>{leader.name}</h3>
                                <p className="home-leader-role">{leader.role}</p>
                                <p>{leader.summary}</p>
                                <p>{leader.detail}</p>
                                <div className="home-leader-links">
                                    <a href={`mailto:${leader.email}`} aria-label={`Email ${leader.name}`}>
                                        <FaEnvelope />
                                        <span>Email</span>
                                    </a>
                                    {leader.linkedin && (
                                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${leader.name} on LinkedIn`}>
                                            <FaLinkedinIn />
                                            <span>LinkedIn</span>
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section home-quote-banner">
                <div className="container">
                    <div className="home-quote-shell" data-aos="fade-up">
                        <h2>&ldquo;Meeting time-sensitive delivery goals requires strong execution and reliable outcomes. That is the standard we build around.&rdquo;</h2>
                        <p>KYNOVA delivery principle</p>
                    </div>
                </div>
            </section>

            <section className="section home-solutions">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="home-mini-tag">Our solutions</span>
                        <h2 className="section-title">How We Can Help You</h2>
                    </div>

                    <div className="home-solution-grid">
                        {solutions.map((solution, index) => (
                            <article className="home-solution-card home-solution-card-link" key={solution.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <img
                                    className="home-card-image"
                                    src={solution.image.src}
                                    srcSet={solution.image.srcSet}
                                    sizes={solution.image.sizes}
                                    width={solution.image.width}
                                    height={solution.image.height}
                                    alt={solution.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                                <Link className="home-solution-link" to={solution.path}>Learn more</Link>
                            </article>
                        ))}
                    </div>

                    <div className="home-center-cta">
                        <Link className="btn btn-primary" to="/contact">Book a consultation</Link>
                    </div>
                </div>
            </section>

            <section className="section home-domains">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="home-mini-tag">Our domain expertise</span>
                        <h2 className="section-title">What We Do Best</h2>
                    </div>

                    <div className="home-domain-grid">
                        {domains.map((domain) => {
                            const isOpen = Boolean(openDomains[domain.title]);

                            return (
                            <article className={`home-domain-card ${isOpen ? 'open' : ''}`} key={domain.title}>
                                <img
                                    className="home-card-image home-card-image-small"
                                    src={domain.image.src}
                                    srcSet={domain.image.srcSet}
                                    sizes={domain.image.sizes}
                                    width={domain.image.width}
                                    height={domain.image.height}
                                    alt={domain.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <button
                                    type="button"
                                    className="home-domain-toggle"
                                    onClick={() => setOpenDomains((current) => ({
                                        ...current,
                                        [domain.title]: !current[domain.title]
                                    }))}
                                    aria-expanded={isOpen}
                                >
                                    <div className="home-solution-heading">
                                        <div className="home-domain-icon">{domain.icon}</div>
                                        <div>
                                            <h3>{domain.title}</h3>
                                        </div>
                                    </div>
                                    <span className="home-solution-plus" aria-hidden="true">{isOpen ? '-' : '+'}</span>
                                </button>
                                <div className="home-domain-body">
                                    <p>{domain.description}</p>
                                    <Link to="/about">Learn more</Link>
                                </div>
                            </article>
                            );
                        })}
                    </div>

                    <div className="home-center-cta">
                        <Link className="btn btn-primary" to="/contact">Book a consultation</Link>
                    </div>
                </div>
            </section>
            {/* Parallax Hero */}
            <ParallaxHero
                title="Your Partner in Digital Innovation"
                subtitle="We provide cutting-edge technology solutions that drive growth and transform businesses across Africa"
            />

            {/* Interactive Service Cards */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="text-gradient">Our Services</h2>
                        <p className="section-subtitle">
                            Comprehensive technology solutions tailored to drive your business forward
                        </p>
                    </div>

                    <div className="home-impact-grid">
                        {impactCards.map((card, index) => (
                            <article className="home-impact-card" key={card.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <img
                                    className="home-impact-thumb"
                                    src={card.image.src}
                                    srcSet={card.image.srcSet}
                                    sizes={card.image.sizes}
                                    width={card.image.width}
                                    height={card.image.height}
                                    alt={card.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="home-impact-content">
                                    <span>{card.sector}</span>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <ul>
                                        {card.metrics.map((metric) => (
                                            <li key={metric}>{metric}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="home-center-cta">
                        <Link className="home-inline-link" to="/about">
                            View more capability detail <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section home-process">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="home-mini-tag">How does it work?</span>
                        <h2 className="section-title">Our Process</h2>
                    </div>

                    <div className="home-process-grid">
                        {process.map((item, index) => (
                            <article className="home-process-card" key={item.step} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="home-process-number">{item.step}</div>
                                <div className="home-process-icon">
                                    {index === 0 && <FaUsers />}
                                    {index === 1 && <FaRobot />}
                                    {index === 2 && <FaChartLine />}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="home-center-cta">
                        <Link className="btn btn-primary" to="/contact">Book a consultation</Link>
                    </div>
                    <InteractiveServiceCards services={services} />
                </div>
            </section>




            <section className="section home-newsletter">
                <div className="container">
                    <div className="home-newsletter-shell text-center" data-aos="fade-up">
                        <span className="home-mini-tag">Stay connected</span>
                        <h2 className="section-title">Subscribe for practical digital transformation insights.</h2>
                        <p className="section-subtitle">
                            Get research-backed thinking on operations, cloud, automation, product delivery, and smarter execution.
                        </p>
                        <div className="home-newsletter-actions">
                            <Link className="btn btn-primary btn-large" to="/contact">Book a consultation</Link>
                            <Link className="btn btn-secondary btn-large" to="/about">Learn more about us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
