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
      <div className="p-4 flex gap-4 border-solid border-b-[1px] border-gray-700 mb-4 text-neutral-400">
        <span>개발</span>
        <span>개발</span>
        <span>개발</span>
      </div>
      <div className="px-4 flex flex-col gap-5 cursor-pointer">
        {[0, 1, 2].map((item) => (
          <div key={item}>
            <div className="w-full h-[250px] relative mb-2">
              <Image src="/assets/tfwf.webp" fill alt="test" />
            </div>
            <div>
              <div className="mb-2">
                <h1 className="text-2xl">테스트 게시물 제목</h1>
                <span className="text-sm">testtesttesttest</span>
              </div>
              <div className="text-sm flex items-center text-neutral-400">
                <span>2022년 01월 17일</span>
                <span className="mx-2 pb-1">|</span>
                <span>태그명</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-6" />
    </div>
  );
}
