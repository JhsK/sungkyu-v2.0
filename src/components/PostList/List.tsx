'use client';
import React from 'react';
import CategoryBadge from '../Post/CategoryBadge';
import PostItem from '../Post/PostItem';
import { PostList } from '@/lib/type';
import Pagination from '../common/Pagination';
import { Dropdown } from 'flowbite-react';

interface ListProps {
  postList: PostList[];
}

const mockCategory = ['프론트엔드', '디자인', '알고리즘', '개인'];

const List = ({ postList }: ListProps) => {
  return (
    <>
      <article className="flex flex-col space-y-10">
        <div className="flex items-center justify-between">
          <div className="space-x-3">
            {mockCategory.map((category) => (
              <CategoryBadge key={category}>{category}</CategoryBadge>
            ))}
          </div>
          <Dropdown label="test" renderTrigger={() => <div>ggggg</div>}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex items-center flex-wrap gap-[5%] space-y-9">
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
    </>
  );
};

export default List;
