import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout-page/layout-page';
import MainPage from './pages/main-page/main-page';
import InvestPage from './pages/invest-page/invest-page';
import SectorsPage from './pages/sectors-page/sectors-page';
import ExpertisePage from './pages/expertise-page/expertise-page';
import StrategiesPage from './pages/strategies-page/strategies-page';
import PortfolioPage from './pages/portfolio-page/portfolio-page';
import TeamPage from './pages/team-page/team-page';
import ContactPage from './pages/contact-page/contact-page';
import ErrorPage from './pages/error-page/error-page';
import ScrollToTop from './utils/scroll-to-top';
import {
  sectorsCollapsibleData,
  expertiseCollapsibleData,
  portfolioData,
  personsData,
} from './mocks/db';
import {AppRoute} from './const'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Layout} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Invest} element={<InvestPage />} />
          <Route
            path={AppRoute.Sectors}
            element={
              <SectorsPage sectorsCollapsibleData={sectorsCollapsibleData} />
            }
          />
          <Route
            path={AppRoute.Expertise}
            element={
              <ExpertisePage
                expertiseCollapsibleData={expertiseCollapsibleData}
              />
            }
          />
          <Route path={AppRoute.Strategies} element={<StrategiesPage />} />
          <Route
            path={AppRoute.Portfolio}
            element={<PortfolioPage portfolioData={portfolioData} />}
          />
          <Route
            path={AppRoute.Team}
            element={<TeamPage personsData={personsData} />}
          />
          <Route path={AppRoute.Contacts} element={<ContactPage />} />
        </Route>
        <Route path={AppRoute.Error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
