import Link from 'next/link';
const Nav = () => {
  return (
    <nav>
      <header>
        <div class='Logo'>
          <img src='/WeldingLogo.jpeg' height='100px' width='auto'></img>
        </div>
        <div class='menu-wrap'>
          <input type='checkbox' class='toggler' />
          <div class='hamburger'>
            <div class='menu'>
              <ul class='nav'>
                <li>
                  <Link href='/'>
                    <span class='glyphicon glyphicon-home' aria-hidden='true'>
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/services'>
                    <span class='glyphicon glyphicon-wrench' aria-hidden='true'>
                      services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/gallery'>
                    <span class='glyphicon glyphicon-th' aria-hidden='true'>
                      Gallery
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <span class='glyphicon glyphicon-user' aria-hidden='true'>
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <span class='glyphicon glyphicon-phone' aria-hidden='true'>
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Nav;
