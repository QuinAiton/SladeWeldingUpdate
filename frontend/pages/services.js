
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import sanityClient from './api/sanityClient';
const services = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const response = await sanityClient.fetch(
      `*[_type == "services"]{ 
          title, 
          body[0] { 
            children[0]{ 
            text
            }
          },
          mainImage{ 
            asset->{ 
              url
            }, 
          }
      }`
    );
    setServices(response);
  };

  useEffect(() => {
    try {
      getServices();
    } catch (err) {
      console.error(err);
    }
  }, [services]);

  const serviceList = services?.map((service, index) => {
    return (
      <div key={index} className='service-card'>
        <Image
          src={service.mainImage.asset.url}
          alt='Pressure Welding'
          width={500}
          height={500}
        />
        <div className='card-text'>
          <h3>{service.title}</h3>
          <p>
            {service.body.children.text}
          </p>
        </div>
      </div>
    );
  });

  return (
    <main className='services-container'>
      <h2>Services</h2>
      <div data-aos="fade-in" className='services-content'>
        {serviceList}
      </div >

    </main>
  );
};
export default services;
