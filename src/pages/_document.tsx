import {Head, Html, Main, NextScript} from 'next/document';

const Document = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="application-name" content="ChatGPT-Clone" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="ChatGPT-Clone" />
        <meta name="description" content="ChatGPT-Clone created with Next.js" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="bg-background text-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
