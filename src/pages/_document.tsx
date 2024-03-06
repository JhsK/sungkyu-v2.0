import { Html, Head, Main, NextScript } from "next/document";

const GA_Measurement_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_Measurement_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GA_Measurement_ID}');
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
