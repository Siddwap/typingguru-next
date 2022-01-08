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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Redressed&family=Rhodium+Libre&family=Risque&family=Roboto+Mono&family=Ropa+Sans&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-J7DGFTDF5Q"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J7DGFTDF5Q');
              gtag('config', '[Tracking ID]', { page_path: window.location.pathname });
            `,
            }}
          />
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
