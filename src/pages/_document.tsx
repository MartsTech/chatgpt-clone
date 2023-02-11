import {Head, Html, Main, NextScript} from 'next/document';

const Document = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        {/* <title>ChatGPT Clone</title> */}
        {/* <meta content="width=device-width, initial-scale=1" name="viewport" /> */}
        <meta name="description" content="ChatGPT Clone created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-background text-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
