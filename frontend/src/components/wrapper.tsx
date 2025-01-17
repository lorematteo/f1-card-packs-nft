"use client";
import React from 'react';
import { motion } from 'motion/react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={`max-w-[1200px] px-8 ${className}`}
      {...props}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
