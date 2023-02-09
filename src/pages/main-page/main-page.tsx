import './main-page-style.css';
import { Fragment } from 'react';

function MainPage(): JSX.Element {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default MainPage;
