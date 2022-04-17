import Image from 'next/image';
const about = () => {
  return (
    <div className='about-container'>
      <div className='jumbotron'>
        <Image
          src='/welding_trucks2-min.jpg'
          alt='slade Mobile welding trucks'
          height={700}
          width={2000}
          responsive='true'
        />
      </div>
      <div className='about-content'>
        <h2>Taylor Slade William Aiton</h2>
        <div className='capabilities'>
          <ul>
            <h2>What We Offer</h2>
            <li>pipe fabrication & Pressure welding</li>
            <li>structural welding</li>
            <li>equipment repairs</li>
            <li>fabrication</li>
          </ul>
          <br />
          <ul>
            <h2>
              Processes and <br />
              capabilities we offer:
            </h2>
            <li>SMAW(stick)</li>
            <li>FCAW(wirefeed)</li>
            <li>GTAW (AC & DC tig)</li>
            <li>Oxy/Acetylene welding and Cutting</li>
            <li>gouging</li>
          </ul>
          <br />
          <ul>
            <h2>Welding Tickets</h2>
            <li>PWP7</li>
            <li>PWP10</li>
            <li>CWB-FCAW-all positon</li>
            <li>CWB-SMAW-All positon</li>
            <li>Interprovincial Red Seal</li>
          </ul>
        </div>
        <div className='certificates'>
          <h2>Business & Certifications</h2>
          <hr />
          <p>
            BC Registered Mobile welding Company with liability coverage and
            WCB, Interprovincial red seal welder with structural and Pressure
            Welding tickets guaranteeing your job gets completed properly And
            held to the highest standards. We are fully mobile! So wether your
            jobs are hours down a logging road or top of a high rise, our
            welding truck is fully set up the with the tools and equipment to
            ensure your job gets completed in the most cost effective way
            possible while exceeding industry standards.
          </p>
        </div>
        <div className='story'>
          <h2>My Story</h2>
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
  );
};
export default about;
