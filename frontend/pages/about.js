import Image from 'next/image';
const about = () => {
  return (
    <div className='about-container'>
      <div className='jumbotron'>
        <Image
          src='/aboutImage.jpg'
          alt='Welding pipe'
          layout='fill'
        />
      </div>
      <div className='about-content'>
        <div className='capabilities'>
          <ul data-aos="fade-right">
            <h3>What We Offer</h3>
            <li>Pipe fabrication & Pressure welding</li>
            <li>Structural welding</li>
            <li>Equipment repairs</li>
            <li>Fabrication</li>
          </ul>
          <br />
          <ul data-aos="fade-right">
            <h3>
              Processes and <br />
              capabilities we offer:
            </h3>
            <li>SMAW (stick)</li>
            <li>FCAW (wirefeed)</li>
            <li>GTAW (AC & DC tig)</li>
            <li>Oxy/Acetylene welding and Cutting</li>
            <li>Gouging</li>
          </ul>
          <br />
          <ul data-aos="fade-right">
            <h3>Welding Tickets</h3>
            <li>PWP7</li>
            <li>PWP10</li>
            <li>CWB-FCAW-all positon</li>
            <li>CWB-SMAW-All positon</li>
            <li>Interprovincial Red Seal</li>
          </ul>
        </div>
        <div className='section_2'>
          <div data-aos="fade-left" className='certificates'>
            <h3>Business & Certifications</h3>
            <hr />
            <p>
              We are a fully Registered Mobile welding Company with liability coverage and
              WCB. Our welders are all Interprovincial red seal welder certified and hold valid
              structural and Pressure Welding tickets that guarantee your job gets completed properly
              while also being held to the highest standards. We are fully mobile! So wether your
              jobs are hours down a logging road or top of a high rise, our
              welding truck is fully set up with the tools and equipment to
              ensure your job gets completed in the most cost effective way
              possible while exceeding industry standards.
            </p>
          </div>
          <div data-aos="fade-left" className='story'>
            <h3>My Story</h3>
            <hr />
            <p>
              Born and raised in Pemberton, British Columbia. After graduating
              highschool I started out in the logging industry where I worked for
              a number of years until discovering my passion for Welding. Since
              then I began my career enrolling into the welding program at
              Okanagan College while Working for a Pressure Vessel Shop In Kelowna
              BC. After Obtaining my Red Seal Certificate, I decided to take my
              Career up North where I began welding for a Drilling Company in
              Northern BC, Saskatchewan and The Yukon. In 2017 My Dreams became a
              reality and Slade Industrial Welding finally came to life.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div >
  );
};
export default about;
