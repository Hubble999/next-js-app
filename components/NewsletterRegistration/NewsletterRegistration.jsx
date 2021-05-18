import { useRef, useState } from 'react';
import classes from './NewsletterRegistration.module.scss';

function NewsletterRegistration() {
  const [message, setMessage] = useState('Sign up to stay updated!');
  const [disabledBtn, setDisabledBtn] = useState(false);
  const emailInputRef = useRef();

  function registrationHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;
    e.target.reset();
    setDisabledBtn(true);
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        data.message ? setMessage(data.message) : setMessage(data.errors[0]);
        setDisabledBtn(false);
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>{message}</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <label htmlFor="email" className="visually-hidden">
            Your email
          </label>
          <input type="email" id="email" placeholder="Your email" ref={emailInputRef} />
          <button type="submit" disabled={disabledBtn}>
            Register
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
