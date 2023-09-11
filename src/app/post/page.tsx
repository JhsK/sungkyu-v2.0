import Description from '@/components/PostList/Description';
import List from '@/components/PostList/List';
import { getPostsList } from '@/lib/markdown';

const PostListPage = () => {
  const postList = getPostsList({ limit: 8, category: 'all' });

  return (
    <div className="space-y-[104px]">
      <Description />
      <List postList={postList} />
    </div>
  );
};

export default PostListPage;
