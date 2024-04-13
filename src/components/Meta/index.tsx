import Head from "next/head";

interface IMetaProps {
  title: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

const BASE_URL = "https://www.sungkyu.site";

function Meta({ title, ogTitle, ogDescription, ogImage, ogUrl }: IMetaProps) {
  const url = ogUrl ? `${BASE_URL}/${ogUrl}` : BASE_URL;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={
          ogDescription ||
          "주니어 프론트엔드 개발자 Sungkyu의 기술 블로그입니다."
        }
      />
      <meta name="author" content="Sungkyu(Jhsk)" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || "Sungkyu's blog"} />
      <meta
        property="og:description"
        content={
          ogDescription ||
          "주니어 프론트엔드 개발자 Sungkyu의 기술 블로그입니다."
        }
      />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Sungkyu's blog" />
      <meta
        name="naver-site-verification"
        content="5edb73cb4c7b32558c930626848c6ca1d41410c6"
      />
    </Head>
  );
}

export default Meta;
