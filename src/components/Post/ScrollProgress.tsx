'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-1 w-screen bg-[#1b64f1] sticky ml-[-80px] top-[71px] origin-left z-30"
    ></motion.div>
  );
};

export default ScrollProgress;
