import React from 'react';
import { getPostsList } from '@/lib/markdown';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';

export default function HomePage() {
  const posts = getPostsList({ limit: 5, category: 'all' });
  return (
    <div>
      <Banner />
      <Category activeCategory="all" />
      <List posts={posts} />
      <div className="pb-6" />
    </div>
  );
}
