import Layout from '../components/Layout';
import '../styles/globals.scss';
import '../styles/nav.scss';
import '../styles/index.scss';
import '../styles/services.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
