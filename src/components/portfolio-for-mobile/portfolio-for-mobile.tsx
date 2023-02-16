import { PortfolioDataType } from '../../types/type';
import { useState, useRef } from 'react';

type PortfolioForMobileProps = {
  data: PortfolioDataType;
};

function PortfolioForMobile({ data }: PortfolioForMobileProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const contentRef: any = useRef(null);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <li className='token__dynamic-block' key={data.id}>
      <button
        className={`portfolio__collapsible ${
          isOpen ? 'portfolio__collapsible-active' : ''
        }`}
        onClick={handleClick}
      >
        <img src={data.src} alt='logo' className='token__item-logo' />
      </button>
      <div
        className='portfolio__content'
        ref={contentRef}
        style={
          isOpen
            ? { maxHeight: contentRef.current.scrollHeight + 'px' }
            : { maxHeight: '0px' }
        }
      >
        <p className='portfolio__content-desk'>{data.type}</p>
        <p className='portfolio__content-desk'>{data.sector}</p>
      </div>
    </li>
  );
}

export default PortfolioForMobile;
