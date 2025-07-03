import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-blue-200/30 shadow-md shadow-blue-200/10'
          : 'bg-gray-100/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20" style={{ width: '90%' }}>
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/cube ai - Copy copy copy.jpg"
                alt="CubeAI Solutions"
                className="h-12 w-12 rounded-xl object-contain"
              />
            </div>
            <span className="text-2xl font-bold leading-tight">
              <span className="text-blue-800">CubeAI</span>
              <br />
              <span className="text-blue-500">Solutions</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-gray-800 hover:text-blue-600 transition-all duration-300 font-medium ${
                  location.pathname === item.path ? 'text-blue-600' : ''
                }`}
                onClick={() => {
                  if (item.name === 'Careers') {
                    console.log('Navigating to Careers page at /careers');
                  }
                }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 p-6 border勤
            border border-blue-200/30"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-800 hover:text-blue-600 py-3 font-medium transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  if (item.name === 'Careers') {
                    console.log('Navigating to Careers page at /careers from mobile menu');
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;