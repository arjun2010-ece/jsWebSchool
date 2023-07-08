import type { AppProps, AppType } from 'next/app';
import Head from 'next/head';
import { Nunito } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// style
import '@/styles/globals.css';
import GlobalStyles from '@/styles/Global.style';

const nunitoFont = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
});


const _App: AppType = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window && window.gtag && window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>webschooljs: Best place to learn frontend development</title>
        <meta
          name="description"
          content="Best place to learn frontend development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <main className={`${nunitoFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default _App;
