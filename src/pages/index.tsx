import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/postCard";
import Image from "next/image";
import { getSortedPosts } from "@/lib/posts";
import { IPostMetaData } from "@/types/posts";

interface IHomeProps {
  posts: IPostMetaData[];
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  return {
    props: {
      posts,
    },
  };
}

function Home({ posts }: IHomeProps) {
  return (
    <>
      <div className="w-full h-[350px] relative mb-10">
        <Image src="/main.jpg" fill alt="main image" />
      </div>
      <div className="flex items-center gap-4 justify-center mb-4">
        {["HTML", "CSS", "React", "Next.js"].map((category) => (
          <Button key={category} variant="outline" className="rounded-3xl">
            {category}
          </Button>
        ))}
      </div>
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
    </>
  );
}

export default Home;
