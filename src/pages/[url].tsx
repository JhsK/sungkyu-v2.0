import Layout from "@/components/Layout";
import Meta from "@/components/Meta";
import Post from "@/components/Post";
import { getPost, getPostsUrls } from "@/libs/posts";
import { IPost } from "@/types/posts";
import Head from "next/head";

interface IPostDetailPageProps {
  post: IPost;
}

function PostDetailPage({ post }: IPostDetailPageProps) {
  return (
    <Layout type="centered">
      <Meta
        title={post.title}
        ogTitle={post.title}
        ogDescription={post.summary}
        ogImage={`posts/${post.fileName}/${post.thumbnail}`}
        ogUrl={post.url}
      />
      <Post post={post} />
    </Layout>
  );
}

export default PostDetailPage;

export async function getStaticPaths() {
  const paths = await getPostsUrls();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { url: string } }) {
  const post = await getPost(params.url);

  return {
    props: {
      post,
    },
  };
}
