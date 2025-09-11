import React, { useEffect, useState } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles, Heart, Zap, Star, Coffee, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ReadyToContactProps {
  isEmbedded?: boolean;
}

const ReadyToContact: React.FC<ReadyToContactProps> = ({ isEmbedded = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // For mobile, don't auto-show the modal
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const showSection = () => {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 15000);
    };

    timeoutId = setTimeout(showSection, 3000);
    intervalId = setInterval(showSection, 30000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isMobile]);

  const handleClose = () => {
    setIsVisible(false);
    setMobileModalOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    handleClose();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const iconVariants = {
    ConnectBubble: {
      y: [0, -8, 0],
      rotate: [0, 4, -4, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Mobile version with chat icon and modal
  if (isMobile && !isEmbedded) {
    return (
      <>
        {/* Floating chat icon for mobile */}
        <motion.button
          onClick={() => setMobileModalOpen(true)}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-2xl flex items-center justify-center text-white"
        >
          <motion.div
            variants={iconVariants}
            animate="ConnectBubble"
          >
            <MessageCircle size={24} fill="#C4B5FD" />
          </motion.div>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Mobile modal */}
        <AnimatePresence>
          {mobileModalOpen && (
            <motion.div
              initial={{ scale: 0, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 10, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                duration: 0.6 
              }}
              className="fixed inset-3 top-1/2 -translate-y-1/2 z-50 max-h-[400px]"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.2)] border border-white/20 overflow-hidden relative h-full">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, #ec4899, #8b5cf6, #6366f1)',
                        'linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)',
                        'linear-gradient(225deg, #10b981, #06b6d4, #8b5cf6)',
                        'linear-gradient(315deg, #ec4899, #8b5cf6, #6366f1)'
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </div>

                {/* Close button */}
                <motion.button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200/80 transition-all duration-200 z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={14} />
                </motion.button>

                <div className="p-6 h-full flex flex-col justify-center relative">
                  {/* Floating icons */}
                  <motion.div 
                    className="absolute top-10 left-6 text-pink-400"
                    animate={{ 
                      y: [-4, 4, -4],
                      rotate: [0, 8, -8, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Heart size={18} />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-16 right-10 text-purple-400"
                    animate={{ 
                      y: [4, -4, 4],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <Sparkles size={16} />
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-24 left-10 text-indigo-400"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  >
                    <Zap size={16} />
                  </motion.div>

                  {/* Main content */}
                  <div className="text-center">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-2xl"
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MessageCircle className="text-white" size={28} />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-2xl font-black text-gray-800 mb-3"
                    >
                      Let's Chat! 💬
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-gray-600 text-sm mb-6 leading-relaxed font-medium"
                    >
                      Got questions? Ideas? Just want to say hi? 
                      <br />
                      <span className="text-purple-600 font-semibold">We're all ears!</span>
                    </motion.p>

                    {/* Action button */}
                    <motion.button
                      onClick={handleContactClick}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold text-base shadow-xl hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                      
                      <span className="relative z-10 flex items-center">
                        Start Conversation
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2" size={18} />
                        </motion.div>
                      </span>
                    </motion.button>

                    {/* Fun tagline */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="mt-4 flex items-center justify-center text-xs text-gray-500"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="mr-1"
                      >
                        ✨
                      </motion.div>
                      <span className="font-medium">Quick • Fun • Personal</span>
                      <motion.div
                        animate={{ rotate: [0, -360] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        className="ml-1"
                      >
                        🚀
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-12 left-3 w-3 h-3 bg-pink-400 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-20 right-5 w-2 h-2 bg-indigo-400 rounded-full opacity-50"
                  animate={{ 
                    y: [-8, 8, -8],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div 
                  className="absolute top-1/4 right-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70"
                  animate={{ 
                    x: [-4, 4, -4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop version (unchanged)
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            scale: 0, 
            rotate: -15, 
            x: 80, 
            y: 80, 
            opacity: 0 
          }}
          animate={{ 
            scale: 1, 
            rotate: 0, 
            x: 0, 
            y: 0, 
            opacity: 1 
          }}
          exit={{ 
            scale: 0.3, 
            rotate: 15, 
            x: 40, 
            y: 40, 
            opacity: 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            duration: 0.8 
          }}
          className={`${
            isEmbedded
              ? 'w-full max-w-xs mx-auto mt-3 px-2'
              : 'fixed bottom-4 right-4 w-full max-w-xs z-50'
          }`}
          onMouseMove={handleMouseMove}
        >
          <div className="relative">
            {/* Outer glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-2xl"
              style={{
                background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8, #ff6b6b)',
                filter: 'blur(15px)',
                opacity: 0.3
              }}
              animate={{ 
                rotate: [0, 360],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Main container */}
            <motion.div
              className="bg-white/90 backdrop-blur-2xl rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.2)] border-2 border-white/40 overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated mesh background */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, #ff6b6b 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, #45b7d1 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, #96ceb4 0%, transparent 50%)
                    `
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
              </div>

              {/* Mouse follower effect */}
              <motion.div
                className="absolute pointer-events-none rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                  width: '150px',
                  height: '150px',
                  left: mousePosition.x - 75,
                  top: mousePosition.y - 75,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Close button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50/80 transition-all duration-300 z-20 shadow-md"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 90,
                  boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <X size={14} />
              </motion.button>

              {/* Floating decorative elements */}
              <motion.div 
                className="absolute top-4 left-4 text-pink-400"
                animate={{ 
                  y: [-6, 6, -6],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              
              <motion.div 
                className="absolute top-10 right-12 text-cyan-400"
                animate={{ 
                  x: [-8, 8, -8],
                  y: [4, -4, 4],
                  rotate: [0, -360]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              >
                <Sparkles size={14} fill="currentColor" />
              </motion.div>

              <motion.div 
                className="absolute bottom-12 left-6 text-yellow-400"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  y: [-4, 4, -4]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <Star size={16} fill="currentColor" />
              </motion.div>

              <motion.div 
                className="absolute bottom-20 right-10 text-purple-400"
                animate={{ 
                  y: [-6, 6, -6],
                  x: [2, -2, 2],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <Zap size={14} fill="currentColor" />
              </motion.div>

              <motion.div 
                className="absolute top-16 left-10 text-emerald-400"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}
              >
                <Coffee size={14} />
              </motion.div>

              <motion.div 
                className="absolute bottom-20 right-5 text-orange-400"
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 3 }}
              >
                <Rocket size={12} fill="currentColor" />
              </motion.div>

              {/* Main content area */}
              <div className="p-4 relative z-10">
                {/* Header section */}
                <div className="text-center mb-4">
                  {/* Animated main icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.3, 
                      type: "spring", 
                      stiffness: 150,
                      damping: 12
                    }}
                    className="mx-auto w-12 h-12 mb-3 relative"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8, #ff6b6b)',
                      }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center shadow-inner"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <MessageCircle 
                          className="text-gray-700" 
                          size={20} 
                          fill="currentColor" 
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Animated title */}
                  <motion.div className="mb-2">
                    {['R', 'e', 'a', 'd', 'y', ' ', 't', 'o', ' ', 'C', 'o', 'n', 'n', 'e', 'c', 't', '?'].map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          delay: 0.5 + index * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="inline-block text-xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-gray-600 text-xs mb-4 leading-relaxed font-medium"
                  >
                    <motion.span
                      animate={{ 
                        color: ['#6b7280', '#ec4899', '#8b5cf6', '#6366f1', '#6b7280']
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="font-semibold"
                    >
                      Let's create something amazing together!
                    </motion.span>
                    <br />
                    <span className="text-[10px]">Questions, ideas, or just want to chat?</span>
                  </motion.p>
                </div>

                {/* Action button */}
                <motion.button
                  onClick={handleContactClick}
                  initial={{ opacity: 0, scale: 0.5, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.4, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -4,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    y: 0
                  }}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-4 py-3 rounded-lg font-bold text-sm shadow-xl transition-all duration-300 flex items-center justify-center group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1, 
                      opacity: [0, 0.3, 0],
                      transition: { duration: 0.6 }
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    <motion.span
                      animate={{ 
                        textShadow: [
                          '0 0 0px rgba(255,255,255,0)',
                          '0 0 15px rgba(255,255,255,0.8)',
                          '0 0 0px rgba(255,255,255,0)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Start Our Conversation
                    </motion.span>
                    <motion.div
                      animate={{ 
                        x: [0, 6, 0],
                        rotate: [0, 15, -15, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-2"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </span>
                </motion.button>

                {/* Animated tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="mt-3 text-center"
                >
                  <div className="flex items-center justify-center space-x-3 text-[10px] text-gray-500">
                    <motion.div
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1, color: '#ec4899' }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      >
                        ⚡
                      </motion.div>
                      <span className="font-semibold">Instant</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1, color: '#8b5cf6' }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          rotate: [0, 15, -15, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      >
                        🎯
                      </motion.div>
                      <span className="font-semibold">Personal</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1, color: '#6366f1' }}
                    >
                      <motion.div
                        animate={{ 
                          y: [-2, 2, -2],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                      >
                        🚀
                      </motion.div>
                      <span className="font-semibold">Powerful</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Call to action reminder */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="mt-2 text-center"
                >
                  <motion.span
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[9px] text-gray-400 font-medium tracking-wide uppercase"
                  >
                    No commitment • Just conversation
                  </motion.span>
                </motion.div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 1, type: "spring" }}
              />

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${25 + (i * 8)}%`,
                  }}
                  animate={{
                    y: [-15, -30, -15],
                    x: [-4, 4, -4],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 4 + (i * 0.4),
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReadyToContact;