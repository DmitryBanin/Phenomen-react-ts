import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout-page/layout-page';
import MainPage from './pages/main-page/main-page';
import InvestPage from './pages/invest-page/invest-page';
import ExpertisePage from './pages/sectors-page/sectors-page';
import SectorsPage from './pages/expertise-page/expertise-page';
import PortfolioPage from './pages/portfolio-page/portfolio-page';
import StrategiesPage from './pages/strategies-page/strategies-page';
import TeamPage from './pages/team-page/team-page';
import ContactPage from './pages/contact-page/contact-page';
import Error404Page from './pages/error-404-page/error-404-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/invest' element={<InvestPage />} />
          <Route path='/sectors' element={<SectorsPage />} />
          <Route path='/expertise' element={<ExpertisePage />} />
          <Route path='/strategies' element={<StrategiesPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
