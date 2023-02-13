import { NavLink } from 'react-router-dom';
import { getStyleForNavLink } from '../../utils/get-style-for-nav-link';

function Logo(): JSX.Element {
  return (
    <NavLink to='/' style={getStyleForNavLink} className='header__logo'>
      <img
        src='../images/phenomen-logo.svg'
        alt='Phenomen logo'
        className='header__logo-link'
      />
    </NavLink>
  );
}

export default Logo;
