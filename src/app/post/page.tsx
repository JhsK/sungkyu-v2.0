import Description from '@/components/PostList/Description';
import List from '@/components/PostList/List';
import { getCategory, getPostsList } from '@/lib/markdown';

interface PostListPageProps {
  searchParams: { category?: string };
}

const PostListPage = ({ searchParams }: PostListPageProps) => {
  const categoryParams = searchParams?.category || null;
  const postList = getPostsList({ limit: 8, category: categoryParams });
  const category = getCategory();

  return (
    <div className="space-y-[104px]">
      <Description />
      <List
        postList={postList}
        category={category}
        categoryParams={categoryParams}
      />
    </div>
  );
};

export default PostListPage;
