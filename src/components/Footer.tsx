import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl border-t border-blue-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img
                  src="/cube ai - Copy.jpg"
                  alt="CubeAI Solutions"
                  className="h-10 w-10 rounded-xl shadow-lg shadow-blue-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl"></div>
              </div>
              <span className="text-white font-bold text-2xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                CubeAI Solutions
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with intelligent AI solutions that drive innovation, efficiency, and sustainable growth across industries worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-blue-300 transition-colors">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>cubeaisolutions@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-blue-300 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>cubeaisolutions@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-6 h-6 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span>CyTI (Cyber Tech Innovations Centre)</span><br />
                  <span>KSR Kalvi Nagar</span><br />
                  <span>Tamil Nadu - 637215</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-300 transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-blue-300 transition-colors">
                Services
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-blue-300 transition-colors">
                Products
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-300 transition-colors">
                Contact
              </Link>
              <Link to="/career" className="block text-gray-300 hover:text-blue-300 transition-colors">
                Career
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 CubeAI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;