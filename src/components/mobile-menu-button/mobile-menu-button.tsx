import { Fragment, useRef } from 'react';
import { setStyleForNavLink } from '../../utils/set-style-for-nav-link';
import { NavLink } from 'react-router-dom';

type MobileMenuButtonProps = {
  fund: string;
  dropDownMenuList: string[];
  isClick: boolean,
};

function MobileMenuButton({
  fund,
  dropDownMenuList,
  isClick,
}: MobileMenuButtonProps): JSX.Element {

  const ref: any = useRef(null);

  return (
    <Fragment>
      <button
        id={fund}
        className='mobile-menu__btn collapsible-btn'
        type='button'
        style={isClick ? { color: '#f3b932' } : { color: '#070707' }}
      >
        FUND
        <img
          src={
            isClick
              ? '../images/arrow-up.svg'
              : '../images/arrow-down-black.svg'
          }
          alt='arrow'
          className='header__link-arrow'
        />
      </button>
      <div
        className='mobile-menu__drop-down'
        ref={ref}
        style={
          isClick
            ? { maxHeight: ref.current.scrollHeight + 'px' }
            : { maxHeight: '0px' }
        }
      >
        {dropDownMenuList.map((item) => (
          <NavLink
            key={item}
            id='link'
            to={item.toLowerCase()}
            style={setStyleForNavLink}
            className='mobile-menu__btn drop-down'
          >
            {item}
          </NavLink>
        ))}
      </div>
    </Fragment>
  );
}

export default MobileMenuButton;
