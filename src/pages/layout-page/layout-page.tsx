import { Fragment } from 'react';
import { Outlet, NavLink, Link} from 'react-router-dom';

function Layout() {
  return (
    <Fragment>
      <div className='wrapper'>
        <header className='header'>
          <div className='header__container'>
            <NavLink to='/' className='header__logo'>
              <img
                src='../images/logo/phenomen-logo.svg'
                alt='Phenomen-logo'
                className='header__logo-link'
              />
            </NavLink>

            <a href='#' className='burger__button'>
              <span></span>
            </a>

            {/* на mobile-menu добавлять класс mobile-menu--active */}
            <div className='mobile-menu'>
              <nav className='mobile-menu__nav'>
                <ul className='mobile-menu__list'>
                  <li className='mobile-menu__item'>
                    <a href='#' className='close-icon-menu'></a>
                  </li>
                  <li className='mobile-menu__item'>
                    <a
                      href='../page-3/page-3.html'
                      className='mobile-menu__link'
                    >
                      INVEST
                    </a>
                  </li>
                  <li className='mobile-menu__item'>
                    <button
                      className='mobile-menu__link collapsible-button'
                      type='button'
                    >
                      FUND
                      <img
                        src='../images/arrow-down-black.svg'
                        alt='arrow'
                        className='header__link-arrow header__link-arrow-down'
                      />
                      <img
                        src='../images/arrow-up.svg'
                        alt='arrow'
                        className='header__link-arrow header__link-arrow-up'
                      />
                    </button>
                    <div className='mobile-menu__drop-down'>
                      <a
                        href='../page-3/page-3.html'
                        className='mobile-menu__link drop-down'
                      >
                        SECTORS
                      </a>
                      <a
                        href='../page-4/page-4.html'
                        className='mobile-menu__link drop-down'
                      >
                        EXPERTISE
                      </a>
                      <a
                        href='../page-5/page-5.html'
                        className='mobile-menu__link drop-down'
                      >
                        STRATEGIES
                      </a>
                    </div>
                  </li>
                  <li className='mobile-menu__item'>
                    <a
                      href='../page-6/page-6.html'
                      className='mobile-menu__link'
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className='mobile-menu__item'>
                    <button
                      className='mobile-menu__link collapsible-button'
                      type='button'
                    >
                      ABOUT
                      <img
                        src='../images/arrow-down-black.svg'
                        alt='arrow'
                        className='header__link-arrow header__link-arrow-down'
                      />
                      <img
                        src='../images/arrow-up.svg'
                        alt='arrow'
                        className='header__link-arrow header__link-arrow-up'
                      />
                    </button>
                    <div className='mobile-menu__drop-down'>
                      <a
                        href='../page-7/page-7.html'
                        className='mobile-menu__link drop-down'
                      >
                        TEAM
                      </a>
                      <a
                        href='../page-8/page-8.html'
                        className='mobile-menu__link drop-down'
                      >
                        CONTACTS
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <nav className='header__nav'>
              <ul className='header__list'>
                <li className='header__list-item'>
                  <NavLink to='/invest' className='header__link'>
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
                  {/* выпадающее меню */}
                  <ul className='menu__options menu__options-fund'>
                    <li className='menu__option'>
                      <NavLink to='/sectors' className='menu__option-link'>
                        SECTORS
                      </NavLink>
                    </li>
                    <li className='menu__option'>
                      <NavLink to='/expertise' className='menu__option-link'>
                        EXPERTISE
                      </NavLink>
                    </li>
                    <li className='menu__option'>
                      <NavLink to='/strategies' className='menu__option-link'>
                        STRATEGIES
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='header__list-item'>
                  <NavLink to='/portfolio' className='header__link'>
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
                  <ul className='menu__options menu__options-about'>
                    <li className='menu__option'>
                      <NavLink to='/team' className='menu__option-link'>
                        TEAM
                      </NavLink>
                    </li>
                    <li className='menu__option'>
                      <NavLink to='/contact' className='menu__option-link'>
                        CONTACTS
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
        <footer className='footer'>
          <section className='footer__container'>
            <h2 className='footer__title'>Phenomen Venture Capital</h2>
            <nav className='footer__nav'>
              <ul className='footer__nav-item-list'>
                <li className='footer__nav-item'>
                  <h4 className='footer__nav-item-title'>INVEST</h4>
                </li>
                <li className='footer__nav-item'>
                  <NavLink to='/portfolio' className='footer__link'>
                    PORTFOLIO
                  </NavLink>
                </li>
                <li className='footer__nav-item'>
                  <a
                    href='https://play.google.com/store/games?hl=ru&gl=US'
                    className='footer__link'
                  >
                    FOUNDATION APP
                  </a>
                </li>
              </ul>
              <ul className='footer__nav-item-list'>
                <li className='footer__nav-item'>
                  <h4 className='footer__nav-item-title'>FUND</h4>
                </li>
                <li className='footer__nav-item'>
                  <NavLink to='/expertise' className='footer__link'>
                    EXPERTISE
                  </NavLink>
                </li>
                <li className='footer__nav-item'>
                  <NavLink to='/sectors' className='footer__link'>
                    SECTORS
                  </NavLink>
                </li>
                <li className='footer__nav-item'>
                  <NavLink to='/strategies' className='footer__link'>
                    STRATEGIES
                  </NavLink>
                </li>
              </ul>
              <ul className='footer__nav-item-list'>
                <li className='footer__nav-item'>
                  <h4 className='footer__nav-item-title'>ABOUT</h4>
                </li>
                <li className='footer__nav-item'>
                  <NavLink to='/team' className='footer__link'>
                    TEAM
                  </NavLink>
                </li>
                <li className='footer__nav-item'>
                  <NavLink to='/contact' className='footer__link'>
                    CONTACTS
                  </NavLink>
                </li>
              </ul>
            </nav>
          </section>
        </footer>
      </div>
    </Fragment>
  );
}

export default Layout;
