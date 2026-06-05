import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="text-center mb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs uppercase tracking-widest text-brand-purple font-semibold bg-brand-purple/10 px-3 py-1 rounded-full">
          {subtitle}
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold mt-3 text-white tracking-tight"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full"
      />
    </div>
  );
};

export default SectionHeading;