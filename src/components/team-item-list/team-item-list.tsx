import TeamItem from '../team-item/team-item';
import { PersonsDataType } from '../../types/type';
import { useState, useEffect } from 'react';

type TeamItemListProps = {
  personsData: PersonsDataType[];
};

function TeamItemList({ personsData }: TeamItemListProps): JSX.Element {

    const [isOpenPopup, setOpenPopup] = useState(false);
    const KEY_ESCAPE = 'Escape';

    const bodyElement = document.getElementById('body');
    if (bodyElement !== null && isOpenPopup) {
      bodyElement.style.overflow = 'hidden';
    } else if (bodyElement !== null && !isOpenPopup) {
      bodyElement.style.overflow = '';
    }

  useEffect(() => {
    const onKeyDownEsc = (evt: KeyboardEvent) => {
      if (evt.key === KEY_ESCAPE) {
        evt.preventDefault();
        setOpenPopup((prevState) => !prevState);
      }
    };

    document.addEventListener('keydown', onKeyDownEsc);
    return () => {
      document.removeEventListener('keydown', onKeyDownEsc);
    };
  }, [!isOpenPopup]);

  return (
    <div className='teams__box'>
      <ul className='teams'>
        {personsData.map((data, index) => (
          <TeamItem
            key={index}
            data={data}
            isOpenPopup={isOpenPopup}
            setOpenPopup={setOpenPopup}
          />
        ))}
      </ul>
    </div>
  );
}

export default TeamItemList;
