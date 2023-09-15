import MarkdownViewer from '@/components/Post/MarkdownViewer';
import Toc from '@/components/Post/Toc';
import Utterances from '@/components/Utterances';
import { getPost } from '@/lib/markdown';
import { PostDetail } from '@/types';

interface PostDetailParams {
  category: string;
  id: string;
}

const PostDetail = async ({ params }: { params: PostDetailParams }) => {
  const post: PostDetail = await getPost(params.id);

  return (
    <div className="px-4 pt-10 sm:px-6 lg:px-8 flex flex-col gap-4 max-w-3xl mx-auto scroll-smooth">
      <div>
        <h1 className="text-2xl mb-1">{post.title}</h1>
        <span className="text-sm text-neutral-400">{post.date}</span>
      </div>
      <MarkdownViewer post={post.contentHtml} />
      <Toc />
      <div className="mt-16">
        <Utterances />
      </div>
    </div>
  );
};

export default PostDetail;
