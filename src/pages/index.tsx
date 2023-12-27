import Categories from "@/components/Posts/Categories";
import PostLists from "@/components/Posts/Lists";
import { getSortedPosts } from "@/lib/posts";
import { IPagination } from "@/types/common";
import { IPostMetaData } from "@/types/posts";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface IHomeProps extends IPagination {
  posts: IPostMetaData[];
}

function HomePage({ posts, ...props }: IHomeProps) {
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <div className="w-full h-[350px] relative mb-10">
        <Image src="/main.jpg" fill alt="main image" />
      </div>
      <Categories categories={categories} />
      <PostLists posts={posts} {...props} />
    </>
  );
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const size = 5;
  const { page } = context.query;
  let currentPage = 1;

  if (typeof page === "string" && !isNaN(Number(page))) {
    currentPage = Number(page);
  }

  const { posts, totalCount } = getSortedPosts(size, currentPage);

  return {
    props: {
      posts,
      totalCount,
      size,
      currentPage,
    },
  };
};
