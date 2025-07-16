import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import ExploreDetail from './pages/ExploreDetail';
import SectionDetail from './pages/SectionDetail';
import IndustryDetail from './pages/IndustryDetail';
import ProductDetail from './pages/ProductDetail';
import { HelmetProvider } from 'react-helmet-async';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(`Navigated to path: ${pathname}`);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    console.log('App component mounted');
    console.log('App is rendering with routes for:', [
      '/',
      '/about',
      '/products',
      '/services',
      '/career',
      '/contact',
      '/service/:serviceId',
      '/explore/:exploreId',
      '/explore/:exploreId/:sectionId',
      '/industry/:industryId',
      '/product/:productId',
    ]);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/explore/:exploreId" element={<ExploreDetail />} />
            <Route path="/explore/:exploreId/:sectionId" element={<SectionDetail />} />
            <Route path="/industry/:industryId" element={<IndustryDetail />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<div>404: Page Not Found</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;