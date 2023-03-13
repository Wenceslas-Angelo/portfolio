import React, { useState } from 'react';
import messagerie from '../../assets/images/new_message.svg';
import { headingStyles } from '../../utils/styles';

function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className={headingStyles}>Contact</h1>

      <div className="grid md:flex justify-center items-center mt-10 md:my-20">
        <img
          src={messagerie}
          title="New message"
          alt="illustration messagerie"
          className="mx-auto w-2/3 md:w-1/3"
        />

        <form className="md:w-[60%] w-full my-3" onSubmit={(e) => sendEmail(e)}>
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border md:w-[45%] w-full text-white border-gray-400 outline-none m-2 rounded-sm p-1 text-[20px] focus:border-indigo-600"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-transparent border md:w-[45%] w-full text-white border-gray-400 outline-none m-2 rounded-sm p-1 text-[20px] focus:border-indigo-600"
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border md:w-[92%] w-full text-white border-gray-400 outline-none m-2 rounded-sm p-1 text-[20px] focus:border-indigo-600"
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent border  h-[100px] md:w-[92%] w-full text-white border-gray-400 outline-none m-2 rounded-sm p-1 text-[20px] focus:border-indigo-600"
            ></textarea>
          </div>

          <button
            disabled={!name || !subject || !email || !message}
            className="text-2xl text-white py-1 cursor-pointer disabled:cursor-not-allowed m-2 md:w-[92%] w-full disabled:bg-gray-500 bg-indigo-600"
          >
            Send
          </button>
        </form>
      </div>

      <div className="w-full h-[500px]">
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="map"
          style={{ filter: 'opacity(0.7)' }}
          src="https://www.google.com/maps/embed/v1/place?q=Toamasina,+Madagascar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
    </div>
  );
}

export default Contact;
