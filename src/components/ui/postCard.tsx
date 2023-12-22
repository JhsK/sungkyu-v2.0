function PostCard() {
  return (
    <div className="flex gap-6 cursor-pointer group">
      <div className="w-[260px] h-[180px] bg-gray-400 rounded-[14px] transition-transform group-hover:-translate-y-2 shadow-lg"></div>
      <div className="w-[70%] flex flex-col pb-2 mt-1">
        <div className="flex items-end gap-1 mb-3.5">
          <p className="leading-7">React</p>
        </div>
        <div className="flex flex-col gap-1.5 mb-6">
          <h3 className="text-2xl font-semibold tracking-tight">
            The Joke Tax
          </h3>
          <p className="leading-7 line-clamp-2">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax .
          </p>
        </div>
        <small className="text-sm font-medium leading-none text-gray-300">
          23. 08. 18
        </small>
      </div>
    </div>
  );
}

export default PostCard;
