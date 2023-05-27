'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);

  return (
    <div>
      <div className="h-[260px] w-full bg-black relative" />
      {/* <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 50,
          restDelta: 0.001,
        }}
      /> */}
      <div className="p-4 flex gap-4 border-solid border-b-[1px] border-gray-700 mb-4">
        <span>개발</span>
        <span>개발</span>
        <span>개발</span>
      </div>
      <div className="px-4 flex flex-col gap-3 cursor-pointer">
        {[0, 1, 2].map((item) => (
          <div key={item}>
            <div className="w-full h-[250px] relative">
              <Image src="/assets/tfwf.webp" fill alt="test" />
            </div>
            <div>
              <div className="mb-2">
                <h2>테스트 게시물 제목</h2>
                <span>testtesttesttest</span>
              </div>
              <div>
                <span>2022 01월 17일</span>
                <span>|</span>
                <span>태그명</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
