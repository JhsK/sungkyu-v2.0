import { Category } from '@/components/Category';
import { getPostsList } from '@/lib/markdown';
import { CategoryType } from '@/types';

interface CategoryListParams {
  category: CategoryType;
}

export function generateStaticParams() {
  // const test = getCategoryPostList('develop');
  return [{ category: 'develop' }, { category: 'b' }, { category: 'c' }];
}

const PostCategoryList = ({ params }: { params: CategoryListParams }) => {
  // const post: PostDetail = await getPost(params.slug);
  const posts = getPostsList({ category: params.category });

  return (
    <>
      <div>test</div>
    </>
  );
};

export default PostCategoryList;
