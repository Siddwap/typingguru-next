import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <link href="/css/keyboard/fonts/font-language.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
