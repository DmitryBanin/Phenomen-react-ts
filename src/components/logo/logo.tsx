import { NavLink } from 'react-router-dom';
import { setStyleForNavLink } from '../../utils/set-style-for-nav-link';

function Logo(): JSX.Element {
  return (
    <NavLink to='/' style={setStyleForNavLink} className='header__logo'>
      <img
        src='../images/phenomen-logo.svg'
        alt='Phenomen logo'
        className='header__logo-link'
      />
    </NavLink>
  );
}

export default Logo;
