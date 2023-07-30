import Pagination from '@/components/Pagination';
import CategoryBadge from '@/components/Post/CategoryBadge';
import PostItem from '@/components/Post/PostItem';
import { getPostsList } from '@/lib/markdown';
import React from 'react';

const mockCategory = ['프론트엔드', '디자인', '알고리즘', '개인'];

const PostListPage = () => {
  const postList = getPostsList({ limit: 8, category: 'all' });

  return (
    <div className="space-y-[104px]">
      <h3 className="pt-16 flex flex-col">
        <em className="mb-5 not-italic text-5xl font-bold">
          1년차 개발자의 고민거리
        </em>
        <span className="text-4xl">개발자의 고민거리</span>
      </h3>
      <article className="flex flex-col space-y-10">
        <div className="flex items-center justify-between">
          <div className="space-x-3">
            {mockCategory.map((category) => (
              <CategoryBadge key={category}>{category}</CategoryBadge>
            ))}
          </div>
          <span>드롭다운</span>
        </div>
        <div className="flex items-center flex-wrap gap-[5%]">
          {postList.map((post) => (
            <PostItem
              post={post}
              imageView
              style={{ content: 'w-[408px] h-[224px]', image: 'h-[228px]' }}
              key={post.id}
            />
          ))}
        </div>
      </article>
      <div className="mt-24">
        <Pagination
          center
          currentPage={1}
          totalPage={2}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default PostListPage;
