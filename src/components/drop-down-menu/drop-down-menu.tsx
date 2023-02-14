import { NavLink } from 'react-router-dom';
import { getStyleForNavLink } from '../../utils/get-style-for-nav-link';

function DropDownMenu({ data }) {
  
  return (
      <li className='menu__option'>
        <NavLink
          to={data.toLowerCase()}
          style={getStyleForNavLink}
          className='menu__option-link'
        >
          {data}
        </NavLink>
      </li>
  );
}

export default DropDownMenu;
