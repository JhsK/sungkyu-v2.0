import React from 'react';
import { getPost } from '@/lib/markdown';
import MarkdownViewer from '@/components/Post/MarkdownViewer';
import { CategoryType, PostDetail } from '@/types';
import Toc from '@/components/Post/Toc';

interface PostDetailParams {
  category: CategoryType;
  id: string;
}

export function generateStaticParams() {
  return [
    { category: 'a', product: '1' },
    { category: 'b', product: '2' },
    { category: 'c', product: '3' },
  ];
}

const PostDetail = async ({ params }: { params: PostDetailParams }) => {
  const post: PostDetail = await getPost(params.id);
  const test = post.contentHtml;

  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col gap-4 max-w-3xl mx-auto scroll-smooth">
      <div>
        <h1 className="text-2xl mb-1">{post.title}</h1>
        <span className="text-sm text-neutral-400">{post.date}</span>
      </div>
      <MarkdownViewer post={post.contentHtml} />
      <Toc />
    </div>
  );
};

export default PostDetail;
