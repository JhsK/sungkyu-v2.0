import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';
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
      <Banner />
      <div className="max-w-3xl mx-auto">
        <Category activeCategory={params.category} />
        <List posts={posts} />
      </div>
    </>
  );
};

export default PostCategoryList;
