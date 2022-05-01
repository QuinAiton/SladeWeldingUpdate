import React from "react";
import Image from "next/dist/client/image";
import { ImArrowRight2 } from 'react-icons/im';
import Link from "next/link";
export default function Home() {
  return (
    <section className='v-section'>
      <div className='fullscreen-video-wrap'>
        <div className="homeImage">
          <Image src="/img25-min.jpg" layout="fill" />
        </div>
        <video
          src='/Background.mp4'
          type='video/mp4'
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </div>

      <div data-aos="fade-up" className='section-content text-center'>
        <h1> Slades Mobile welding Services</h1>
        <h4>Proudly serving Pemberton and the Sea to Sky Corridor</h4>
        <div className="index-button">
          <Link href={"/services"}>
            <button> View Services <ImArrowRight2 /></button>
          </Link>
        </div>
      </div>
    </section>
  );
}
