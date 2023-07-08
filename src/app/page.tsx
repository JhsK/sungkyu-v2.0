import React from 'react';
import { getPostsList } from '@/lib/markdown';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';
import '../index.css';
import PostItem from '@/components/Post/PostItem';

export default function HomePage() {
  const posts = getPostsList({ limit: 5, category: 'all' });

  const calculateWidth = 'w-[calc(50%-18px)]';

  return (
    <main className="pt-16 flex flex-col gap-9">
      {/* <Banner />
      <div className="max-w-3xl mx-auto">
        <Category activeCategory="all" />
        <List posts={posts} />
        <div className="pb-6" />
      </div> */}
      <section className="h-[116px] rounded-2xl bg-white main-shadow px-9 flex items-center justify-between">
        <h2 className="m-0 text-3xl font-bold">내가 개발자가 될 상인가.</h2>
        <span>아이콘 슬롯입니다</span>
      </section>
      <section className="flex justify-between w-full">
        <div className={`${calculateWidth} h-10 flex justify-between`}>
          <div className={`${calculateWidth} flex flex-col gap-y-9`}>
            {[1, 2, 3].map((post, index) =>
              index === 0 ? (
                <PostItem
                  category="프론트엔드"
                  style={{ content: 'w-full h-[195px]' }}
                  key={index}
                />
              ) : (
                <PostItem
                  category="프론트엔드"
                  style={{ content: 'w-full h-[195px]', image: 'h-[168px]' }}
                  image="test"
                  key={index}
                />
              )
            )}
          </div>
          <div className={`${calculateWidth} flex flex-col gap-y-9`}>
            {[1, 2].map((post, index) => (
              <PostItem
                category="프론트엔드"
                style={{ content: 'w-full h-[195px]', image: 'h-[168px]' }}
                image="test"
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={`${calculateWidth} h-[582px] rounded-2xl main-shadow`}>
          <PostItem
            category="프론트엔드"
            style={{ content: 'w-full h-[228px]', image: 'h-[354px]' }}
            image={'test'}
          />
        </div>
      </section>
      <div className="pb-10"></div>
    </main>
  );
}
