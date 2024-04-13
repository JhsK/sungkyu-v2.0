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
    <>
      <Head>
        <meta
          property="og:image"
          content={"https://www.sungkyu.site/posts/3/thumbnail.png"}
        />
      </Head>
      <Meta
        title={post.title}
        ogTitle={post.title}
        ogDescription={post.summary}
        // ogImage={`/posts/${post.fileName}/${post.thumbnail}`}
      />
      <Post post={post} />
    </>
  );
}

export default PostDetailPage;

export async function getStaticPaths() {
  const paths = getPostsUrls();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { title: string };
}) {
  const post = await getPost(params.title);

  return {
    props: {
      post,
    },
  };
}
