import './main-page-style.css';

function MainPage(): JSX.Element {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='header__container'>
          <a href='../page-1/page-1.html' className='header__logo'>
            <img
              src='../images/logo/phenomen-logo.svg'
              alt='Phenomen-logo'
              className='header__logo-link'
            />
          </a>

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
                  <a href='../page-3/page-3.html' className='mobile-menu__link'>
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
                  <a href='../page-6/page-6.html' className='mobile-menu__link'>
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
                <a href='../page-2/page-2.html' className='header__link'>
                  INVEST
                </a>
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
                    <a
                      href='../page-3/page-3.html'
                      className='menu__option-link'
                    >
                      SECTORS
                    </a>
                  </li>
                  <li className='menu__option'>
                    <a
                      href='../page-4/page-4.html'
                      className='menu__option-link'
                    >
                      EXPERTISE
                    </a>
                  </li>
                  <li className='menu__option'>
                    <a
                      href='../page-5/page-5.html'
                      className='menu__option-link'
                    >
                      STRATEGIES
                    </a>
                  </li>
                </ul>
              </li>
              <li className='header__list-item'>
                <a href='../page-6/page-6.html' className='header__link'>
                  PORTFOLIO
                </a>
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
                    <a
                      href='../page-7-popup/page-7-popup.html'
                      className='menu__option-link'
                    >
                      TEAM
                    </a>
                  </li>
                  <li className='menu__option'>
                    <a
                      href='../page-8/page-8.html'
                      className='menu__option-link'
                    >
                      CONTACTS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className='main'>
        <section className='main__container'>
          <h1 className='main__title'>
            A venture capital fund specialized exclusively on blockchain
            technology.
          </h1>
          <p className='main__desc'>
            Since 2019, Phenomen venture has been investing in digital assets
            and blockchain companies, giving investors full access to the
            marketplace.
          </p>
          <nav className='main__nav'>
            <a className='main__link' href='#'>
              FUND
            </a>
            <a className='main__link' href='../page-6/page-6.html'>
              PORTFOLIO
            </a>
          </nav>
        </section>

        <section className='checkerboard'>
          <div className='checkerboard__block'>
            <div className='checkerboard__article checkerboard__article-right'>
              <h2 className='checkerboard__article-title'>Our view</h2>
              <p className='checkerboard__article-desc'>
                We are investing in the future, we are not interested in what
                will happen in the next 5 years, we look much further.
              </p>
            </div>
          </div>
          <div className='checkerboard__block'>
            <div className='checkerboard__article checkerboard__article-left'>
              <h2 className='checkerboard__article-title'>Phenomen mission</h2>
              <p className='checkerboard__article-desc'>
                Our task is to take market share in many innovative areas
                thathave enormous growth potential.
              </p>
            </div>
          </div>
        </section>

        <section className='investment__container'>
          <h2 className='investment__container-title'>Investment types</h2>
          <ul className='investment__types'>
            <li className='investment__type'>
              <div className='text__type'>
                <h3 className='investment__type-title'>
                  CRYPTOCURRENCY MINING
                </h3>
                <p className='investment__type-desc'>
                  Fundamental cryptocurrency mining for passive income and
                  participation in blockchain development
                </p>
              </div>
            </li>
            <li className='investment__type'>
              <div className='text__type'>
                <h3 className='investment__type-title'>EARLY-STAGE TOKENS</h3>
                <p className='investment__type-desc'>
                  Familiarity with new, efficient and scalable protocols.
                  Similar to venture capital, but investing in tokens (not
                  companies) at the private stage at a discount to the listing
                  price.
                </p>
              </div>
            </li>
            <li className='investment__type'>
              <div className='text__type'>
                <h3 className='investment__type-title'>LIQUID TOKENS</h3>
                <p className='investment__type-desc short'>
                  Access to the largest and most liquid digital assets. We
                  leverage our deep market and technical expertise to trade
                  tokens by exploiting market inefficiencies.
                </p>
              </div>
            </li>
          </ul>
        </section>
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
                <a href='../page-6/page-6.html' className='footer__link'>
                  PORTFOLIO
                </a>
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
                <a href='../page-4/page-4.html' className='footer__link'>
                  EXPERTISE
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='../page-3/page-3.html' className='footer__link'>
                  SECTORS
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='../page-5/page-5.html' className='footer__link'>
                  STRATEGIES
                </a>
              </li>
            </ul>
            <ul className='footer__nav-item-list'>
              <li className='footer__nav-item'>
                <h4 className='footer__nav-item-title'>ABOUT</h4>
              </li>
              <li className='footer__nav-item'>
                <a href='../page-7/page-7.html' className='footer__link'>
                  TEAM
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='../page-8/page-8.html' className='footer__link'>
                  CONTACTS
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    </div>
  );
}

export default MainPage;
