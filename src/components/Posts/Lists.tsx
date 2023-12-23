import PostCard from "@/components/ui/postCard";
import { IPostMetaData } from "@/types/posts";
import Link from "next/link";

interface IPostListsProps {
  posts: IPostMetaData[];
}

function PostLists({ posts }: IPostListsProps) {
  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <Link href={`/${post.fileName}`} key={post.title}>
          <PostCard
            title={post.title}
            category={post.category}
            date={post.date}
          />
        </Link>
      ))}
    </div>
  );
}

export default PostLists;
