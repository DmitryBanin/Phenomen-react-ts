import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import FormPage from './pages/form-page/form-page';
import ExpertisePage from './pages/expertise-page/expertise-page';
import SectorsPage  from './pages/sectors-page/sectors-page';
import PortfolioPage from './pages/portfolio-page/portfolio-page';
import StrategiesPage from './pages/strategies-page/strategies-page';
import TeamPage from './pages/team-page/team-page';
import ContactPage from './pages/contact-page/contact-page';
import Error404Page from './pages/error-404-page/error-404-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/expertise' element={<ExpertisePage />} />
        <Route path='/sectors' element={<SectorsPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/strategies' element={<StrategiesPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
