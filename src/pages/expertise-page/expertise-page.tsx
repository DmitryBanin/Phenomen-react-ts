import './expertise-page-style.css';
import { Fragment } from 'react';
import SummareOfTerms from '../../components/summare-of-terms/summare-of-terms';
import FaqCollapsibleList from '../../components/faq-collapsible-list/faq-collapsible-list';

type expertiseDataProps = {
  expertiseData: { title: string; desccription: string }[];
};

function ExpertisePage({ expertiseData }: expertiseDataProps): JSX.Element {
  return (
    <Fragment>
      <section className='sectors__container'>
        <div className='sectors'>
          <h1 className='sectors__head-title'>Phenomen expertise</h1>
          <ul className='sectors__desc-list'>
            <li className='sectors__desc'>
              The sectors we focus on and see a global transformation of the
              entire world as we develop and merge these technologies.
            </li>
            <li className='sectors__desc'>
              We pay a lot of attention to these technology areas, but we are
              always investing in founders striving for the imaginable and the
              impossible.
            </li>
          </ul>
        </div>
        <SummareOfTerms />  
      </section>
      <FaqCollapsibleList collapsibleList={expertiseData} />
      {/* <section className='faq__container'>
        <div className='faq_        _item'>
          <button className='collapsible'>Whitepaper</button>
          <div className='content'>
            <p>
              Studying the main project document, which sets out the rationale
              for developing a solution, its key parameters, features, and
              application in practice. The white paper is the main project
              document, where the team details the main goals and objectives of
              their solution.
            </p>
          </div>

          <button className='collapsible'>Technology</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Media</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Project partners</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Tokenomics</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Roadmap</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Team</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Cryptocurrency / Token</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Technical analysis</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Fundamental analysis</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Computer analysis</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Conclusion team Phenomen</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
}

export default ExpertisePage;
