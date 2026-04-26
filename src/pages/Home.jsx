import { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    FaArrowRight,
    FaChartLine,
    FaCheckCircle,
    FaLeaf,
    FaLinkedinIn,
    FaEnvelope,
    FaPlay,
    FaRobot,
    FaSeedling,
    FaStethoscope,
    FaUsers,
    FaWarehouse
} from 'react-icons/fa';
import { imageAssets } from '../lib/siteAssets';
import './Home.css';

const Home = () => {
    const [openDomains, setOpenDomains] = useState({});
    const clientLogos = [
        'Enterprise Teams',
        'Public Sector',
        'Healthcare',
        'Fintech',
        'Agribusiness',
        'NGOs',
        'Operations',
        'Growth Ventures'
    ];

    const leaders = [
        {
            name: 'Ama Boateng',
            role: 'Head of Delivery',
            summary: '12+ years leading transformation programs across Africa and Europe.',
            detail: 'Strategy, operations, and cross-functional execution for large digital initiatives.',
            initials: 'AB',
            image: imageAssets.leaderAma,
            email: 'ama.boateng@kynova.com',
            linkedin: null
        },
        {
            name: 'Kwesi Mensah',
            role: 'Lead Solutions Architect',
            summary: '10+ years building cloud platforms, integrations, and internal systems.',
            detail: 'Architecture, engineering leadership, and practical modernization roadmaps.',
            initials: 'KM',
            image: imageAssets.leaderKwesi,
            email: 'kwesi.mensah@kynova.com',
            linkedin: null
        },
        {
            name: 'Naa Adjeley',
            role: 'Senior Product Strategist',
            summary: 'Specialist in service design, product delivery, and digital operating models.',
            detail: 'Brings business clarity to product, process, and stakeholder decisions.',
            initials: 'NA',
            image: imageAssets.leaderNaa,
            email: 'naa.adjeley@kynova.com',
            linkedin: null
        }
    ];

    const solutions = [
        {
            title: 'Mobile & Web Development',
            description: 'Build responsive customer experiences, internal tools, and digital products that are easier to scale and maintain.',
            image: imageAssets.meeting,
            path: '/mobile-web-development'
        },
        {
            title: 'Cloud Computing',
            description: 'Improve reliability, scalability, and release confidence with stronger cloud foundations and modern delivery environments.',
            image: imageAssets.presentation,
            path: '/cloud-computing'
        },
        {
            title: 'Consulting',
            description: 'Shape clearer technology priorities, operating models, and transformation roadmaps with practical strategic guidance.',
            image: imageAssets.team,
            path: '/consulting'
        },
        {
            title: 'Engineering & Digitization',
            description: 'Modernise legacy workflows, connect fragmented systems, and create better execution foundations across operations.',
            image: imageAssets.presentation,
            path: '/engineering'
        },
        {
            title: 'Graphic Design',
            description: 'Create stronger visual systems, product interfaces, and branded materials that help your organisation communicate clearly.',
            image: imageAssets.meeting,
            path: '/graphic-design'
        }
    ];

    const domains = [
        {
            title: 'Industrial Operations',
            description: 'Digitise workflows, monitor assets, and reduce operational inefficiency across distributed teams.',
            icon: <FaWarehouse />,
            image: imageAssets.presentation
        },
        {
            title: 'Healthcare & Life Sciences',
            description: 'Strengthen service systems, reporting, and user-facing platforms that support care delivery.',
            icon: <FaStethoscope />,
            image: imageAssets.meeting
        },
        {
            title: 'Agriculture & Supply Chain',
            description: 'Improve planning, forecasting, visibility, and field operations across production ecosystems.',
            icon: <FaSeedling />,
            image: imageAssets.team
        },
        {
            title: 'Digital & Professional Services',
            description: 'Streamline internal operations, personalize experiences, and improve digital service performance.',
            icon: <FaUsers />,
            image: imageAssets.meeting
        },
        {
            title: 'Sustainability & Green Tech',
            description: 'Support climate and sustainability programs with better tools, measurement, and delivery systems.',
            icon: <FaLeaf />,
            image: imageAssets.presentation
        }
    ];

    const impactCards = [
        {
            title: 'Operations Visibility Platform',
            sector: 'Enterprise Operations',
            metrics: ['40% faster reporting cycles', 'Improved executive visibility', 'Reduced manual reconciliation'],
            description: 'A connected dashboard and workflow setup that gave leadership clearer oversight across teams and milestones.',
            image: imageAssets.presentation
        },
        {
            title: 'Service Delivery Workflow Redesign',
            sector: 'Professional Services',
            metrics: ['Shorter turnaround time', 'Better handoff clarity', 'Stronger process consistency'],
            description: 'A digital workflow redesign that turned fragmented coordination into a more measurable delivery system.',
            image: imageAssets.meeting
        }
    ];

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
            step: '01',
            title: 'Discuss Your Delivery Goals',
            description: 'We start with the business problem, constraints, urgency, and what success should look like.'
        },
        {
            step: '02',
            title: 'Shape the Right Build Approach',
            description: 'We define the right team, scope, milestones, and working rhythm for the outcome you need.'
        },
        {
            step: '03',
            title: 'Launch in Measurable Phases',
            description: 'We deliver in stages, create visibility, and refine based on results instead of guesswork.'
        }
    ];

    const insights = [
        {
            title: 'Designing Smarter Internal Platforms for Growth Teams',
            description: 'How modern internal systems reduce chaos, improve reporting, and support better decision-making.',
            link: '/about',
            image: imageAssets.team
        },
        {
            title: 'What Good Digital Transformation Actually Looks Like',
            description: 'A practical view of transformation that focuses on process clarity, execution, and measurable change.',
            link: '/about',
            image: imageAssets.presentation
        },
        {
            title: 'Where AI and Automation Create Real Business Value',
            description: 'The strongest AI opportunities usually come from workflow bottlenecks, not hype alone.',
            link: '/contact',
            image: imageAssets.meeting
        }
    ];

    return (
        <div className="home-page home-ishango">
            <SEO
                title="Home"
                description="KYNOVA delivers managed digital transformation support through product engineering, cloud modernization, automation, and insight-led execution."
                keywords="KYNOVA, digital transformation, product engineering, cloud modernization, automation, dashboards, Ghana"
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

            <section className="section home-impact">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="home-mini-tag">Real-world impact</span>
                        <h2 className="section-title">Proven Delivery Outcomes</h2>
                        <p className="section-subtitle">
                            We help organisations strengthen operations, reporting, product execution, and cross-team visibility with more intentional digital systems.
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
                </div>
            </section>

            <section className="section home-quote-banner home-quote-banner-secondary">
                <div className="container">
                    <div className="home-quote-shell" data-aos="fade-up">
                        <h2>&ldquo;Building this in-house could take months. A focused managed team helps momentum start much sooner.&rdquo;</h2>
                        <p>Common client reality we designed this page around</p>
                    </div>
                </div>
            </section>

            <section className="section home-insights">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="home-mini-tag">Unlock value from your systems</span>
                        <h2 className="section-title">Insights for Smarter Delivery</h2>
                    </div>

                    <div className="home-insight-grid">
                        {insights.map((item, index) => (
                            <article className="home-insight-card" key={item.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <img
                                    className="home-insight-thumb"
                                    src={item.image.src}
                                    srcSet={item.image.srcSet}
                                    sizes={item.image.sizes}
                                    width={item.image.width}
                                    height={item.image.height}
                                    alt={item.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Link to={item.link}>Read more</Link>
                            </article>
                        ))}
                    </div>
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
