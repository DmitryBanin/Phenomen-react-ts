import { NavLink } from 'react-router-dom';
import { getStyleForNavLink } from '../../utils/get-style-for-nav-link';
import DropDownMenuItems from '../drop-down-menu-items/drop-down-menu-items';
import { FundDropDownMenuList, AboutDropDownMenuList } from '../../const';

function HeaderNav() {

  return (
    <nav className='header__nav'>
      <ul className='header__list'>
        <li className='header__list-item'>
          <NavLink
            to='/invest'
            style={getStyleForNavLink}
            className='header__link'
          >
            INVEST
          </NavLink>
        </li>
        <li className='header__list-item show'>
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
          {/* выпадающее меню */}
          {/* <FundDropDownMenu /> */}
          <DropDownMenuItems dropDownMenuData={FundDropDownMenuList} />
        </li>
        <li className='header__list-item'>
          <NavLink
            to='/portfolio'
            style={getStyleForNavLink}
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
          {/* выпадающее меню */}
          {/* <AboutDropDownMenu /> */}
          <DropDownMenuItems dropDownMenuData={AboutDropDownMenuList} />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
