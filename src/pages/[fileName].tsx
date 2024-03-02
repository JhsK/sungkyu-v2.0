import Meta from "@/components/Meta";
import Post from "@/components/Post";
import { getPost, getPostsFileName } from "@/libs/posts";
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
  const paths = getPostsFileName();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { fileName: string };
}) {
  const post = await getPost(params.fileName);

  return {
    props: {
      post,
    },
  };
}
