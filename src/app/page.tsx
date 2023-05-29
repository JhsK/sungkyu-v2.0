import React from 'react';
import Image from 'next/image';
import { getPost, getPostsList } from '@/lib/markdown';
import Link from 'next/link';

export default function HomePage() {
  const allPostsData = getPostsList();

  return (
    <div>
      <div className="h-[260px] w-full bg-black relative" />
      <div className="p-4 flex gap-4 border-solid border-b-[1px] border-gray-700 mb-4 text-neutral-400">
        <span className="cursor-pointer">개발</span>
        <span className="cursor-pointer">개발</span>
        <span className="cursor-pointer">개발</span>
      </div>
      <div className="px-4 flex flex-col gap-5 cursor-pointer">
        {allPostsData.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <div className="w-full h-[250px] relative mb-2">
              <Image src="/assets/tfwf.webp" fill alt="test" />
            </div>
            <div>
              <div className="mb-2">
                <h1 className="text-2xl">{post.title}</h1>
                <span className="text-sm">testtesttesttest</span>
              </div>
              <div className="text-sm flex items-center text-neutral-400">
                <span>{post.date}</span>
                <span className="mx-2 pb-1">|</span>
                <span>태그명</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pb-6" />
    </div>
  );
}
