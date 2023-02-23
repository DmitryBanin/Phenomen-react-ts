import { Outlet, NavLink } from 'react-router-dom';
import { getStyleForNavLink } from '../../utils/get-style-for-nav-link';
import Logo from '../../components/logo/logo';
import HeaderNav from '../../components/header-nav/header-nav';
import MobileMenu from '../../components/mobile-menu/mobile-menu';

function Layout(): JSX.Element {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='header__container'>
          <Logo />
          <a href='#' className='burger__button'>
            <span></span>
          </a>
          <MobileMenu />
          <HeaderNav />
        </div>
      </header>

      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>
        <section className='footer__container'>
          <h2 className='footer__title'>Phenomen Venture Capital</h2>
          <nav className='footer__nav'>
            <ul className='footer__nav-item-list'>
              <li className='footer__nav-item'>
                <h4 className='footer__nav-item-title'>INVEST</h4>
              </li>
              <li className='footer__nav-item'>
                <NavLink
                  to='/portfolio'
                  style={getStyleForNavLink}
                  className='footer__link'
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className='footer__nav-item'>
                <a
                  href='https://play.google.com/store/games?hl=ru&gl=US'
                  className='footer__link'
                >
                  FOUNDATION APP
                </a>
              </li>
            </ul>
            <ul className='footer__nav-item-list'>
              <li className='footer__nav-item'>
                <h4 className='footer__nav-item-title'>FUND</h4>
              </li>
              <li className='footer__nav-item'>
                <NavLink
                  to='/expertise'
                  style={getStyleForNavLink}
                  className='footer__link'
                >
                  EXPERTISE
                </NavLink>
              </li>
              <li className='footer__nav-item'>
                <NavLink
                  to='/sectors'
                  style={getStyleForNavLink}
                  className='footer__link'
                >
                  SECTORS
                </NavLink>
              </li>
              <li className='footer__nav-item'>
                <NavLink
                  to='/strategies'
                  style={getStyleForNavLink}
                  className='footer__link'
                >
                  STRATEGIES
                </NavLink>
              </li>
            </ul>
            <ul className='footer__nav-item-list'>
              <li className='footer__nav-item'>
                <h4 className='footer__nav-item-title'>ABOUT</h4>
              </li>
              <li className='footer__nav-item'>
                <NavLink
                  to='/team'
                  style={getStyleForNavLink}
                  className='footer__link'
                >
                  TEAM
                </NavLink>
              </li>
              <li className='footer__nav-item'>
                <NavLink
                  to='/contacts'
                  style={getStyleForNavLink}
                  className='footer__link'
                >
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    </div>
  );
}

export default Layout;
