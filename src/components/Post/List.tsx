import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostList } from '@/lib/type';

interface ListProps {
  posts: PostList[];
}

const List = ({ posts }: ListProps) => {
  return (
    <>
      {posts.map((post) => (
        <>
          <Link
            href={`/post/${post.category}/${post.id}`}
            key={post.id}
            className="py-10 px-4 flex flex-col"
          >
            <span className="mb-2">category</span>
            <h1 className="text-3xl font-bold mb-1.5 text-title hover:text-blue-500">
              {post.title}
            </h1>
            <span className="text-sm text-description">testtesttesttest</span>
          </Link>
          <hr className="mx-4" />
        </>
      ))}
    </>
  );
};

export { List };
