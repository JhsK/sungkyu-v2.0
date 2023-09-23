import Nav from '@/components/Nav';
import Script from 'next/script';

import '../scss/common.scss';
import './globals.css';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sungkyu blog',
  description: 'front-end developer sungkyu blog',
  authors: [{ name: 'sungkyu', url: 'https://github.com/JhsK' }],
  keywords:
    '개발 블로그, 기술 블로그, 프론트엔드, frontend, react, next, javascript',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://sungkyu.info',
    description: '프론트엔드 개발자 임성규의 개발 블로그입니다.',
    siteName: 'Sungkyu blog',
    images: [
      {
        url: 'https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/caspar-camille-rubin-0qvBNep1Y04-unsplash.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-825XQ2WCW4"
        />
        <Script
          id="ga-gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-825XQ2WCW4');`,
          }}
        />
        <meta
          name="google-site-verification"
          content="NZMjmiyn6NYG5M3Wlk7alXrjPWE4ROQx3U_MHWFq1SA"
        />
      </head>
      <body>
        <Nav />
        <div className="2xl:max-w-[1350px] lg:max-w-[1050px] md:max-w-[700px] sm:max-w-[450px] max-w-[320px] my-0 mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
