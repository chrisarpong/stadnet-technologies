import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 12,
        scale: 0.995
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: {
        opacity: 0,
        y: -8,
        scale: 0.998,
        transition: {
            duration: 0.25,
            ease: [0.55, 0.06, 0.68, 0.19]
        }
    }
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
};

PageTransition.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageTransition;
