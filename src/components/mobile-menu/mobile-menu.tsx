import { setStyleForNavLink } from '../../utils/set-style-for-nav-link';
import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import './mobile-menu-style.css';
import { setHiddenOverFlow } from '../../utils/setHiddenOverFlow';
import { bodyElement } from '../../const';

function MobileMenu() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const clickHandler = (evt: any) => {
    evt.preventDefault();
    setOpenMenu((prevState) => !prevState);
  };

  setHiddenOverFlow(isOpenMenu, bodyElement);

  return (
    <Fragment>
      <a
        href='#'
        className='burger__button'
        onClick={(evt) => clickHandler(evt)}
      >
        <span></span>
      </a>
      <div
        className={
          isOpenMenu ? 'mobile-menu mobile-menu-active' : 'mobile-menu'
        }
      >
        <nav className='mobile-menu__nav'>
          <ul className='mobile-menu__items'>
            <li className='mobile-menu__item'>
              <a
                href='#'
                className='close-icon-menu'
                onClick={(evt) => clickHandler(evt)}
              ></a>
            </li>
            <li className='mobile-menu__item'>
              <NavLink
                to='/invest'
                style={setStyleForNavLink}
                className='mobile-menu__btn'
              >
                INVEST
              </NavLink>
            </li>
            <li className='mobile-menu__item'>
              <button
                className='mobile-menu__btn collapsible-button'
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
                  style={setStyleForNavLink}
                  className='mobile-menu__btn drop-down'
                >
                  SECTORS
                </NavLink>
                <NavLink
                  to='/expertise'
                  style={setStyleForNavLink}
                  className='mobile-menu__btn drop-down'
                >
                  EXPERTISE
                </NavLink>
                <NavLink
                  to='/strategies'
                  style={setStyleForNavLink}
                  className='mobile-menu__btn drop-down'
                >
                  STRATEGIES
                </NavLink>
              </div>
            </li>
            <li className='mobile-menu__item'>
              <NavLink
                to='/portfolio'
                style={setStyleForNavLink}
                className='mobile-menu__btn'
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className='mobile-menu__item'>
              <button
                className='mobile-menu__btn collapsible-button'
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
                  style={setStyleForNavLink}
                  className='mobile-menu__btn drop-down'
                >
                  TEAM
                </NavLink>
                <NavLink
                  to='/contacts'
                  style={setStyleForNavLink}
                  className='mobile-menu__btn drop-down'
                >
                  CONTACTS
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default MobileMenu;
