import './portfolio-page-style.css';
import { Fragment } from 'react';

function PortfolioPage() {
  return (
    <Fragment>
      <section className='portfolio__container'>
        <div className='portfolio__haed'>
          <h1 className='portfolio__haed-title'>A fund portfolio</h1>
          <p className='portfolio__haed-desc'>
            We invest in thematic ideas and projects that are core elements of
            the blockchain ecosystem infrastructure, such as exchanges,
            depositories, institutional trading instruments, decentralized
            finance, next-generation payment systems and more.
          </p>
        </div>

        <div className='token__static-list'>
          <ul className='token__items'>
            <li className='token__item token__item-filter'>
              <div className='token__item-block'>
                <img
                  src='../images/arrow-title-line.svg'
                  alt='logo'
                  className='token__item-arrow'
                />
                <p className='token__name-column token__name-column-title'>
                  NAME
                </p>
              </div>
              <div className='token__item-block'>
                <img
                  src='../images/arrow-title-line.svg'
                  alt='logo'
                  className='token__item-arrow'
                />
                <p className='token__name-column token__name-column-title'>
                  TYPE
                </p>
              </div>
              <div className='token__item-block'>
                <img
                  src='../images/arrow-title-line.svg'
                  alt='logo'
                  className='token__item-arrow'
                />
                <p className='token__name-column token__name-column-title'>
                  SECTOR
                </p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <a href='#'>
                  <img src='../../' alt='logo' className='token__item-logo' />
                </a>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <a href='#'>
                  <img
                    src='../../../public/images/funds-logo/mina'
                    alt='logo'
                    className='token__item-logo'
                  />
                </a>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Website</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>
                  Clover provides a foundation layer for DeFi applications to
                  seamlessly operate on.
                </p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/3-covalent.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>DeFi</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/4-contrefuge.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/5-vega.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>DeFi</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/6-swarm.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Protocol</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/7-human.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Consumer</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/8.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Consumer</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/9-qredo.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Finance</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/10-immutablex.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/11-braintrust.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>DeFi</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/12-biconomy.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/13.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>GameFi</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/14-gari.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Network</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/15-zeitgeist.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Protocol</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/16-guardians.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>GameFi</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/17-sit.country.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Metaverse</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/18-umee.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>DeFi</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/19-h.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Venture</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/20-spstake.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Protocol</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/21-agoric.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/22-stader.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>DeFi</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/23-nym.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/24-galxe.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Infrastructure</p>
              </div>
            </li>

            <li className='token__item'>
              <div className='token__item-block'>
                <img
                  src='../images/logo/25-axelar.svg'
                  alt='logo'
                  className='token__item-logo'
                />
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Early-Stage Token</p>
              </div>
              <div className='token__item-block'>
                <p className='token__name-column'>Protocol</p>
              </div>
            </li>
          </ul>
        </div>

        <div className='token__dynamic-list'>
          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/1-mina.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/2-clover.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Website</p>
              <p className='content__desk-line'>
                Clover provides a foundation layer for DeFi applications to
                seamlessly operate on.
              </p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/3-covalent.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>DeFi</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/4-contrefuge.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/5-vega.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>DeFi</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/6-swarm.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Protocol</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/7-human.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Consumer</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/8.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Consumer</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/9-qredo.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Finance</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/10-immutablex.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/11-braintrust.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>DeFi</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/12-biconomy.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/13.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>GameFi</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/14-gari.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Network</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/15-zeitgeist.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Protocol</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/16-guardians.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>GameFi</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/17-sit.country.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Metaverse</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/18-umee.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>DeFi</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/19-h.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/20-spstake.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Protocol</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/21-agoric.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/22-stader.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>DeFi</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/23-nym.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/24-galxe.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Infrastructure</p>
            </div>
          </div>

          <div className='token__dynamic-block'>
            <button className='collapsible'>
              <img
                src='../images/logo/25-axelar.svg'
                alt='logo'
                className='token__item-logo'
              />
            </button>
            <div className='content'>
              <p className='content__desk-line'>Early-Stage Token</p>
              <p className='content__desk-line'>Protocol</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default PortfolioPage;
