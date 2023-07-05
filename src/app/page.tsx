import React from 'react';
import { getPostsList } from '@/lib/markdown';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';
import '../index.css';

export default function HomePage() {
  const posts = getPostsList({ limit: 5, category: 'all' });

  return (
    <div className="px-[72px] pt-16">
      {/* <Banner />
      <div className="max-w-3xl mx-auto">
        <Category activeCategory="all" />
        <List posts={posts} />
        <div className="pb-6" />
      </div> */}
      <div className="h-[116px] rounded-2xl bg-white shadow-main"></div>
    </div>
  );
}
