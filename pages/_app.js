import '../styles/globals.css';
import MainHeader from '../components/MainHeader/MainHeader';

function MyApp({ Component, pageProps }) {
  return (
    <MainHeader>
      <Component {...pageProps} />
    </MainHeader>
  );
}

export default MyApp;
