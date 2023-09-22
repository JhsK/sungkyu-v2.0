import {
  ArrowRightIcon,
  GithubColorIcon,
  GmailColorIcon,
  InstargramColorIcon,
  LinkedinColorIcon,
} from '@/components/common/Icon';
import PostItem from '@/components/Post/PostItem';
import VisitorChart from '@/components/VisitorChart';
import { MAIN_INTRO_TEXT, PAGE_LIST_LIMIT, PROFILE_URL } from '@/const';
import { getRandomNumber } from '@/lib/heler';
import { getPostsList } from '@/lib/markdown';
import { getServiceVistior, getServiePageView } from '@/server/statistic';
import Link from 'next/link';

export default async function HomePage() {
  const { posts: postList } = getPostsList({
    limit: PAGE_LIST_LIMIT,
    category: 'all',
    page: 1,
  });
  const visitor = (await getServiceVistior()) as Array<any>;
  const pageViews = (await getServiePageView()) as Array<any>;

  const lastPostLeft = [1, 2, 3, 4];
  const lastPostRight = [1, 2, 3];
  const calculateWidth = '2xl:w-[calc(50%-18px)]';

  const renderIcon = [
    {
      component: (
        <GithubColorIcon className="md:w-[60px] md:h-[60px] w-9 h-9" />
      ),
      url: PROFILE_URL.github,
    },
    {
      component: (
        <LinkedinColorIcon className="md:w-[60px] md:h-[60px] w-9 h-9" />
      ),
      url: PROFILE_URL.linkedIn,
    },
    {
      component: <GmailColorIcon className="md:w-[60px] md:h-[60px] w-9 h-9" />,
      url: PROFILE_URL.gmail,
    },
    {
      component: (
        <InstargramColorIcon className="md:w-[60px] md:h-[60px] w-9 h-9" />
      ),
      url: PROFILE_URL.instargram,
    },
  ];

  const latestPostRender = () => {
    return (
      <div
        className={`${calculateWidth} w-full h-[582px] rounded-2xl main-shadow lg:sticky lg:top-[90px]`}
      >
        <PostItem
          post={postList[0]}
          imageView
          style={{ content: 'w-full h-[228px]', image: 'h-[354px]' }}
        />
      </div>
    );
  };

  return (
    <main className="pt-16 flex flex-col gap-9">
      <section className="h-[116px] rounded-2xl bg-white main-shadow px-9 flex md:flex-row items-center md:justify-between flex-col justify-center gap-y-3 animate-fade-up animate-duration-[300ms] animate-ease-linear animate-normal animate-fill-forwards">
        <h2 className="m-0 text-3xl font-bold">
          {MAIN_INTRO_TEXT[getRandomNumber(0, MAIN_INTRO_TEXT.length - 1)]}
        </h2>
        <div className="flex item-center space-x-2">
          {renderIcon.map((icon) => (
            <Link href={icon.url} target="_blank" className="cursor-pointer">
              {icon.component}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-9 animate-fade-up animate-duration-500 animate-delay-300 animate-ease-linear animate-normal animate-fill-forwards">
        <article className="flex lg:flex-row flex-col lg:justify-between 2xl:gap-0 lg:gap-x-[3%] gap-y-9 w-full">
          {latestPostRender()}
          <div
            className={`${calculateWidth} 2xl:flex 2xl:flex-row 2xl:justify-between md:grid lg:grid-cols-1 md:grid-cols-2 md:gap-x-[3%] flex flex-col gap-y-6`}
          >
            <div className={`${calculateWidth} flex flex-col gap-y-9`}>
              {lastPostLeft.map((post, index) =>
                index === 0 || index === lastPostLeft.length - 1 ? (
                  <PostItem
                    post={postList[0]}
                    style={{ content: 'w-full h-[195px]' }}
                    key={index}
                  />
                ) : (
                  <PostItem
                    post={postList[0]}
                    imageView
                    style={{ content: 'w-full h-[195px]', image: 'h-[168px]' }}
                    key={index}
                  />
                )
              )}
            </div>
            <div
              className={`${calculateWidth} 2xl:flex flex-col gap-y-9 lg:hidden flex`}
            >
              {lastPostRight.map((post, index) => (
                <PostItem
                  post={postList[0]}
                  imageView
                  style={{ content: 'w-full h-[195px]', image: 'h-[168px]' }}
                  key={index}
                />
              ))}
            </div>
          </div>
        </article>
        <div className="flex items-center flex-wrap gap-9">
          <div
            className={`rounded-3xl main-shadow h-[360px] bg-concern p-9 lg:w-[calc(50%-36px)] w-full flex flex-col gap-9`}
          >
            <span className="text-32 font-bold leading-[56px]">
              1년차 프론트엔드 개발자의
              <br />
              고민거리
            </span>
            <Link href={'/post'}>
              <button className="flex items-center rounded-3xl bg-black py-[9px] pl-[13px] w-[170px] text-white text-13 text-left">
                <span className="mr-3">작성자가 궁금하다면?</span>
                <ArrowRightIcon />
              </button>
            </Link>
          </div>
          <div
            className={`rounded-3xl main-shadow h-[360px] p-9 lg:w-[calc(50%-36px)] w-full flex flex-col gap-6`}
          >
            <span className="text-32 font-bold leading-[56px]">
              이걸 누가 보러 와?
            </span>
            <VisitorChart
              visitor={visitor.map((visit) => Number(visit[1]))}
              pageViews={pageViews.map((view) => Number(view[1]))}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
