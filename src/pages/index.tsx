import Categories from "@/components/Posts/Categories";
import Hero from "@/components/Posts/Hero";
import PostLists from "@/components/Posts/Lists";
import { getSortedPosts } from "@/lib/posts";
import { IPagination } from "@/types/common";
import { IPostMetaData } from "@/types/posts";
import { GetServerSideProps } from "next";

interface IHomeProps extends IPagination {
  posts: IPostMetaData[];
}

function HomePage({ posts, ...props }: IHomeProps) {
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <Hero />
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
