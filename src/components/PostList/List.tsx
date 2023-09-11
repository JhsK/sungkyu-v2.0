'use client';
import React from 'react';
import CategoryBadge from '../Post/CategoryBadge';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import PostItem from '../Post/PostItem';
import { PostList } from '@/lib/type';
import Pagination from '../Pagination';

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
          {/* <span>드롭다운</span> */}
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
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
