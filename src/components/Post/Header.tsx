import { Separator } from "../ui/separator";
import Text from "../ui/text";

function PostHeader() {
  return (
    <div>
      <Text variant="p">React</Text>
      <Text variant="h2" className="mb-1">
        Test blodg post1
      </Text>
      <Text variant="small" className="text-gray-300">
        23. 08. 18
      </Text>
      <Separator className="mt-2" />
    </div>
  );
}

export default PostHeader;
