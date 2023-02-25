import { Fragment, useState, useRef } from 'react';

type FaqCollapsibleProps = {
  data: {
    title: string;
    description: string;
  };
};

function FaqCollapsible({ data }: FaqCollapsibleProps): JSX.Element {
  const { title, description } = data;

  const [isCollapsible, setCollapsible] = useState(false);
  const contentRef: any = useRef(null);

  const handleClick = () => {
    setCollapsible(!isCollapsible);
  };

  return (
    <Fragment>
      <button
        className={isCollapsible ? 'collapsible collapsible-active' : 'collapsible'}
        onClick={handleClick}
      >
        {title}
      </button>
      <div
        className='content'
        ref={contentRef}
        style={
          isCollapsible
            ? { maxHeight: contentRef.current.scrollHeight + 'px' }
            : { maxHeight: '0px' }
        }
      >
        <p>{description}</p>
      </div>
    </Fragment>
  );
}

export default FaqCollapsible;
