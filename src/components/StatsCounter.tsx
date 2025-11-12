import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatsCounterProps {
  number: number;
  suffix?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ number, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return Math.min(prev + Math.ceil(number / 50), number);
          }
          clearInterval(timer);
          return number;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </motion.div>
  );
};

export default StatsCounter;