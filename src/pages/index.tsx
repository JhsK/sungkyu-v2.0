import Image from "next/image";
import { getSortedPosts } from "@/lib/posts";
import { IPostMetaData } from "@/types/posts";
import Categories from "@/components/Posts/Categories";
import PostLists from "@/components/Posts/Lists";
import { GetServerSideProps } from "next";

interface IHomeProps {
  posts: IPostMetaData[];
  totalCount: number;
}

function HomePage({ posts, totalCount }: IHomeProps) {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const size = 10;
  const { page } = context.query;
  let nextPage = 1;

  if (typeof page === "string" && !isNaN(Number(page))) {
    nextPage = Number(page);
  }

  const { posts, totalCount } = getSortedPosts(size, nextPage);
  return {
    props: {
      posts,
      totalCount,
    },
  };
};
