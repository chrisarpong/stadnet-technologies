import PropTypes from 'prop-types';
import './Hero.css';

const Hero = ({
    title,
    subtitle,
    ctaText,
    ctaLink,
    backgroundImage,
    height = 'large',
    overlay = true
}) => {
    const heroStyle = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})` }
        : {};

    return (
        <section className={`hero hero-${height}`} style={heroStyle}>
            {overlay && <div className="hero-overlay"></div>}
            <div className="container">
                <div className="hero-content animate-fadeInUp">
                    <h1 className="hero-title">{title}</h1>
                    {subtitle && <p className="hero-subtitle">{subtitle}</p>}

                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    backgroundImage: PropTypes.string,
    height: PropTypes.oneOf(['small', 'medium', 'large']),
    overlay: PropTypes.bool
};

export default Hero;
