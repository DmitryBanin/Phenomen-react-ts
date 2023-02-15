import FaqCollapsible from '../faq-collapsible/faq-collapsible';
import './faq-collapsible-list-style.css';

type dataProps = {
  collapsibleList: { title: string; desccription: string }[];
};

function FaqCollapsibleList({ collapsibleList }: dataProps): JSX.Element {
  return (
    <section className='faq__container'>
      <div className='faq__item'>
        {collapsibleList.map((collapsible, index) => (
          <FaqCollapsible key={index} collapsible={collapsible} />
        ))}
      </div>
    </section>
  );
}

export default FaqCollapsibleList;
