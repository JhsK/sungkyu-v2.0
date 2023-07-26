import CategoryBadge from '@/components/Post/CategoryBadge';
import React from 'react';

const mockCategory = ['프론트엔드', '디자인', '알고리즘', '개인'];

const PostListPage = () => {
  return (
    <div className="space-y-[104px]">
      <h3 className="pt-16 flex flex-col">
        <em className="mb-5">1년차 개발자의 고민거리</em>
        <span>개발자의 고민거리</span>
      </h3>
      <article>
        <div className="flex items-center justify-between">
          <div>
            {mockCategory.map((category) => (
              <CategoryBadge key={category}>{category}</CategoryBadge>
            ))}
          </div>
          <span>드롭다운</span>
        </div>
      </article>
    </div>
  );
};

export default PostListPage;
