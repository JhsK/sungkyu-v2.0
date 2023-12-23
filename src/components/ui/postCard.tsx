import { IPostMetaData } from "@/types/posts";
import Text from "./text";

interface IPostCardProps extends IPostMetaData {}

function PostCard({ category, title, date }: IPostCardProps) {
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
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax .
          </Text>
        </div>
        <Text variant="small" className="text-gray-300">
          {date}
        </Text>
      </div>
    </div>
  );
}

export default PostCard;
