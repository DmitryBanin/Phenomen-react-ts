import FaqCollapsible from '../faq-collapsible/faq-collapsible';
import './faq-collapsible-list-style.css';
import { CollapsibleDataType } from '../../types/type';

type FaqCollapsibleListProps = {
  collapsibleData: CollapsibleDataType;
};

function FaqCollapsibleList({collapsibleData}: FaqCollapsibleListProps): JSX.Element {
  return (
    <section className='faq__container'>
      <div className='faq__item'>
        {collapsibleData.map((data, index) => (
          <FaqCollapsible key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default FaqCollapsibleList;
