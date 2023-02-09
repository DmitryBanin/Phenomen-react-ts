import './expertise-page-style.css';
import { Fragment } from 'react';

function ExpertisePage() {
  return <Fragment><section className="sectors__container">
          <div className="sectors">
            <h1 className="sectors__head-title">Phenomen expertise</h1>
            <ul className="sectors__desc-list">
              <li className="sectors__desc">
                The sectors we focus on and see a global transformation of the
                entire world as we develop and merge these technologies.
              </li>
              <li className="sectors__desc">
                We pay a lot of attention to these technology areas, but we are
                always investing in founders striving for the imaginable and the
                impossible.
              </li>
            </ul>
          </div>
          <aside className="summary">
            <p className="summary__title">SUMMARY OF TERMS</p>

            <dl className="summare__list">
              <dt className="summary__item-key">Launch</dt>
              <dd className="summary__item-value">March 2019</dd>
              <dt className="summary__item-key">Minimum investment</dt>
              <dd className="summary__item-value">1 million dollars</dd>
              <dt className="summary__item-key">Investor type</dt>
              <dd className="summary__item-value">Qualifying buyers only</dd>
              <dt className="summary__item-key">Control board</dt>
              <dd className="summary__item-value">
                2% of invested capital annually
              </dd>
              <dt className="summary__item-key">Pay for performance</dt>
              <dd className="summary__item-value">
                30% to 40% of the net internal rate of return
              </dd>
            </dl>

            <p className="summary__title">JOIN THE FUND</p>
            <p className="summary__desk">
              To gain access, you will need to answer several questions and
              provide supporting documentation
            </p>
            <div className="summary__nav">
              <a className="summary__link" href="#">PRESENTATION</a>
              <a className="summary__link" href="#">CONDITIONS SUMMARY</a>
            </div>
          </aside>
        </section>
        <section className="faq__container">
          <div className="faq__item">

            <button className="collapsible">Whitepaper</button>
            <div className="content">
              <p>
                Studying the main project document, which sets out the rationale
                for developing a solution, its key parameters, features, and
                application in practice. The white paper is the main project
                document, where the team details the main goals and objectives
                of their solution.
              </p>
            </div>

            <button className="collapsible">Technology</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Media</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Project partners</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Tokenomics</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Roadmap</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Team</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Cryptocurrency / Token</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Technical analysis</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
 
            <button className="collapsible">Fundamental analysis</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="collapsible">Computer analysis</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
  
            <button className="collapsible">Conclusion team Phenomen</button>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section></Fragment>;
}

export default ExpertisePage;
