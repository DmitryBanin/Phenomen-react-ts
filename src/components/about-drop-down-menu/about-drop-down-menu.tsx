import { NavLink } from 'react-router-dom';
import { getStyleForNavLink } from '../../utils/get-style-for-nav-link';

function AboutDropDownMenu() {
  return (
    <ul className='menu__options menu__options-about'>
      <li className='menu__option'>
        <NavLink
          to='/team'
          style={getStyleForNavLink}
          className='menu__option-link'
        >
          TEAM
        </NavLink>
      </li>
      <li className='menu__option'>
        <NavLink
          to='/contact'
          style={getStyleForNavLink}
          className='menu__option-link'
        >
          CONTACTS
        </NavLink>
      </li>
    </ul>
  );
}

export default AboutDropDownMenu;
