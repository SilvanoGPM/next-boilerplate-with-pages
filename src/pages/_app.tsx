import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';

import SEO from 'next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
      </Head>

      <DefaultSeo {...SEO} />

      <NextNProgress
        color="#222222"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />

      <Component {...pageProps} />
    </>
  );
}
