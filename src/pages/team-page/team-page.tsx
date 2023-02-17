import './team-page-style.css';
import TeamItemList from '../../components/team-item-list/team-item-list';
import { PersonsDataType } from '../../types/type';

type TeamItemListProps = {
  personsData: PersonsDataType[];
};

function TeamPage({ personsData }: TeamItemListProps): JSX.Element {
  return (
    <section className='team__container'>
      <div className='team__head'>
        <h1 className='team__head-title'>The Phenomen team</h1>
        <p className='team__head-desc'>
          Phenomen&#8217;s competitive edge is built on thought leadership,
          technical talent, and years of investing exclusively in blockchain
          assets.
        </p>
      </div>
      <TeamItemList personsData={personsData} />
    </section>
  );
}

export default TeamPage;
