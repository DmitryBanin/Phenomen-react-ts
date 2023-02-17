import TeamItem from '../team-item/team-item';
import { PersonsDataType } from '../../types/type';

type TeamItemListProps = {
  personsData: PersonsDataType[];
};

function TeamItemList({ personsData }: TeamItemListProps): JSX.Element {
  return (
    <div className='teams__box'>
      <ul className='teams'>
        {personsData.map((data, index) => (
          <TeamItem key={index} data={data} />
        ))}
      </ul>
    </div>
  );
}

export default TeamItemList;
