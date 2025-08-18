import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Footer = () => {
  useEffect(() => {
    console.log('Footer component mounted');
    try {
      console.log('Lucide icons available:', { Mail, MapPin, Phone, Linkedin, Instagram, Facebook });
      console.log('React Router available:', { Link });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in Footer component dependencies:', error);
    }
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/cubeaisolutions-tech-pvt-ltd/',
      color: '#0077B5',
      bgColor: 'hover:bg-[#0077B5]',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/cubeaisolutions_tech?igsh=MXg2ZG8zM3IxNmFzZg==',
      color: '#e13030ff',
      bgColor: 'hover:bg-gradient-to-br hover:from-[#E1306C] hover:via-[#F56040] hover:to-[#FCAF45]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1FsJnyL9jC/',
      color: '#3B5998',
      bgColor: 'hover:bg-[#3B5998]',
    },
  ];

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
            {/* Social Media Links */}
            <div className="flex flex-col md:hidden">
              <h3 className="text-white font-semibold mb-6 text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        relative block p-2 rounded-full bg-white shadow-lg border-2 border-gray-200
                        transition-all duration-300 ease-out
                        hover:shadow-xl hover:border-transparent hover:text-white
                        ${link.bgColor}
                        group-hover:scale-110
                      `}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Visit our ${link.name} page`}
                    >
                      <link.icon className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      {/* Animated line effect */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-current"
                        style={{ backgroundColor: link.color }}
                        whileHover={{
                          width: '100%',
                          x: '-50%',
                          transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                      />
                      {/* Top line animation */}
                      <motion.div
                        className="absolute top-0 left-1/2 w-0 h-0.5 bg-current opacity-0"
                        style={{ backgroundColor: link.color }}
                        whileHover={{
                          width: '80%',
                          x: '-50%',
                          opacity: 1,
                          transition: { duration: 0.3, ease: 'easeOut', delay: 0.1 }
                        }}
                      />
                      {/* Left line animation */}
                      <motion.div
                        className="absolute left-0 top-1/2 w-0.5 h-0 bg-current opacity-0"
                        style={{ backgroundColor: link.color }}
                        whileHover={{
                          height: '70%',
                          y: '-50%',
                          opacity: 1,
                          transition: { duration: 0.3, ease: 'easeOut', delay: 0.15 }
                        }}
                      />
                      {/* Right line animation */}
                      <motion.div
                        className="absolute right-0 top-1/2 w-0.5 h-0 bg-current opacity-0"
                        style={{ backgroundColor: link.color }}
                        whileHover={{
                          height: '70%',
                          y: '-50%',
                          opacity: 1,
                          transition: { duration: 0.3, ease: 'easeOut', delay: 0.2 }
                        }}
                      />
                    </motion.a>
                    {/* Tooltip */}
                    <motion.div
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg opacity-0 pointer-events-none whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="border-t border-blue-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between flowers-center">
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