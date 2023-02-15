import './summare-of-terms-style.css';

function SummareOfTerms(): JSX.Element {
  return (
    <aside className='summary'>
      <p className='summary__title'>SUMMARY OF TERMS</p>

      <dl className='summare__list'>
        <dt className='summary__item-key'>Launch</dt>
        <dd className='summary__item-value'>March 2019</dd>
        <dt className='summary__item-key'>Minimum investment</dt>
        <dd className='summary__item-value'>1 million dollars</dd>
        <dt className='summary__item-key'>Investor type</dt>
        <dd className='summary__item-value'>Qualifying buyers only</dd>
        <dt className='summary__item-key'>Control board</dt>
        <dd className='summary__item-value'>2% of invested capital annually</dd>
        <dt className='summary__item-key'>Pay for performance</dt>
        <dd className='summary__item-value'>
          30% to 40% of the net internal rate of return
        </dd>
      </dl>

      <p className='summary__title'>JOIN THE FUND</p>
      <p className='summary__desk'>
        To gain access, you will need to answer several questions and provide
        supporting documentation
      </p>
      <div className='summary__nav'>
        <a className='summary__link' href='#'>
          PRESENTATION
        </a>
        <a className='summary__link' href='#'>
          CONDITIONS SUMMARY
        </a>
      </div>
    </aside>
  );
}

export default SummareOfTerms;
