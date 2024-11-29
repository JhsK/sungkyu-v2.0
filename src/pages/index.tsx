import Layout from "@/components/Layout";
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
    <Layout type="centered">
      <Meta title="Sungkyu's blog" />
      <Hero />
      <div className="px-6 mt-12">
        <PostLists posts={posts} {...props} />
      </div>
    </Layout>
  );
}

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const size = 6;
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
