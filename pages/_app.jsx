import { RecoilRoot } from 'recoil';
import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import { SafeHydrate } from '@commons/helpers/ssr-utils';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const handleRouteChange = (url) => {
    if (window && window.gtag) {
      window.gtag('config', 'G-QW6470DZ7Z', {
        page_path: url,
      });
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Typing Guru</title>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A complete platform to learn typings and to practice your typing skills. Learn to type faster, get better at typing guru, and improve your typing skills."
        />

        <link rel="icon" href="/DialogIcon.png" />
        <link rel="apple-touch-icon" href="/DialogIcon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <RecoilRoot>
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
