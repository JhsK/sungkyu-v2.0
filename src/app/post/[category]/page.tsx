import React, { use } from 'react';
import { getCategoryPostList, getPost, getPostsList } from '@/lib/markdown';
import { CategoryType, PostDetail } from '@/types';
import MarkdownViewer from '@/components/Post/MarkdownViewer';
import { testServer } from '@/components/Post/server';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';

interface CategoryListParams {
  category: CategoryType;
}

export function generateStaticParams() {
  // const test = getCategoryPostList('develop');
  return [{ category: 'develop' }, { category: 'b' }, { category: 'c' }];
}

const PostCategoryList = ({ params }: { params: CategoryListParams }) => {
  // const post: PostDetail = await getPost(params.slug);
  // const server = use(testServer());
  const posts = getPostsList({ category: params.category });
  return (
    <>
      <Banner />
      <Category activeCategory={params.category} />
      <List posts={posts} />
    </>
    // <div className="px-4 flex flex-col gap-4">
    //   <div>
    //     <h1 className="text-2xl mb-1">{post.title}</h1>
    //     <span className="text-sm text-neutral-400">{post.date}</span>
    //   </div>
    //   <MarkdownViewer post={post.contentHtml} />
    // </div>
  );
};

export default PostCategoryList;
