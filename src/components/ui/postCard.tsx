import Text from "./text";

function PostCard() {
  return (
    <div className="flex gap-6 cursor-pointer group">
      <div className="w-[260px] h-[180px] bg-gray-400 rounded-[14px] transition-transform group-hover:-translate-y-2 shadow-lg"></div>
      <div className="w-[70%] flex flex-col pb-2 mt-1">
        <div className="flex items-end gap-1 mb-3.5">
          <Text variant="p">React</Text>
        </div>
        <div className="flex flex-col gap-1.5 mb-6">
          <Text variant="h3">The Joke Tax</Text>
          <Text variant="p" className="line-clamp-2">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax .
          </Text>
        </div>
        <Text variant="small" className="text-gray-300">
          23. 08. 18
        </Text>
      </div>
    </div>
  );
}

export default PostCard;
