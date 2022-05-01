import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import sanityClient from './api/sanityClient';

const gallery = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const response = await sanityClient.fetch(
      `*[_type == "gallery"]{ 
        _id, 
        image{ 
          asset->{ 
             url
          }
        }
      }`);
    setImages(response);
  };

  useEffect(() => {
    try {
      getImages();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const imageList = images?.map((img) => {
    return (
      <div data-aos="fade-in" key={img._id} className='gallery-item' >
        <Image
          height={500}
          width={500}
          src={img.image.asset.url}
          alt='pipe welding'
        />
      </div >
    );
  });


  return (
    <div className='gallery-container' >
      <h2>Gallery</h2>
      <div className='gallery-content' >
        {imageList}
      </div >
    </div >
  );
};
export default gallery;
