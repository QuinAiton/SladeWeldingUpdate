import Link from 'next/link';
const Nav = () => {
  return (
    <nav>
      <header>
        <div className='menu-wrap'>
          <input type='checkbox' className='toggler' />
          <div className='hamburger'>
            <div className='menu'>
              <ul className='nav'>
                <div className='Logo'>
                  <img
                    src='/WeldingLogo.jpeg'
                    height='100px'
                    width='auto'
                  ></img>
                </div>
                <li>
                  <Link href='/'>
                    <span
                      className='glyphicon glyphicon-home'
                      aria-hidden='true'
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/services'>
                    <span
                      className='glyphicon glyphicon-wrench'
                      aria-hidden='true'
                    >
                      services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/gallery'>
                    <span className='glyphicon glyphicon-th' aria-hidden='true'>
                      Gallery
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <span
                      className='glyphicon glyphicon-user'
                      aria-hidden='true'
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <span
                      className='glyphicon glyphicon-phone'
                      aria-hidden='true'
                    >
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
              <a className='contact-link' href='tel:+6049058541'>
                <span className='contact'>Call Now! 604-905-8541</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Nav;
