import React from 'react';
import Image from 'next/image';
import CategoryBadge from './CategoryBadge';
import { twMerge } from 'tailwind-merge';

type PostItemStyle = {
  content?: string;
  image?: string;
};

interface PostItemProps {
  image?: string;
  imageHeight?: string;
  style?: PostItemStyle;
  category: string;
}

const PostItem = ({ image, imageHeight, style, category }: PostItemProps) => {
  const notImagePostItem = () => {
    return (
      <div
        className={twMerge(
          `p-6 rounded-3xl 
          main-shadow flex flex-col justify-between w-[292px] h-[192px] cursor-pointer`,
          style?.content
        )}
      >
        <div className="flex flex-col gap-[22px]">
          <div>
            <CategoryBadge>{category}</CategoryBadge>
          </div>
          <strong className="text-22 font-semibold">
            Lorem ipsum dolor sit amet consectetur
          </strong>
        </div>
        <span>test</span>
      </div>
    );
  };

  const imagePostItem = () => {
    return (
      <div className="rounded-3xl main-shadow cursor-pointer">
        <div
          className={twMerge(
            'p-6 flex flex-col justify-between w-[292px] h-[192px]',
            style?.content
          )}
        >
          <div className="flex flex-col gap-[22px]">
            <div>
              <CategoryBadge>{category}</CategoryBadge>
            </div>
            <strong className="text-22 font-semibold">
              Lorem ipsum dolor sit amet consectetur
            </strong>
          </div>
          <span>test</span>
        </div>
        <div className={twMerge('relative w-full h-[168px]', style?.image)}>
          <Image
            alt="post sumnail"
            className="rounded-b-3xl"
            fill
            src="https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/__Hello__+World+(1).png"
          />
        </div>
      </div>
    );
  };
  return <>{image ? imagePostItem() : notImagePostItem()}</>;
};

export default PostItem;
