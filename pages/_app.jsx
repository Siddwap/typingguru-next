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

        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Redressed&family=Rhodium+Libre&family=Risque&family=Roboto+Mono&family=Ropa+Sans&display=swap"
            rel="stylesheet"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QW6470DZ7Z"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ''G-QW6470DZ7Z', { page_path: window.location.pathname });
              `,
            }}
          />
        </Head>

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
