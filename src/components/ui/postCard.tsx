import React from "react";
import { IPostMetaData } from "@/types/posts";
import Text from "./text";
import useScreen from "@/hooks/useScreen";

interface IPostCardProps extends Omit<IPostMetaData, "fileName"> {}

function PostCardDesktop({ category, title, date, summary }: IPostCardProps) {
  return (
    <div className="flex gap-6 cursor-pointer group">
      <div className="w-[260px] h-[180px] bg-gray-400 rounded-[14px] transition-transform group-hover:-translate-y-2 shadow-lg"></div>
      <div className="w-[70%] flex flex-col pb-2 mt-1">
        <div className="flex items-end gap-1 mb-3.5">
          <Text variant="p">{category}</Text>
        </div>
        <div className="flex flex-col gap-1.5 mb-6">
          <Text variant="h3">{title}</Text>
          <Text variant="p" className="line-clamp-2">
            {summary}
          </Text>
        </div>
        <Text variant="small" className="text-gray-300">
          {date}
        </Text>
      </div>
    </div>
  );
}

function PostCardMobile({ category, title, date, summary }: IPostCardProps) {
  return (
    <div>
      <div className="flex gap-6 cursor-pointer group">
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            <Text variant="h4">{title}</Text>
            <Text variant="p" className="line-clamp-2">
              {summary}
            </Text>
          </div>
        </div>
        <div className="w-[88px]">
          <div className="w-[88px] h-[88px] bg-gray-400 rounded-[14px] transition-transform group-hover:-translate-y-2 shadow-lg"></div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Text
          variant="small"
          className="p-2 rounded-3xl bg-gray-100 text-gray-300"
        >
          {category}
        </Text>
        <Text variant="small" className="text-gray-300">
          {date}
        </Text>
      </div>
    </div>
  );
}

function PostCard({ category, title, date, summary }: IPostCardProps) {
  const isMobile = useScreen();

  return (
    <>
      {isMobile ? (
        <PostCardMobile
          category={category}
          title={title}
          date={date}
          summary={summary}
        />
      ) : (
        <PostCardDesktop
          category={category}
          title={title}
          date={date}
          summary={summary}
        />
      )}
    </>
  );
}

export default PostCard;
