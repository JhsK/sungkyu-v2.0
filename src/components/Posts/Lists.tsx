import PostCard from "@/components/ui/postCard";
import { IPostMetaData } from "@/types/posts";

interface IPostListsProps {
  posts: IPostMetaData[];
}

function PostLists({ posts }: IPostListsProps) {
  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          category={post.category}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default PostLists;
