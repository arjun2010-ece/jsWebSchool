import type { AppProps, AppType } from 'next/app';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
// style
import '@/styles/globals.css';
import GlobalStyles from '@/styles/Global.style';

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-roboto"
});

const _App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nextjs Tailwind CSS Styled Components with TypeScript</title>
        <meta
          name="description"
          content="Nextjs Tailwind CSS Styled Components with TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <main className={`${robotoFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default _App;
