'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-1 bg-slate-300 sticky top-[64px] w-full origin-left md:hidden"
    ></motion.div>
  );
};

export default ScrollProgress;
