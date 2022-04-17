import dynamic from 'next/dynamic';
const Nav = dynamic(() => import('../components/Nav'));
import '../styles/globals.scss';
import '../styles/nav.scss';
import '../styles/index.scss';
import '../styles/services.scss';
import '../styles/gallery.scss';
import '../styles/about.scss';
import '../styles/contact.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
