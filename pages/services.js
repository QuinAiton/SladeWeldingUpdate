import React from 'react';
import Image from 'next/image';
const services = () => {
  return (
    <div className='services-container'>
      <h2>Services</h2>
      <div className='service-card'>
        <Image
          src='/pressure_welding-min.jpg'
          alt='Pressure Welding'
          width={400}
          height={400}
        />
        <div className='card-text'>
          <h3>Pressure Welding</h3>
          <p>
            Slade Welding offers fully certified pressure welding services for
            all piping from mild steel to stainless. Our welder has the
            experience and certifications to effortlessly perform any pressure
            welding procedures needed to get the job done. Whether its pipe
            fabrication or your basic pressure weld, our fully tooled welding
            truck gives us the ability to come to you and complete your projects
            on-site and in the most cost effective way possible while exceeding
            the industries standards
          </p>
        </div>
      </div>
      <div className='service-card'>
        <Image
          src='/structural_welding-min.jpg'
          alt='structural welding'
          width={400}
          height={400}
        />
        <div className='card-text'>
          <h3>Structural Welding & Fabrication</h3>
          <p>
            Whether your structural jobs are small, large, above ground or below
            ground Slade Welding has you fully covered! Our welder is fully
            certified with all Position CWB tickets that comply with the
            Canadian Welding industry standards, along with multiple up to date
            safety tickets ensuring your project gets completed in the safest
            and most efficient way possible. Our trucks come to you fully
            equipped with the tools and equipment needed to complete your
            fabrication project or structural welds on location.
          </p>
        </div>
      </div>
      <div className='service-card'>
        <Image
          src='/repair-min.png'
          alt='equipment repair'
          width={400}
          height={400}
        />
        <div className='card-text'>
          <h3>Equipment Repair</h3>
          <p>
            Slade Welding has years of experience in the logging, mining and
            farming industries. Therefore, we help to make your repair stress
            free by providing our valuable knowledge and solutions when it comes
            to your welding repairs or fabrication needs. Our mobile welding
            truck is able to get to your location no matter how far down a
            logging road you may be and ensure your job is completed correctly
            in order to give you that piece of mind while your far out in the
            bush.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;
