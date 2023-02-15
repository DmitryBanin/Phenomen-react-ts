import { Fragment, useState, useRef } from 'react';

type collapsibleProps = {
  collapsible: {
    title: string;
    desccription: string;
  };
};

function FaqCollapsible({ collapsible }: collapsibleProps): JSX.Element {
  const { title, desccription } = collapsible;

  const [isOpen, setOPen] = useState(false);
  const contentRef: any = useRef(null);

  const handleClick = () => {
    setOPen(!isOpen);
  };

  return (
    <Fragment>
      <button
        className={`collapsible ${isOpen ? 'collapsible-active' : ''}`}
        onClick={handleClick}
      >
        {title}
      </button>
      <div
        className='content'
        ref={contentRef}
        style={
          isOpen
            ? { maxHeight: contentRef.current.scrollHeight + 'px' }
            : { maxHeight: '0px' }
        }
      >
        <p>{desccription}</p>
      </div>
    </Fragment>
  );
}

export default FaqCollapsible;
