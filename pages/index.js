import Head from 'next/head';

export default function Home() {
  return (
    <div class='image'>
      <section class='v-section container'>
        <div class='fullscreen-video-wrap'>
          <video
            src='/Background.mp4'
            type='video/mp4'
            autoplay='true'
            loop='true'
            muted='true'
          />
        </div>
        <div class='lable section-content text-center'>
          <h1>Mobile welding Services</h1>
          <h4>Proudly serving Pemberton and the Sea to Sky Corridor</h4>
        </div>
      </section>
    </div>
  );
}
