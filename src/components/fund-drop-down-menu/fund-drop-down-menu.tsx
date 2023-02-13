import { NavLink } from 'react-router-dom';
import { getStyleForNavLink } from '../../utils/get-style-for-nav-link';

function FundDropDownMenu() {
  return (
    <ul className='menu__options menu__options-fund'>
      <li className='menu__option'>
        <NavLink
          to='/sectors'
          style={getStyleForNavLink}
          className='menu__option-link'
        >
          SECTORS
        </NavLink>
      </li>
      <li className='menu__option'>
        <NavLink
          to='/expertise'
          style={getStyleForNavLink}
          className='menu__option-link'
        >
          EXPERTISE
        </NavLink>
      </li>
      <li className='menu__option'>
        <NavLink
          to='/strategies'
          style={getStyleForNavLink}
          className='menu__option-link'
        >
          STRATEGIES
        </NavLink>
      </li>
    </ul>
  );
}

export default FundDropDownMenu;
