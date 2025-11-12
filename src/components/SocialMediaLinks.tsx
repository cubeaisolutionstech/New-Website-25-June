import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const SocialMediaLinks = () => {
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
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col space-y-6 hidden md:block">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative block p-3 rounded-full bg-white shadow-lg border-2 border-gray-200
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
            <link.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
            
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
            className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg opacity-0 pointer-events-none whitespace-nowrap"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {link.name}
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
          </motion.div>
        </motion.div>
      ))}

      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default SocialMediaLinks;