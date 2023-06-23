'use client';
import { motion, useScroll } from 'framer-motion';
import React from 'react';

const DetailPostLayout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-1 bg-slate-300 sticky top-[64px] w-full origin-left md:hidden"
      ></motion.div>
      {children}
    </>
  );
};

export default DetailPostLayout;
