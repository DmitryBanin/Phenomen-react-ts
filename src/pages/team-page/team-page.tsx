import './team-page-style.css';
import { Fragment } from 'react';

function TeamPage() {
  return (
    <Fragment>
      <section className='team__container'>
        <div className='team__head'>
          <h1 className='team__head-title'>The Phenomen team</h1>
          <p className='team__head-desc'>
            Phenomen&#8217;s competitive edge is built on thought leadership,
            technical talent, and years of investing exclusively in blockchain
            assets.
          </p>
        </div>
        <div className='teams__box'>{/* список teamPerson */}</div>
      </section>
    </Fragment>
  );
}

export default TeamPage;
