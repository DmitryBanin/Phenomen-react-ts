import './portfolio-page-style.css';
import PortfolioForMobileItems from '../../components/portfolio-for-mobile-items/portfolio-for-mobile-items';
import PortfolioForBrowser from '../../components/portfolio-for-browser/portfolio-for-browser';
import { PortfolioDataType } from '../../types/type';

type PortfolioPageProps = {
  portfolioData: PortfolioDataType[];
};

function PortfolioPage({ portfolioData }: PortfolioPageProps): JSX.Element {
  return (
    <section className='portfolio__container'>
      <div className='portfolio__haed'>
        <h1 className='portfolio__haed-title'>A fund portfolio</h1>
        <p className='portfolio__haed-desc'>
          We invest in thematic ideas and projects that are core elements of the
          blockchain ecosystem infrastructure, such as exchanges, depositories,
          institutional trading instruments, decentralized finance,
          next-generation payment systems and more.
        </p>
      </div>

      <PortfolioForBrowser portfolioData={portfolioData} />
      <PortfolioForMobileItems portfolioData={portfolioData} />
    </section>
  );
}

export default PortfolioPage;
