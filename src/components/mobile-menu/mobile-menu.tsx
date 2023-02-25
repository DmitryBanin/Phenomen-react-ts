import { setStyleForNavLink } from '../../utils/set-style-for-nav-link';
import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import './mobile-menu-style.css';
import { setHiddenOverFlow } from '../../utils/setHiddenOverFlow';
import { bodyElement } from '../../const';
import { FundDropDownMenuList, AboutDropDownMenuList } from '../../const';
import MobileMenuButton from '../../components/mobile-menu-button/mobile-menu-button';

function MobileMenu(): JSX.Element {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isFund, setFund] = useState(false);
  const [isAbout, setAbout] = useState(false);

  const clickHandlerMenu = (evt: any) => {
    evt.preventDefault();
    setOpenMenu(!isOpenMenu);
  };

  const clickHandlerLink = (evt: any) => {
    if (evt.target.id === 'link') {
      clickHandlerMenu(evt);
      setFund(false);
      setAbout(false);
    } else if (evt.target.id === 'fund') {
      setFund(!isFund);
      isAbout ? setAbout(!isAbout) : setAbout(isAbout);
    } else if (evt.target.id === 'about') {
      setAbout(!isAbout);
      isFund ? setFund(!isFund) : setFund(isFund);
    }
  };

  setHiddenOverFlow(isOpenMenu, bodyElement);

  return (
    <Fragment>
      <a href='#' className='burger__button' onClick={clickHandlerMenu}>
        <span></span>
      </a>
      <div
        className={
          isOpenMenu ? 'mobile-menu mobile-menu-active' : 'mobile-menu'
        }
      >
        <nav className='mobile-menu__nav'>
          <ul className='mobile-menu__items' onClick={clickHandlerLink}>
            <li className='mobile-menu__item'>
              <a
                href='#'
                className='close-icon-menu'
                onClick={clickHandlerMenu}
              ></a>
            </li>
            <li className='mobile-menu__item'>
              <NavLink
                id='link'
                to='/invest'
                style={setStyleForNavLink}
                className='mobile-menu__btn'
              >
                INVEST
              </NavLink>
            </li>

            <li className='mobile-menu__item'>
              <MobileMenuButton
                fund={'fund'}
                dropDownMenuList={FundDropDownMenuList}
                isClick={isFund}
              />
            </li>
            <li className='mobile-menu__item'>
              <NavLink
                id='link'
                to='/portfolio'
                style={setStyleForNavLink}
                className='mobile-menu__btn'
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className='mobile-menu__item'>
              <MobileMenuButton
                fund={'about'}
                dropDownMenuList={AboutDropDownMenuList}
                isClick={isAbout}
              />
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default MobileMenu;
