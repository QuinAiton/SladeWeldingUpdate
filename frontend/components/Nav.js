import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
const Nav = () => {
  return (
    <header data-aos="fade-down">
      <div class="Logo">
        <Image width={100} height={100} src="/WeldingLogo.jpeg" alt="slade mobile welding logo" />
      </div>
      <nav>
        <div class="menu-wrap">
          <input type="checkbox" class="toggler" />
          <div class="hamburger"><div></div></div>
          <div class="menu">
            <div>
              <div>
                <ul class="nav">
                  <li>
                    <Link href='/'>
                      <a>
                        <span
                          class="glyphicon glyphicon-home"
                          aria-hidden="true"
                        >
                        </span>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>
                        <span
                          class="glyphicon glyphicon-wrench"
                          aria-hidden="true"
                        >
                        </span>
                        services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a
                      ><span class="glyphicon glyphicon-th" aria-hidden="true">
                        </span>
                        Gallery
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a
                      ><span
                        class="glyphicon glyphicon-user"
                        aria-hidden="true"
                      >
                        </span>
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a
                      ><span
                        class="glyphicon glyphicon-phone"
                        aria-hidden="true"
                      >
                        </span>
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'tel:6049058541'}>
                      <a
                      ><span
                        class="glyphicon glyphicon-phone"
                        aria-hidden="true"
                      >
                        </span>
                        Call Now! 604-905-8541
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Nav;
