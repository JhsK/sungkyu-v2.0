'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-1 w-full bg-[#1b64f1] origin-left fixed top-0 left-0 z-50"
    ></motion.div>
  );
};

export default ScrollProgress;
