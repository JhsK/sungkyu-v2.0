import { getPostsList } from '@/lib/markdown';

interface CategoryListParams {
  category: string;
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
