import './contact-page-style.css';

function ContactPage(): JSX.Element {
  return (
    <section className='contact__container'>
      <div className='contact'>
        <h1 className='contact__title'>Contact Us</h1>
        <div className='contact__info-box'>
          <div className='contact__info contact__info-email'>
            <h2 className='contact__info-title'>Email</h2>
            <div className='contact__email'>
              <h3 className='contact__headline headline-text'>
                INVESTMENT INQUIRIES
              </h3>
              <div>
                <p className='contact__desc'>
                  You can email our Capital Formation team at:
                </p>
                <a href='mailto:narek.akopyan.j@gmail.com'>
                  narek.akopyan.j@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className='contact__info contact__info-location'>
            <h3 className='contact__info-title'>Locations</h3>
            <ul className='country__headline headline-text'>
              <li className='country'>ARMENIA</li>
              <li className='country'>ESTONIA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
