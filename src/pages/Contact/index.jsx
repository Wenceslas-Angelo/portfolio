import React, { useState } from 'react';
import messagerie from '../../assets/images/new_message.svg';

function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1 className="">Contact Me</h1>

      <div>
        <img
          src={messagerie}
          title="New message"
          alt="illustration messagerie"
        />

        <form>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button disabled={!name || !subject || !email || !message}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
