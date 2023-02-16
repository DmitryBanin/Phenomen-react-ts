import { PortfolioDataType } from '../../types/type';
import PortfolioForMobile from '../../components/portfolio-for-mobile/portfolio-for-mobile';

type PortfolioForMobileItemsProps = {
  portfolioData: PortfolioDataType[];
};

function PortfolioForMobileItems({
  portfolioData,
}: PortfolioForMobileItemsProps): JSX.Element {
  return (
    <ul className='token__dynamic-list'>
      {portfolioData.map((data) => (
        <PortfolioForMobile key={data.id} data={data} />
      ))}
    </ul>
  );
}

export default PortfolioForMobileItems;
