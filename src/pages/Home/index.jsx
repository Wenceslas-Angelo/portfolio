import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/images/heroMan.png';
import profil from '../../assets/images/profil.jpg';
import Button from '../../components/Button';

function Home() {
  return (
    <>
      <div className="min-h-[100vh] flex justify-center items-center flex-wrap md:flex-nowrap text-center md:text-justify">
        <div>
          <h3 className="text-slate text-xl md:text-2xl py-2">
            Hi, my name is
          </h3>
          <h1 className="text-lightSlate text-4xl md:text-5xl tracking-xl">
            Wenceslas Angelo
          </h1>
          <h3 className="text-slate text-xl md:text-2xl py-2">
            I am a{' '}
            <span className="text-2xl md:text-3xl text-lightSlate">
              freelance React JS front end developer
            </span>{' '}
            passionate about creating innovative and user-friendly user
            experiences.
          </h3>
          <h3 className="text-slate text-xl md:text-2xl py-2">
            I enjoy exploring new technologies and techniques to improve my
            skills and deliver quality results to my clients.
          </h3>

          <Button to="/contact" text="CONTACT ME" />
        </div>

        <div>
          <img src={hero} alt="hero-image" />
        </div>
      </div>

      <div className="min-h-[50vh] flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap text-center md:text-justify mt-5 md:mt-0">
        <div className="">
          <h2 className="text-greenPrimary text-3xl mb-5">
            A little zoom on my services.
          </h2>
          <p className="text-slate text-xl max-w-3xl">
            I specialize in creating modern and responsive websites using
            technologies such as React, Redux, Tailwind and much more.
          </p>
          <p className="text-slate text-xl max-w-3xl">
            I can work on a variety of projects ranging from corporate websites
            to complex web applications.
          </p>

          <p className="text-slate text-xl max-w-3xl my-5">
            You can browse through my{' '}
            <Link to="/project" className="text-greenPrimary hover:underline">
              projects
            </Link>{' '}
            to see my skills and achievements.
          </p>

          <p className="text-slate text-xl max-w-3xl">
            Do not hesitate to{' '}
            <Link to="/contact" className="text-greenPrimary hover:underline">
              contact me
            </Link>{' '}
            if you have any questions or if you wish to discuss your next
            project.
          </p>
          <Button to="/about" text="About me" />
        </div>
        <div>
          <img
            src={profil}
            alt="wenceslas-angelo-profil
          "
            className="w-60 rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
