import { PersonsDataType } from '../../types/type';
import Popup from '../popup/popup';

type TeamItemProps = {
  data: PersonsDataType;
  isOpenPopup: Boolean;
  // setOpenPopup: (value: boolean) => void;
  clickHandler: (value: any) => void;
};

function TeamItem({
  data,
  isOpenPopup,
  // setOpenPopup,
  clickHandler,
}: TeamItemProps): JSX.Element {
  const { src, name, role } = data;

  return (
    <li className='team'>
      <a
        href='#'
        className='team__person-info'
        onClick={(evt) => clickHandler(evt)}
      >
        <div className='team__photo-box'>
          <img className='team__photo' src={src} alt='person from the team' />
        </div>
        <div className='team__desc-box'>
          <div className='team__desc'>
            <h2 className='team__name'>{name}</h2>
            <p className='team__role'>{role}</p>
          </div>
        </div>
      </a>
      <Popup
        isOpenPopup={isOpenPopup}
        // setOpenPopup={setOpenPopup}
        data={data}
        clickHandler={clickHandler}
      />
    </li>
  );
}

export default TeamItem;
