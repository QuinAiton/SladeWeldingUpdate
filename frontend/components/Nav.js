import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
const Nav = () => {
  return (
    <header data-aos="fade-down">
      <div className="Logo">
        <Image width={100} height={100} src="/WeldingLogo.jpeg" alt="slade mobile welding logo" />
      </div>
      <nav>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger"><div></div></div>
          <div className="menu" >
            <div>
              <div>
                <ul className="nav">
                  <li>
                    <Link href='/'>
                      <a>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>
                        services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>
                        Gallery
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'tel:6049058541'}>
                      <a>
                        Call Now! 604-905-8541
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div >
          </div >
        </div >
      </nav >
    </header >
  );
};

export default Nav;
