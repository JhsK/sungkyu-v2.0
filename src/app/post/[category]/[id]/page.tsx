import MarkdownViewer from '@/components/Post/MarkdownViewer';
import Toc from '@/components/Post/Toc';
import { getPost } from '@/lib/markdown';
import { CategoryType, PostDetail } from '@/types';

interface PostDetailParams {
  category: CategoryType;
  id: string;
}

export function generateStaticParams() {
  return [
    { category: 'a', product: '1' },
    { category: 'b', product: '2' },
    { category: 'c', product: '3' },
  ];
}

const PostDetail = async ({ params }: { params: PostDetailParams }) => {
  const post: PostDetail = await getPost(params.id);

  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col gap-4 max-w-3xl mx-auto scroll-smooth">
      <span>{Date.now()}</span>
      <div>
        <h1 className="text-2xl mb-1">{post.title}</h1>
        <span className="text-sm text-neutral-400">{post.date}</span>
      </div>
      <MarkdownViewer post={post.contentHtml} />
      <Toc />
    </div>
  );
};

export default PostDetail;
