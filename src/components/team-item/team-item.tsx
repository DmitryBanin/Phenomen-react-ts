import { PersonsDataType } from '../../types/type';
import { Link } from 'react-router-dom';

type TeamItemProps = {
  data: PersonsDataType;
};

function TeamItem({ data }: TeamItemProps): JSX.Element  {
  
  const { src, name, role } = data;

  return (
    <li className='team'>
      <Link to={'/'} className='team__person-info'>
        <div className='team__photo-box'>
          <img className='team__photo' src={src} alt='photo' />
        </div>
        <div className='team__desc-box'>
          <div className='team__desc'>
            <h2 className='team__name'>{name}</h2>
            <p className='team__role'>{role}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default TeamItem;
