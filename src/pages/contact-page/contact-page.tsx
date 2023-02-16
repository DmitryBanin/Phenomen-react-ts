import './contact-page-style.css';
import { Fragment } from 'react';

function ContactPage(): JSX.Element {
  return (
    <Fragment>
      <section className='contact-us__container'>
        <div className='contact-us'>
          <h1 className='contact-us__title'>Contact Us</h1>
          <div className='contact-us__info-box'>
            <div className='contact-us__info'>
              <h2 className='contact-us__info-title'>Email</h2>
              <div className='border'></div>
              <div className='contact-us__email-desc'>
                <h3 className='contact-us__email-headline headline-text'>
                  INVESTMENT INQUIRIES
                </h3>
                <p className='contact-us__desc'>
                  You can email our Capital Formation team at:
                  <a href='mailto:narek.akopyan.j@gmail.com'>
                    narek.akopyan.j@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className='contact-us__info'>
              <h3 className='contact-us__info-title'>Locations</h3>
              <div className='border'></div>
              <ul className='country__headline-list headline-text'>
                <li className='country'>ARMENIA</li>
                <li className='country'>ESTONIA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactPage;
