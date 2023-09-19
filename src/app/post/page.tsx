import Description from '@/components/PostList/Description';
import List from '@/components/PostList/List';
import { PAGE_LIST_LIMIT } from '@/const';
import { getCategory, getPostsList } from '@/lib/markdown';

interface PostListPageProps {
  searchParams: { category?: string; page?: string };
}

const PostListPage = ({ searchParams }: PostListPageProps) => {
  const categoryParam = searchParams?.category || 'all';
  const pageParams = Number(searchParams?.page || '1');

  const { posts: postList, totalCount } = getPostsList({
    limit: PAGE_LIST_LIMIT,
    category: categoryParam,
    page: pageParams,
  });
  const category = getCategory();

  const totalPage = Math.ceil(totalCount / PAGE_LIST_LIMIT);

  return (
    <div className="space-y-[104px]">
      <Description />
      <List
        postList={postList}
        category={category}
        categoryParam={categoryParam}
        currentPage={pageParams}
        totalPage={totalPage}
      />
    </div>
  );
};

export default PostListPage;
