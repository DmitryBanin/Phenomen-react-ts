import { Fragment, useState, useRef } from 'react';

type FaqCollapsibleProps = {
  data: {
    title: string;
    desccription: string;
  };
};

function FaqCollapsible({ data }: FaqCollapsibleProps): JSX.Element {
  const { title, desccription } = data;

  const [isOpen, setOpen] = useState(false);
  const contentRef: any = useRef(null);

  const handleClick = () => {
    setOpen(!isOpen);
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
