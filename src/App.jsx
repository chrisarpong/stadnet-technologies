import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/mobile-web-development" element={<MobileWebDev />} />
                        <Route path="/cloud-computing" element={<CloudComputing />} />
                        <Route path="/graphic-design" element={<GraphicDesign />} />
                        <Route path="/product-design" element={<ProductDesign />} />
                        <Route path="/consulting" element={<Consulting />} />
                        <Route path="/engineering" element={<Engineering />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
