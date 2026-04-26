import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollReveal from './components/ScrollReveal';

// Lazy-loaded pages — each page is split into its own chunk for faster initial load
const Home = lazy(() => import('./pages/Home'));

const MobileWebDev = lazy(() => import('./pages/MobileWebDev'));
const CloudComputing = lazy(() => import('./pages/CloudComputing'));
const Consulting = lazy(() => import('./pages/Consulting'));
const Engineering = lazy(() => import('./pages/Engineering'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign'));
const Careers = lazy(() => import('./pages/Careers'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <Suspense fallback={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <LoadingSpinner size="large" />
            </div>
        }>
            <ScrollReveal />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />

                <Route path="/mobile-web-development" element={<PageTransition><MobileWebDev /></PageTransition>} />
                <Route path="/cloud-computing" element={<PageTransition><CloudComputing /></PageTransition>} />
                <Route path="/consulting" element={<PageTransition><Consulting /></PageTransition>} />
                <Route path="/engineering" element={<PageTransition><Engineering /></PageTransition>} />
                <Route path="/graphic-design" element={<PageTransition><GraphicDesign /></PageTransition>} />
                <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
        </Suspense>
    );
};

function App() {
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

    return (
        <HelmetProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <Router>
                        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
                        <ScrollToTopOnMount />

                        <div className="app">
                            <Navbar />
                            <main>
                                <AnimatedRoutes />
                            </main>
                            <Footer />
                            <CookieBanner />
                            <ScrollToTop />
                        </div>
                    </Router>
                </ErrorBoundary>
            </ThemeProvider>
        </HelmetProvider >
    );
}

export default App;
