import './sectors-page-style.css';
import { Fragment } from 'react';
import SummareOfTerms from '../../components/summare-of-terms/summare-of-terms';
import FaqCollapsibleList from '../../components/faq-collapsible-list/faq-collapsible-list';
import { CollapsibleDataType } from '../../types/type';

type SectorsPageProps = {
  sectorsCollapsibleData: CollapsibleDataType;
};

function SectorsPage({
  sectorsCollapsibleData,
}: SectorsPageProps): JSX.Element {
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
      <FaqCollapsibleList collapsibleData={sectorsCollapsibleData} />
    </Fragment>
  );
}

export default SectorsPage;
