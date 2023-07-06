import React from 'react';
import { getPostsList } from '@/lib/markdown';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';
import '../index.css';

export default function HomePage() {
  const posts = getPostsList({ limit: 5, category: 'all' });

  return (
    <main className="pt-16 flex flex-col gap-9">
      {/* <Banner />
      <div className="max-w-3xl mx-auto">
        <Category activeCategory="all" />
        <List posts={posts} />
        <div className="pb-6" />
      </div> */}
      <section className="h-[116px] rounded-2xl bg-white main-shadow px-9 flex items-center justify-between">
        <h2 className="m-0 text-3xl font-bold">내가 개발자가 될 상인가.</h2>
        <span>아이콘 슬롯입니다</span>
      </section>
      <section className="flex justify-between w-full">
        <div className="w-[calc(50%-18px)] bg-red-300 h-10"></div>
        <div className="w-[calc(50%-18px)] bg-red-300 h-[582px] rounded-2xl main-shadow"></div>
        {/* <div className="w-[calc(50% - 18px)] bg-red-300 h-10"></div> */}
      </section>
    </main>
  );
}
