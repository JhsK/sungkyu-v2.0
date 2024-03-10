import Meta from "@/components/Meta";
import Hero2 from "@/components/Posts/Hero";
import PostLists from "@/components/Posts/Lists";
import { getSortedPosts } from "@/libs/posts";
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
      <Meta title="Sungkyu's blog" />
      <Hero2 />
      <div className="px-6 mt-12">
        <PostLists posts={posts} {...props} />
      </div>
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

  const { posts, totalCount } = getSortedPosts({ size, page: currentPage });

  return {
    props: {
      posts,
      totalCount,
      size,
      currentPage,
    },
  };
};
