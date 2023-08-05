import "../styles/globals.css";

// SEO
// import { DefaultSeo } from "next-seo";
// import SEO from "../next-seo.config";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <DefaultSeo {...SEO} />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;


// import type { AppProps, AppType } from 'next/app';
import Head from 'next/head';
// import { Nunito } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// style
// import '@/styles/globals.css';
// enable after some time
import GlobalStyles from '../styles/Global.style';

// const nunitoFont = Nunito({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
//   variable: '--font-nunito',
// });


const _App = ({ Component, pageProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleRouteChange = (url) => {
      window && window.gtag && window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
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
      <div className={`font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default _App;