import { NavLink } from 'react-router-dom';
import { setStyleForNavLink } from '../../utils/set-style-for-nav-link';

type DropDownMenuProps = {
  [data: string]: string;
};

function DropDownMenu({data}: DropDownMenuProps ) {
  return (
    <li className='menu__option'>
      <NavLink
        to={data.toLowerCase()}
        style={setStyleForNavLink}
        className='menu__option-link'
      >
        {data}
      </NavLink>
    </li>
  );
}

export default DropDownMenu;
