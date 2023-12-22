import { Main } from '$components/main';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Next Boilerplate"
        description="Simple Next Boilerplate"
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          images: [
            {
              url: './cover.png', // insert an url to a image cover with dimensions: 1280x720
              width: 1280,
              height: 720,
              alt: 'Next Boilerplate',
            },
          ],
        }}
      />

      <Main />
    </>
  );
}
