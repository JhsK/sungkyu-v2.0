import Image from "next/image";
import { getSortedPosts } from "@/lib/posts";
import { IPostMetaData } from "@/types/posts";
import Categories from "@/components/Posts/Categories";
import PostLists from "@/components/Posts/Lists";

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

function HomePage({ posts }: IHomeProps) {
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <div className="w-full h-[350px] relative mb-10">
        <Image src="/main.jpg" fill alt="main image" />
      </div>
      <Categories categories={categories} />
      <PostLists posts={posts} />
    </>
  );
}

export default HomePage;
