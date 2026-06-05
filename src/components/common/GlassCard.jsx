import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true, glowColor = 'purple', delay = 0 }) => {
  const glowClasses = {
    purple: 'hover:shadow-glow-purple hover:border-brand-purple/40',
    blue: 'hover:shadow-glow-blue hover:border-brand-blue/40',
    pink: 'hover:shadow-glow-pink hover:border-brand-pink/40',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={hoverEffect ? { 
        y: -6, 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
      className={`glass-morphism rounded-2xl p-6 transition-all duration-300 ${hoverEffect ? glowClasses[glowColor] : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
