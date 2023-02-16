import { Link } from 'react-router-dom';
import './error-page-style.css';

function ErrorPage(): JSX.Element {
  return (
    <div className='error__container'>
      <h1 className='error__title'>404</h1>
      <p className='error__desc'>Page Not Found</p>
      <Link to='/' className='error__link'>
        Go to main page
      </Link>
    </div>
  );
}

export default ErrorPage;
