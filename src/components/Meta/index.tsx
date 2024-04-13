import Head from "next/head";

interface IMetaProps {
  title: string;
  ogTitle?: string;
  ogImage?: string;
}

const BASE_URL = "https://sungkyu.site";

function Meta({
  title,
  ogTitle = "Sungky's blog",
  ogImage = "og_thumnail.jpeg",
}: IMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="주니어 프론트엔드 개발자 Sungkyu의 기술 블로그입니다."
      />
      <meta name="author" content="Sungkyu(Jhsk)" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:description"
        content="주니어 프론트엔드 개발자 Sungkyu의 기술 블로그입니다."
      />
      <meta property="og:url" content={BASE_URL} />
      <meta property="og:locale" content="ko_KR" />
      {/* <meta property="og:image" content={`${BASE_URL}/${ogImage}`} /> */}
      <meta property="og:site_name" content="Sungkyu's blog" />
      <meta
        name="naver-site-verification"
        content="5edb73cb4c7b32558c930626848c6ca1d41410c6"
      />
    </Head>
  );
}

export default Meta;
