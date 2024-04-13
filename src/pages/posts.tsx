import Meta from "@/components/Meta";
import Posts from "@/components/Posts";
import { getAllCategories, getSortedPosts } from "@/libs/posts";
import { IPagination } from "@/types/common";
import { IPostMetaData } from "@/types/posts";
import { GetServerSideProps } from "next";

interface IPostsPageProps extends IPagination {
  posts: IPostMetaData[];
  categories: string[];
}

function PostsPage({ posts, categories, ...props }: IPostsPageProps) {
  return (
    <>
      <Meta
        title="Sungkyu's posts"
        ogTitle="Sungkyu's posts"
        ogDescription="배운 내용을 기록하고 공유한 리스트입니다."
        ogUrl="posts"
      />
      <Posts posts={posts} categories={categories} {...props} />
    </>
  );
}

export default PostsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const size = 5;
  const { page, category } = context.query;
  const currentCategory = category as string;
  let currentPage = 1;

  if (typeof page === "string" && !isNaN(Number(page))) {
    currentPage = Number(page);
  }

  const { posts, totalCount } = getSortedPosts({
    size,
    page: currentPage,
    category: currentCategory,
  });
  const categories = getAllCategories();

  return {
    props: {
      posts,
      categories,
      totalCount,
      size,
      currentPage,
    },
  };
};
