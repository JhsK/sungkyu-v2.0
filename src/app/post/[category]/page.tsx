import React, { use } from 'react';
import { getCategoryPostList, getPost } from '@/lib/markdown';
import { PostDetail } from '@/types';
import MarkdownViewer from '@/components/Post/MarkdownViewer';
import { testServer } from '@/components/Post/server';

interface CategoryListParams {
  category: string;
}

export function generateStaticParams() {
  // const test = getCategoryPostList('develop');
  return [{ category: 'develop' }, { category: 'b' }, { category: 'c' }];
}

const PostCategoryList = ({ params }: { params: CategoryListParams[] }) => {
  // const post: PostDetail = await getPost(params.slug);
  const server = use(testServer());
  console.log('params', params);
  console.log(server);
  return (
    <div className="px-4 flex flex-col gap-4">
      {/* <div>
        <h1 className="text-2xl mb-1">{post.title}</h1>
        <span className="text-sm text-neutral-400">{post.date}</span>
      </div>
      <MarkdownViewer post={post.contentHtml} /> */}
    </div>
  );
};

export default PostCategoryList;
