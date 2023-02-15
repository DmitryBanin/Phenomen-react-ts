import './strategies-page-style.css';
import SummareOfTerms from '../../components/summare-of-terms/summare-of-terms';

function StrategiesPage(): JSX.Element {
  return (
    <section className='sectors__container'>
      <div className='sectors'>
        <h1 className='sectors__head-title'>Phenomen strategies</h1>
        <ul className='sectors__desc-list'>
          <li className='sectors__desc'>
            The fund strategy is designed to be implemented during a global
            market crisis. Purchase on liquid exchanges/platforms, only on the
            spot market, with subsequent shipment and storage on secure
            autonomous wallets for the long term. The basic purchases are made
            from the prices of seed-rounds or historical price lows.
          </li>
        </ul>
      </div>
      <SummareOfTerms />
    </section>
  );
}

export default StrategiesPage;
