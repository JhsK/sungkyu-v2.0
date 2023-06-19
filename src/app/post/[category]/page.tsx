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
      <div className="max-w-3xl mx-auto">
        <Category activeCategory={params.category} />
        <List posts={posts} />
      </div>
    </>
  );
};

export default PostCategoryList;
