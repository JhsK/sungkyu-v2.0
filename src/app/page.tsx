import React from 'react';
import Image from 'next/image';
import { getPostsList } from '@/lib/markdown';
import Link from 'next/link';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';

export default function HomePage() {
  const posts = getPostsList({ limit: 5 });
  return (
    <div>
      <Banner />
      <Category />
      <List posts={posts} />
      <div className="pb-6" />
    </div>
  );
}
