import Meta from "@/components/Meta";
import Hero from "@/components/Posts/Hero";
import PostLists from "@/components/Posts/Lists";
import { getSortedPosts } from "@/libs/posts";
import { IPagination } from "@/types/common";
import { IPostMetaData } from "@/types/posts";
import { GetStaticProps } from "next";

interface IHomeProps extends IPagination {
  posts: IPostMetaData[];
}

function HomePage({ posts, ...props }: IHomeProps) {
  return (
    <>
      <Meta title="Sungkyu's blog" />
      <Hero />
      <div className="px-6 mt-12">
        <PostLists posts={posts} {...props} />
      </div>
    </>
  );
}

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const size = 5;
  const page = 1;

  const { posts, totalCount } = getSortedPosts({ size, page });

  return {
    props: {
      posts,
      totalCount,
      size,
    },
  };
};
