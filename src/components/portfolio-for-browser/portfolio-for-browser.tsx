import { PortfolioDataType } from '../../types/type';

type PortfolioForBrowserProps = {
  portfolioData: PortfolioDataType[];
};

function PortfolioForBrowser({
  portfolioData,
}: PortfolioForBrowserProps): JSX.Element {
  return (
    <div className='token__static-list'>
      <ul className='token__items'>
        <li className='token__item token__item-filter'>
          <div className='token__item-block'>
            <img
              src='../images/arrow-title-line.svg'
              alt='logo'
              className='token__item-arrow'
            />
            <p className='token__name-column token__name-column-title'>NAME</p>
          </div>
          <div className='token__item-block'>
            <img
              src='../images/arrow-title-line.svg'
              alt='logo'
              className='token__item-arrow'
            />
            <p className='token__name-column token__name-column-title'>TYPE</p>
          </div>
          <div className='token__item-block'>
            <img
              src='../images/arrow-title-line.svg'
              alt='logo'
              className='token__item-arrow'
            />
            <p className='token__name-column token__name-column-title'>
              SECTOR
            </p>
          </div>
        </li>
        {portfolioData.map((data) => (
          <li className='token__item' key={data.id}>
            <div className='token__item-block'>
              <a href={data.url}>
                <img src={data.src} alt='logo' className='token__item-logo' />
              </a>
            </div>
            <div className='token__item-block'>
              <p className='token__name-column'>{data.type}</p>
            </div>
            <div className='token__item-block'>
              <p className='token__name-column'>{data.sector}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioForBrowser;
