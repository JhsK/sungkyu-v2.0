import React from 'react';
import { getPostsList } from '@/lib/markdown';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';
import '../index.css';
import { gaGetData } from '@/lib/test';
import { fetchData } from '@/components/Post/server';

export default function HomePage() {
  const posts = getPostsList({ limit: 5, category: 'all' });
  const test = fetchData();
  console.log(test);
  return (
    <div>
      <Banner />
      <div className="max-w-3xl mx-auto">
        <Category activeCategory="all" />
        <List posts={posts} />
        <div className="pb-6" />
      </div>
    </div>
  );
}
