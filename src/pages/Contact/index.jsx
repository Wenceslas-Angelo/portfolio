import React, { useRef } from 'react';
import contact from '../../assets/images/contact.gif';
import emailjs from '@emailjs/browser';
import './index.scss';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to sent the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
        </div>

        <div className="contact-container">
          <div className="image">
            <img src={contact} alt="contact-image" />
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" required placeholder="Name" />
                </li>
                <li className="half">
                  <input type="email" required placeholder="Email" />
                </li>
                <li>
                  <input type="text" required placeholder="Subject" />
                </li>
                <li>
                  <textarea placeholder="Message" required></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-btn">
                    SEND
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
