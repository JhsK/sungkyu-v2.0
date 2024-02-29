import { IPostMetaData } from "@/types/posts";
import Categories from "./Categories";
import PostLists from "./Lists";
import { IPagination } from "@/types/common";

interface IPostsProps extends IPagination {
  posts: IPostMetaData[];
  categories: string[];
}

function Posts({ posts, categories, ...props }: IPostsProps) {
  return (
    <div className="px-6">
      <Categories categories={categories} />
      <PostLists posts={posts} {...props} />
    </div>
  );
}

export default Posts;
