import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import DarkModeToggle from './components/DarkModeToggle';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import MobileWebDev from './pages/MobileWebDev';
import CloudComputing from './pages/CloudComputing';
import GraphicDesign from './pages/GraphicDesign';
import ProductDesign from './pages/ProductDesign';
import Consulting from './pages/Consulting';
import Engineering from './pages/Engineering';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
                <Route path="/mobile-web-development" element={<PageTransition><MobileWebDev /></PageTransition>} />
                <Route path="/cloud-computing" element={<PageTransition><CloudComputing /></PageTransition>} />
                <Route path="/graphic-design" element={<PageTransition><GraphicDesign /></PageTransition>} />
                <Route path="/product-design" element={<PageTransition><ProductDesign /></PageTransition>} />
                <Route path="/consulting" element={<PageTransition><Consulting /></PageTransition>} />
                <Route path="/engineering" element={<PageTransition><Engineering /></PageTransition>} />
                <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <Router>
                        <div className="app">
                            <Navbar />
                            <main>
                                <AnimatedRoutes />
                            </main>
                            <Footer />
                            <StickyCTA />
                            <DarkModeToggle />
                            <CookieBanner />
                        </div>
                    </Router>
                </ErrorBoundary>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
