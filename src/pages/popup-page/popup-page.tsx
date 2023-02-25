import './popup-page-style.css';
import { PersonsDataType } from '../../types/type';

type PopupPageProps = {
  isOpenPopup: Boolean;
  clickHandler: (value: any) => void;
  data: PersonsDataType;
};

function PopupPage({
  isOpenPopup,
  clickHandler,
  data,
}: PopupPageProps): JSX.Element {
  const { name, role, bio } = data;

  return (
    <section
      className={
        isOpenPopup
          ? 'popup__container popup__container-active'
          : 'popup__container'
      }
    >
      <div className='popup__content'>
        <div className='popup__btn-close'>
          <a
            href='#'
            className='popup__close-icone'
            onClick={(evt) => clickHandler(evt)}
          ></a>
        </div>
        <div className='popup__info'>
          <h1 className='popup__person-name'>{name}</h1>

          <div className='popup__items'>
            <div className='popup__item'>
              <h2 className='popup__item-title'>ROLE</h2>
              <div className='popup__border'></div>
              <p className='popup__item-desc'>{role}</p>
            </div>

            <div className='popup__item'>
              <h2 className='popup__item-title'>BIO</h2>
              <div className='popup__border'></div>
              <p className='popup__item-desc'>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopupPage;
