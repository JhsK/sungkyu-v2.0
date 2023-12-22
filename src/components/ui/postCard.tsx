function PostCard() {
  return (
    <div className="flex gap-4 cursor-pointer">
      <div className="w-[30%] h-full bg-gray-400"></div>
      <div className="w-[70%] flex flex-col gap-1">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          The Joke Tax
        </h3>
        <p className="leading-7">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </div>
    </div>
  );
}

export default PostCard;
