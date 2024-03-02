import { IPost } from "@/types/posts";
import PostHeader from "./Header";
import PostBody from "./Body";
import ScrollToTopButton from "./ScrollToTopButton";
import PostFooter from "./Footer";

interface IPostProps {
  post: IPost;
}

function Post({ post }: IPostProps) {
  const { title, category, date, content } = post;

  return (
    <div className="relative pt-8">
      <PostHeader title={title} category={category} date={date} />
      <PostBody content={content} />
      <PostFooter />
      <ScrollToTopButton />
    </div>
  );
}

export default Post;
