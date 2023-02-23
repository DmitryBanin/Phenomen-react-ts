import TeamItem from '../team-item/team-item';
import { PersonsDataType } from '../../types/type';
import { useState, useEffect } from 'react';
import { keyEscape, bodyElement } from '../../const';
import { setHiddenOverFlow } from '../../utils/setHiddenOverFlow';

type TeamItemListProps = {
  personsData: PersonsDataType[];
};

function TeamItemList({ personsData }: TeamItemListProps): JSX.Element {
  const [isOpenPopup, setOpenPopup] = useState(false);

  const clickHandler = (evt: Event) => {
    evt.preventDefault();
    setOpenPopup((prevState) => !prevState);
  };

  setHiddenOverFlow(isOpenPopup, bodyElement);

  const onKeyDownEsc = (evt: KeyboardEvent, escape: string) => {
    if (evt.key === escape) {
      evt.preventDefault();
      setOpenPopup((prevState) => !prevState);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', (evt) => {
      onKeyDownEsc(evt, keyEscape);
      setHiddenOverFlow(isOpenPopup, bodyElement);
    });
    return () => {
      document.removeEventListener('keydown', (evt) => {
        onKeyDownEsc(evt, keyEscape);
      });
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
            // setOpenPopup={setOpenPopup}
            clickHandler={clickHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default TeamItemList;
