import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface NavItem {
  name: string;
  path: string;
}

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log('Navbar component mounted');
    try {
      console.log('Lucide icons available:', { Menu, X });
      console.log('Framer Motion available:', motion);
      console.log('React Router available:', { Link, useLocation });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in Navbar component dependencies:', error);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Insights', path: '/insights' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <Helmet>
        <title>CubeAI Solutions - Navigation</title>
        <meta
          name="description"
          content="Navigate CubeAI Solutions to explore our AI-powered services, innovative products, career opportunities, and contact information for business transformation."
        />
        <meta
          name="keywords"
          content="CubeAI Solutions, AI services, navigation, products, career, contact, business innovation"
        />
      </Helmet>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-blue-200/30 shadow-md shadow-blue-200/10'
            : 'bg-gray-100/90 backdrop-blur-md'
        }`}
        onAnimationStart={() => console.log('Navbar animation started')}
        onAnimationComplete={() => console.log('Navbar animation completed')}
      >
        <h1 className="sr-only">CubeAI Solutions Navigation</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20" style={{ width: '90%' }}>
               <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/image/lo.png"
                alt="CubeAI Solutions"
                className="h-[135px] w-[135px] rounded-xl object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
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
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  onClick={() => console.log(`Navigating to ${item.name} at ${item.path}`)}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  console.log(`Mobile menu ${isOpen ? 'closed' : 'opened'}`);
                }}
                className="text-gray-800 hover:text-blue-600 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
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
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 p-6 border border-blue-200/30"
              onAnimationStart={() => console.log('Mobile menu animation started')}
              onAnimationComplete={() => console.log('Mobile menu animation completed')}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-800 hover:text-blue-600 py-3 font-medium transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    console.log(`Navigating to ${item.name} at ${item.path} from mobile menu`);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;