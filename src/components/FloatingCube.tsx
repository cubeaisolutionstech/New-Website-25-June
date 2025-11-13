import React from 'react';
import { motion } from 'framer-motion';

const FloatingCube = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: 'rotateX(45deg) rotateY(45deg)',
          }}
          animate={{
            y: [0, -40, 0],
            rotateX: [45, 75, 45],
            rotateY: [45, 75, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        />
      ))}
      
      {/* Gradient Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCube;