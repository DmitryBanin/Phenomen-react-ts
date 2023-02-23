import { getStyleForNavLink } from '../../utils/get-style-for-nav-link';
import { NavLink } from 'react-router-dom';

function MobileMenu() {
  return (
    <div className='mobile-menu'>
      <nav className='mobile-menu__nav'>
        <ul className='mobile-menu__list'>
          <li className='mobile-menu__item'>
            <a className='close-icon-menu'></a>
          </li>
          <li className='mobile-menu__item'>
            <NavLink
              to='/invest'
              style={getStyleForNavLink}
              className='header__link'
            >
              INVEST
            </NavLink>
          </li>
          <li className='mobile-menu__item'>
            <button
              className='mobile-menu__link collapsible-button'
              type='button'
            >
              FUND
              <img
                src='../images/arrow-down-black.svg'
                alt='arrow'
                className='header__link-arrow header__link-arrow-down'
              />
              <img
                src='../images/arrow-up.svg'
                alt='arrow'
                className='header__link-arrow header__link-arrow-up'
              />
            </button>
            <div className='mobile-menu__drop-down'>
              <NavLink
                to='/sectors'
                style={getStyleForNavLink}
                className='footer__link'
              >
                SECTORS
              </NavLink>
              <NavLink
                to='/expertise'
                style={getStyleForNavLink}
                className='footer__link'
              >
                EXPERTISE
              </NavLink>
              <NavLink
                to='/strategies'
                style={getStyleForNavLink}
                className='footer__link'
              >
                STRATEGIES
              </NavLink>
            </div>
          </li>
          <li className='mobile-menu__item'>
            <NavLink
              to='/portfolio'
              style={getStyleForNavLink}
              className='header__link'
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li className='mobile-menu__item'>
            <button
              className='mobile-menu__link collapsible-button'
              type='button'
            >
              ABOUT
              <img
                src='../images/arrow-down-black.svg'
                alt='arrow'
                className='header__link-arrow header__link-arrow-down'
              />
              <img
                src='../images/arrow-up.svg'
                alt='arrow'
                className='header__link-arrow header__link-arrow-up'
              />
            </button>
            <div className='mobile-menu__drop-down'>
              <NavLink
                to='/team'
                style={getStyleForNavLink}
                className='footer__link'
              >
                TEAM
              </NavLink>
              <NavLink
                to='/contacts'
                style={getStyleForNavLink}
                className='footer__link'
              >
                CONTACTS
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
