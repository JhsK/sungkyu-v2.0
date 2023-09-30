'use client';
import { PostList } from '@/lib/type';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CategoryBadge from '../Post/CategoryBadge';
import PostItem from '../Post/PostItem';
import Pagination from '../common/Pagination';

interface ListProps {
  postList: PostList[];
  category: string[];
  categoryParam: string | null;
  currentPage: number;
  totalPage: number;
}

const List = ({
  postList,
  category,
  categoryParam,
  currentPage,
  totalPage,
}: ListProps) => {
  const router = useRouter();

  const handlePageClick = (page: number) => {
    router.push(`?category=${categoryParam}&page=${page}`);
  };

  return (
    <>
      <article className="flex flex-col space-y-10">
        <div className="flex items-center justify-between">
          <div className="space-x-3">
            {category.map((category) => (
              <CategoryBadge
                handleClick={() => router.push(`?category=${category}&page=1`)}
                key={category}
                active={categoryParam === category}
              >
                {category}
              </CategoryBadge>
            ))}
          </div>
          {/* <Dropdown
            label="test"
            renderTrigger={() => (
              <div className="bg-badgeGray rounded-3xl py-[9px] px-4 w-32 flex items-center gap-[6px] cursor-pointer justify-between">
                <span className="text-base font-medium">최신순</span>
                <ArrowBottomIcon className="w-2.5 h-3" />
              </div>
            )}
            className="rounded-lg bg-badgeGray w-32"
          >
            <Dropdown.Item className="text-base">Dashboard</Dropdown.Item>
            <Dropdown.Item className="text-base">Settings</Dropdown.Item>
            <Dropdown.Item className="text-base">Earnings</Dropdown.Item>
            <Dropdown.Item className="text-base">Sign out</Dropdown.Item>
          </Dropdown> */}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 gap-x-[3%]">
          {postList.map((post) => (
            <div key={post.id}>
              <Link href={`/post/${post.category}/${post.id}`} key={post.id}>
                <PostItem
                  post={post}
                  imageView
                  style={{
                    content: 'w-full sm:h-[224px] h-[204px]',
                    image: 'sm:h-[228px] h-[208px]',
                  }}
                  hoverAnimation
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Pagination
            center
            currentPage={currentPage}
            totalPage={totalPage}
            onPageChange={handlePageClick}
          />
        </div>
      </article>
    </>
  );
};

export default List;
