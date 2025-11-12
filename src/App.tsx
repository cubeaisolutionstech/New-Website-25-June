import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import Insights from './pages/Insights';
import ArticlePage from './pages/ArticlePage';
import SocialMediaLinks from './components/SocialMediaLinks';
import AnalyticsTracker from './components/AnalyticsTracker'; 
import ReadyToContact from './components/ReadyToContact';

// Scroll to Top + ReadyToContact wrapper
const AppContent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(`Navigated to path: ${pathname}`);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Show ReadyToContact everywhere except Contact page */}
      {pathname !== '/contact' && <ReadyToContact />}
    </>
  );
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
      '/insights',
      '/article/:id',
      '/services/:serviceSlug',
      '/explore/:exploreId',
      '/section/:exploreId/:itemId',
      '/industry/:industryId',
      '/product/:productId',
    ]);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AnalyticsTracker /> {/* Tracking user navigation */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
          <Navbar />
          <SocialMediaLinks />
          <AppContent /> {/* Handles ScrollToTop + ReadyToContact */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/explore/:exploreId" element={<ExploreDetail />} />
            <Route path="/section/:exploreId/:itemId" element={<SectionDetail />} />
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
