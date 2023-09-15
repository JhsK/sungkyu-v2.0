import {
  ArrowRightIcon,
  GithubColorIcon,
  GithubIcon,
  GmailColorIcon,
  InstargramColorIcon,
  LinkedinColorIcon,
} from '@/components/common/Icon';
import PostItem from '@/components/Post/PostItem';
import VisitorChart from '@/components/VisitorChart';
import { MAIN_INTRO_TEXT, PROFILE_URL } from '@/const';
import { getRandomNumber } from '@/lib/heler';
import { getPostsList } from '@/lib/markdown';
import { getServiceVistior, getServiePageView } from '@/server/statistic';
import Link from 'next/link';

export default async function HomePage() {
  const postList = getPostsList({ limit: 8, category: null });
  const visitor = (await getServiceVistior()) as Array<any>;
  const pageViews = (await getServiePageView()) as Array<any>;

  const lastPostLeft = [1, 2, 3, 4];
  const lastPostRight = [1, 2, 3];
  const calculateWidth = 'w-[calc(50%-18px)]';

  const renderIcon = [
    {
      component: <GithubColorIcon />,
      url: PROFILE_URL.github,
    },
    {
      component: <LinkedinColorIcon />,
      url: PROFILE_URL.linkedIn,
    },
    {
      component: <GmailColorIcon />,
      url: PROFILE_URL.gmail,
    },
    {
      component: <InstargramColorIcon />,
      url: PROFILE_URL.instargram,
    },
  ];

  const latestPostRender = () => {
    return (
      <div
        className={`${calculateWidth} h-[582px] rounded-2xl main-shadow sticky top-[90px]`}
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
      <section className="h-[116px] rounded-2xl bg-white main-shadow px-9 flex items-center justify-between">
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
      <section className="flex justify-between w-full">
        <div className={`${calculateWidth} flex justify-between`}>
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
          <div className={`${calculateWidth} flex flex-col gap-y-9`}>
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
        {latestPostRender()}
      </section>
      <section className="flex items-center justify-between">
        <div
          className={`rounded-3xl main-shadow h-[360px] bg-concern p-9 ${calculateWidth} flex flex-col gap-9`}
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
          className={`rounded-3xl main-shadow h-[360px] p-9 ${calculateWidth} flex flex-col gap-6`}
        >
          <span className="text-32 font-bold leading-[56px]">
            이걸 누가 보러 와?
          </span>
          <VisitorChart
            visitor={visitor.map((visit) => Number(visit[1]))}
            pageViews={pageViews.map((view) => Number(view[1]))}
          />
        </div>
      </section>
    </main>
  );
}
