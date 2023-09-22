import Description from '@/components/PostList/Description';
import List from '@/components/PostList/List';
import { PAGE_LIST_LIMIT } from '@/const';
import { getCategory, getPostsList } from '@/lib/markdown';
import { Metadata } from 'next';

export const generateMetadata = async ({
  searchParams,
}: PostListPageProps): Promise<Metadata> => {
  const pageParams = Number(searchParams?.page || '1');
  const categoryParam = searchParams?.category || 'all';
  const category =
    categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);

  return {
    title: `${category} Posts - Sungkyu blog`,
    openGraph: {
      type: 'website',
      url: `https://sungkyu.info/post?category=${categoryParam}&page=${pageParams}`,
      description: '프론트엔드 개발자 임성규의 개발 블로그입니다.',
      siteName: 'Sungkyu blog',
      images: [
        {
          url: 'https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/caspar-camille-rubin-0qvBNep1Y04-unsplash.jpg',
        },
      ],
    },
  };
};

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
    <div className="flex flex-col md:gap-24 gap-14">
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
