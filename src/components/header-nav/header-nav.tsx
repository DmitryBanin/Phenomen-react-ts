import { NavLink } from 'react-router-dom';
import { setStyleForNavLink } from '../../utils/set-style-for-nav-link';
import DropDownMenuItems from '../drop-down-menu-items/drop-down-menu-items';
import { FundDropDownMenuList, AboutDropDownMenuList } from '../../const';

function HeaderNav(): JSX.Element {
  return (
    <nav className='header__nav'>
      <ul className='header__list'>
        <li className='header__list-item'>
          <NavLink
            to='/invest'
            style={setStyleForNavLink}
            className='header__link'
          >
            INVEST
          </NavLink>
        </li>
        <li className='header__list-item'>
          <div className='header__list-item-arrow'>
            <a href='#' className='header__link'>
              FUND
            </a>
            <img
              src='../images/arrow-down.svg'
              alt='arrow'
              className='header__link-arrow header__link-arrow-down'
            />
            <img
              src='../images/arrow-up.svg'
              alt='arrow'
              className='header__link-arrow header__link-arrow-up'
            />
          </div>
          <DropDownMenuItems dropDownMenuData={FundDropDownMenuList} />
        </li>
        <li className='header__list-item'>
          <NavLink
            to='/portfolio'
            style={setStyleForNavLink}
            className='header__link'
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className='header__list-item'>
          <div className='header__list-item-arrow'>
            <a href='#' className='header__link'>
              ABOUT
            </a>
            <img
              src='../images/arrow-down.svg'
              alt='arrow'
              className='header__link-arrow header__link-arrow-down'
            />
            <img
              src='../images/arrow-up.svg'
              alt='arrow'
              className='header__link-arrow header__link-arrow-up'
            />
          </div>
          <DropDownMenuItems dropDownMenuData={AboutDropDownMenuList} />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
