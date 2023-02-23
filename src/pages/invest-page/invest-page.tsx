import './invest-page-style.css';

function InvestPage() {
  return (
      <section className='venture__container'>
        <div className='venture-capital'>
          <h1 className='venture-capital__title'>Phenomen Venture Capital</h1>
          <ul className='venture-capital__desc-list'>
            <li className='venture-capital__desc'>
              Our fund provides investors with a full range of access to the
              blockchain space, ranging from illiquid venture capital assets
              (including early stage tokens and multi-stage venture capital) to
              more liquid assets such as bitcoins and other cryptocurrencies.
            </li>
            <li className='venture-capital__desc'>
              Access for accredited investors with a minimum amount of
              $1,000,000 or more.
            </li>
            <li className='venture-capital__desc'>
              If you meet the above requirements and would like to learn more,
              please fill out the form for more information.
            </li>
          </ul>
        </div>
        <div className='inquiry'>
          <h2 className='inquiry__title'>INVESTOR INQUIRY</h2>
          <form className='reg-form' id='form' name='form'>
            <div className='reg-form__elements'>
              <div className='reg-form__elements-block'>
                <fieldset className='reg-form__element'>
                  <label className='reg-form__label' htmlFor='first-name'>
                    First name
                  </label>
                  <input
                    id='first-name'
                    name='first-name'
                    type='text'
                    required
                  />
                </fieldset>
                <fieldset className='reg-form__element'>
                  <label className='reg-form__label' htmlFor='last-name'>
                    Last name
                  </label>
                  <input id='last-name' name='last-name' type='text' required />
                </fieldset>
              </div>
              <div className='reg-form__elements-block'>
                <fieldset className='reg-form__element'>
                  <label className='reg-form__label' htmlFor='email'>
                    Email
                  </label>
                  <input id='email' name='email' type='email' required />
                </fieldset>
                <fieldset className='reg-form__element'>
                  <label className='reg-form__label' htmlFor='city'>
                    City
                  </label>
                  <input id='city' name='city' type='text' required />
                </fieldset>
              </div>
              <div className='reg-form__elements-block'>
                <fieldset className='reg-form__element'>
                  <label className='reg-form__label' htmlFor='company'>
                    Company name
                  </label>
                  <input id='company' name='company' type='text' required />
                </fieldset>
                <fieldset className='reg-form__element'>
                  <label className='reg-form__label' htmlFor='job-title'>
                    Job title
                  </label>
                  <input id='job-title' name='job-title' type='text' required />
                </fieldset>
              </div>
            </div>
            <fieldset className='reg-form__element'>
              <label className='reg-form__label' htmlFor='phone-number'>
                Phone number
              </label>
              <input
                id='phone-number'
                name='phone-number'
                type='tel'
                required
              />
            </fieldset>
            <fieldset className='reg-form__element'>
              <label className='reg-form__label' htmlFor='investor'>
                Type of investor
              </label>
              <select
                className='select'
                id='investor'
                name='investor'
                required
                autoFocus
              >
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>
            </fieldset>

            <fieldset className='reg-form__element-checkbox'>
              <h3 className='reg-form__label-checkbox-title'>
                What type of investment are you interested in?
              </h3>

              <label className='reg-form__label reg-form__label-checkbox'>
                <input type='checkbox' name='a' value='Early stage tokens' />
                <span>Early stage tokens</span>
              </label>

              <label className='reg-form__label reg-form__label-checkbox'>
                <input type='checkbox' name='b' value='Liquid tokens' />
                <span>Liquid tokens</span>
              </label>

              <label className='reg-form__label reg-form__label-checkbox'>
                <input
                  type='checkbox'
                  name='c'
                  value='Cryptocurrency mining'
                />
                <span>Cryptocurrency mining</span>
              </label>
            </fieldset>

            <fieldset className='reg-form__element'>
              <label className='reg-form__label' htmlFor='questions'>
                Additional Questions:
              </label>
              <input id='questions' name='questions' type='text' required />
            </fieldset>

            <fieldset className='reg-form__element'>
              <button className='reg-form__submit' type='submit'>
                SUBMIT
              </button>
            </fieldset>
          </form>
        </div>
      </section>
  );
}

export default InvestPage;
