import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import { SafeHydrate } from '@commons/helpers/ssr-utils';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
        <Head>
          <title>Typing Guru</title>
        </Head>
        {!Component.SSR && (
          <SafeHydrate>
            <Component {...pageProps} />
          </SafeHydrate>
        )}
        {Component.SSR && <Component {...pageProps} />}
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default MyApp;
