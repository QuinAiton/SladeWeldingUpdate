
export default function Home() {
  return (
    <section className='v-section'>
      <div className='fullscreen-video-wrap'>
        <video
          src='/Background.mp4'
          type='video/mp4'
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </div>
      <div className='section-content text-center'>
        <h1>Mobile welding Services</h1>
        <h4>Proudly serving Pemberton and the Sea to Sky Corridor</h4>
      </div>
    </section>
  );
}
