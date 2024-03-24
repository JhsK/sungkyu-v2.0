import Meta from "@/components/Meta";
import Post from "@/components/Post";
import { getPost, getPostsTitles } from "@/libs/posts";
import { IPost } from "@/types/posts";

interface IPostDetailPageProps {
  post: IPost;
}

function PostDetailPage({ post }: IPostDetailPageProps) {
  return (
    <>
      <Meta title={post.title} ogTitle={post.title} />
      <Post post={post} />
    </>
  );
}

export default PostDetailPage;

export async function getStaticPaths() {
  const paths = getPostsTitles();
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
