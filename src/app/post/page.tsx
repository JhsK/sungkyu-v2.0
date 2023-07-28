import CategoryBadge from '@/components/Post/CategoryBadge';
import PostItem from '@/components/Post/PostItem';
import React from 'react';

const mockCategory = ['프론트엔드', '디자인', '알고리즘', '개인'];

const PostListPage = () => {
  return (
    <div className="space-y-[104px]">
      <h3 className="pt-16 flex flex-col">
        <em className="mb-5">1년차 개발자의 고민거리</em>
        <span>개발자의 고민거리</span>
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
        {/* <div>{[1,2,3,4,5,6,7,8,9].map((post) => (
          <PostItem
          post={postList[0]}
          style={{ content: 'w-full h-[195px]' }}
          key={post}
        />
        ))}</div> */}
      </article>
    </div>
  );
};

export default PostListPage;
