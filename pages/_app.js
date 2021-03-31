import Nav from '../components/Nav';
import '../styles/globals.scss';
import '../styles/nav.scss';
import '../styles/index.scss';
import '../styles/services.scss';
import '../styles/gallery.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
