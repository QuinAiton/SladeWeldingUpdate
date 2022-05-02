import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import '../styles/globals.scss';
import '../styles/nav.scss';
import '../styles/index.scss';
import '../styles/services.scss';
import '../styles/gallery.scss';
import '../styles/about.scss';
import '../styles/contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <>
      <Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-JQG5B6JTHW`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JQG5B6JTHW');
          `,
          }}
        />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Canadian industrial mobile welding company Slade mobile Welding is a red seal welding company located in British Columbia Canada and services the sea to sky corridor, vancouver,  whistler and pemberton and the surrounding areas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Slades Mobile Welding Services - Welding You Can Trust.
        </title>
        <link rel="canonical" href="https://SladeWelding.ca/index.html" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      </Head>
      <body>
        <Nav />
        <Component {...pageProps} />
      </body>
    </>
  );
}

export default MyApp;
