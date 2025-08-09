import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Footer = () => {
  useEffect(() => {
    console.log('Footer component mounted');
    try {
      console.log('Lucide icons available:', { Mail, MapPin, Phone });
      console.log('React Router available:', { Link });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in Footer component dependencies:', error);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>CubeAI Solutions - AI Automation Tools for Business</title>
        <meta
          name="description"
          content="Connect with CubeAI Solutions for innovative AI services. Find our contact details, explore services, and learn about our mission to drive business innovation."
        />
        <meta
          name="keywords"
          content="CubeAI Solutions, AI services, contact, innovation, technology solutions, business growth"
        />
      </Helmet>
        <footer className="bg-[#001F54] backdrop-blur-xl border-t border-blue-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img
                    src="/cubeai.jpg"
                    alt="CubeAI Solutions"
                    className="h-10 w-10 rounded-xl shadow-lg shadow-blue-500/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl"></div>
                </div>
                <h1 className="text-white font-bold text-2xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  CubeAI Solutions
                </h1>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with intelligent AI solutions that drive innovation, efficiency, and sustainable growth across industries worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-blue-300 transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a
                    href="mailto:contact@cubeaisolutions.com"
                    className="hover:underline"
                    aria-label="Email CubeAI Solutions"
                  >
                    contact@cubeaisolutions.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-blue-300 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <a
                    href="tel:+919486938781"
                    className="hover:underline"
                    aria-label="Call CubeAI Solutions"
                  >
                    +91 9486938781
                  </a>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col px-20">
              <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/" className="block text-gray-300 hover:text-blue-300 transition-colors">Home</Link>
                <Link to="/about" className="block text-gray-300 hover:text-blue-300 transition-colors">About</Link>
                <Link to="/services" className="block text-gray-300 hover:text-blue-300 transition-colors">Services</Link>
                <Link to="/products" className="block text-gray-300 hover:text-blue-300 transition-colors">Products</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-blue-300 transition-colors">Contact</Link>
                <Link to="/career" className="block text-gray-300 hover:text-blue-300 transition-colors">Career</Link>
              </div>
            </div>
            {/* Corporate Office */}
            <div className="flex flex-col">
              <h3 className="text-white font-semibold mb-6 text-lg">Corporate Office</h3>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-6 h-6 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span>CubeAI Solutions Tech Pvt Ltd</span><br />
                  <span>Shri Anathanagar</span><br />
                  <span>Bangalore 560100</span>
                </div>
              </div>
            </div>
            {/* Branch Office */}
            <div className="flex flex-col">
              <h3 className="text-white font-semibold mb-6 text-lg">Branch Office</h3>
              <div className="flex items-start text-gray-300 mb-4">
                <MapPin className="w-6 h-6 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span>KSR Kalvi Nagar</span><br />
                  <span>Namakkal (Dt)</span><br />
                  <span>Tamil Nadu - 637215</span>
                </div>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-6 h-6 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span>Ganapathy</span><br />
                  <span>Coimbatore (Dt)</span><br />
                  <span>Tamil Nadu - 641001</span>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="border-t border-blue-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center w-full">
                <p className="text-gray-300">
                  © 2025 CubeAI Solutions. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
