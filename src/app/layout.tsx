import { Nav } from '@/components/Nav';
import ThemeProvider from '@/components/ThemeProvider';
import Script from 'next/script';

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
    <html lang="ko">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8XJ1RH1BWJ"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8XJ1RH1BWJ');
          `,
        }}
      />
      <body>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
