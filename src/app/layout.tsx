import Nav from '@/components/Nav';
import Script from 'next/script';

import '../scss/common.scss';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sungkyu blog',
  description: 'front-end developer sungkyu blog',
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
      </head>
      <body>
        <Nav />
        <div className="max-w-[1350px] my-0 mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
