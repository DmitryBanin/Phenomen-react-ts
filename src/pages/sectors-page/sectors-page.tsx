import './sectors-page-style.css';
import { Fragment } from 'react';
import SummareOfTerms from '../../components/summare-of-terms/summare-of-terms';
import FaqCollapsibleList from '../../components/faq-collapsible-list/faq-collapsible-list';

type sectorsDataProps = {
  sectorsData: { title: string; desccription: string }[];
};

function SectorsPage({ sectorsData }: sectorsDataProps): JSX.Element {
  return (
    <Fragment>
      <section className='sectors__container'>
        <div className='sectors'>
          <h1 className='sectors__head-title'>Phenomen sectors</h1>
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
      <FaqCollapsibleList collapsibleList={sectorsData} />
      {/* <section className='faq__container'>
        <div className='faq__item'>
          <button className='collapsible'>Blockchain</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Artificial Intelligence</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>DeFi</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Metaverse</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>WEB 3.0</button>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className='collapsible'>Data Science</button>
          <div className='content'>
            <p>
              Every day humanity generates about 2.5 quintillion bytes of
              different data. If data analytics answers questions about the
              past, Data Science literally looks to the future. With big data,
              applications are developed and models are created to better
              understand societies and their needs. Data science opens the door
              to the future.
            </p>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
}

export default SectorsPage;
