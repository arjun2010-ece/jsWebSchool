import type { AppProps, AppType } from 'next/app';
import Head from 'next/head';
import { Nunito } from 'next/font/google';
// style
import '@/styles/globals.css';
import GlobalStyles from '@/styles/Global.style';

const nunitoFont = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-nunito"
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
      <main className={`${nunitoFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default _App;
