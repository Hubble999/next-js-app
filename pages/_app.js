import Head from 'next/head';
import '../styles/globals.scss';
import MainHeader from '../components/MainHeader/MainHeader';

function MyApp({ Component, pageProps }) {
  return (
    <MainHeader>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </MainHeader>
  );
}

export default MyApp;
