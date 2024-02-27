import Meta from "@/components/Meta";
import Categories from "@/components/Posts/Categories";
import PostLists from "@/components/Posts/Lists";
import { getSortedPosts } from "@/libs/posts";
import { IPagination } from "@/types/common";
import { IPostMetaData } from "@/types/posts";
import { GetServerSideProps } from "next";

interface IPostsProps extends IPagination {
  posts: IPostMetaData[];
}

function PostsPage({ posts, ...props }: IPostsProps) {
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <Meta title="Sungkyu's posts" />
      <div className="px-6">
        <Categories categories={categories} />
        <PostLists posts={posts} {...props} />
      </div>
    </>
  );
}

export default PostsPage;

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
