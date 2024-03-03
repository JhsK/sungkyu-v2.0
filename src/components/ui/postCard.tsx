import React from "react";
import { IPostMetaData } from "@/types/posts";
import Text from "./text";
import Image from "next/image";
import useScreen from "@/hooks/useScreen";

interface IPostCardProps extends IPostMetaData {}
interface IPostCardDeviceProps
  extends Omit<IPostCardProps, "fileName" | "sumnail"> {
  sumnailPath: string;
  postAlt: string;
}

function PostCardDesktop({
  category,
  title,
  date,
  summary,
  sumnailPath,
  postAlt,
}: IPostCardDeviceProps) {
  return (
    <div className="flex items-center gap-6 cursor-pointer group">
      <div className="w-[260px] h-[180px] bg-gray-400 rounded-[14px] transition-transform group-hover:-translate-y-2 shadow-lg overflow-hidden relative">
        <Image
          src={sumnailPath}
          layout="fill"
          alt={postAlt}
          objectFit="cover"
        />
      </div>
      <div className="w-[70%] flex flex-col">
        <div className="flex items-end gap-1 mb-2">
          <Text variant="p">{`#${category}`}</Text>
        </div>
        <div>
          <Text variant="h3" className="mb-2">
            {title}
          </Text>
          <Text variant="p" className="line-clamp-2 mb-3">
            {summary}
          </Text>
          <Text variant="small" className="text-gray-300">
            {date}
          </Text>
        </div>
      </div>
    </div>
  );
}

function PostCardMobile({
  category,
  title,
  date,
  summary,
  sumnailPath,
  postAlt,
}: IPostCardDeviceProps) {
  return (
    <div>
      <div className="w-full h-[200px] bg-gray-400 rounded-[14px] transition-transform shadow-lg overflow-hidden relative mb-5">
        <Image
          src={sumnailPath}
          layout="fill"
          alt={postAlt}
          objectFit="cover"
        />
      </div>
      <div>
        <Text variant="h3" className="mb-2.5">
          {title}
        </Text>
        <Text variant="p" className="mb-4">
          {summary}
        </Text>
        <Text variant="small" className="text-gray-300">
          {date}
        </Text>
      </div>
    </div>
  );
}

function PostCard({
  category,
  title,
  date,
  summary,
  fileName,
  sumnail,
}: IPostCardProps) {
  const isMobile = useScreen();
  const sumnailPath = `/posts/${fileName}/${sumnail}`;
  const postAlt = `${title} sumnail image`;

  return (
    <>
      {isMobile ? (
        <PostCardMobile
          category={category}
          title={title}
          date={date}
          summary={summary}
          sumnailPath={sumnailPath}
          postAlt={postAlt}
        />
      ) : (
        <PostCardDesktop
          category={category}
          title={title}
          date={date}
          summary={summary}
          sumnailPath={sumnailPath}
          postAlt={postAlt}
        />
      )}
    </>
  );
}

export default PostCard;
