import Image from 'next/image';

const contact = () => {
  return (
    <div className='contact-container'>
      <Image
        src='/contact-min.jpg'
        alt='Welding truck by buncher'
        height={600}
        width={2000}
        responsive='true'
      />
      <div data-aos="fade-up" className='contact-content'>
        <h2>Slade Industrial Welding</h2>
        <hr />
        <h3>Contact information</h3>
        <h4>
          <a className='contact-link' href='tel:+6049058541'>
            <span className='glyphicon glyphicon-phone' aria-hidden='true'>
              604-905-8541
            </span>
          </a>
        </h4>
        <h4>
          <a
            className='contact-link'
            href='mailto:sladeindustrialwelding@gmail.com?'
          >
            <span className='glyphicon glyphicon-envelope' aria-hidden='true'>
              sladeindustrialwelding@gmail.com
            </span>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default contact;
