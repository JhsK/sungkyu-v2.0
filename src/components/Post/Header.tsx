import { IPostMetaData } from "@/types/posts";
import { Separator } from "../ui/separator";
import Text from "../ui/text";

interface IPostHeaderProps
  extends Omit<IPostMetaData, "fileName" | "summary" | "thumbnail"> {}

function PostHeader({ category, title, date }: IPostHeaderProps) {
  return (
    <div>
      <Text variant="p">{category}</Text>
      <Text variant="h2" className="mb-1">
        {title}
      </Text>
      <Text variant="small" className="text-gray-300">
        {date}
      </Text>
      <Separator className="mt-2" />
    </div>
  );
}

export default PostHeader;
