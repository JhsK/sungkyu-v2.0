import React from 'react';
import Image from 'next/image';
import CategoryBadge from './CategoryBadge';
import { twMerge } from 'tailwind-merge';
import { PostList } from '@/lib/type';

type PostItemStyle = {
  content?: string;
  image?: string;
};

interface PostItemProps {
  post: PostList;
  imageView?: boolean;
  imageHeight?: string;
  style?: PostItemStyle;
  hoverAnimation?: boolean;
}

const PostItem = ({
  post,
  imageView,
  imageHeight,
  style,
  hoverAnimation,
}: PostItemProps) => {
  const notImagePostItem = () => {
    return (
      <div
        className={twMerge(
          `p-6 rounded-3xl 
          post-shadow flex flex-col justify-between w-[292px] h-[192px] cursor-pointer`,
          style?.content
        )}
      >
        <div className="flex flex-col gap-[22px]">
          <div>
            <CategoryBadge>{post.category}</CategoryBadge>
          </div>
          <strong className="text-22 font-semibold">{post.title}</strong>
        </div>
        <span>{post.description}</span>
      </div>
    );
  };

  const imagePostItem = () => {
    const moveTopTranslate = hoverAnimation ? 'move-top-translate' : '';

    return (
      <div
        className={`rounded-3xl post-shadow cursor-pointer ${moveTopTranslate}`}
      >
        <div
          className={twMerge(
            'p-6 flex flex-col justify-between w-[292px] h-[192px]',
            style?.content
          )}
        >
          <div className="flex flex-col gap-[22px]">
            <div>
              <CategoryBadge>{post.category}</CategoryBadge>
            </div>
            <strong className="text-22 font-semibold">{post.title}</strong>
          </div>
          <span>{post.description}</span>
        </div>
        <div className={twMerge('relative w-full h-[168px]', style?.image)}>
          <Image
            alt="post sumnail"
            className="rounded-b-3xl"
            fill
            src={post.image}
          />
        </div>
      </div>
    );
  };
  return <>{imageView ? imagePostItem() : notImagePostItem()}</>;
};

export default PostItem;
