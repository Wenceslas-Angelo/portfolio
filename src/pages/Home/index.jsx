import React from 'react';
import { Link } from 'react-router-dom';
import coder from '../../assets/images/coding.svg';
import './index.scss';

function Home() {
  return (
    <div className="home">
      <div className="text">
        <h1>
          Hi,
          <br />
          I am Wenceslas Angelo
          <br />
          Web Developer
        </h1>

        <h2>React junior developer</h2>

        <div className="btn">
          <Link to="/contact" className="flat-btn">
            CONTACT ME
          </Link>
        </div>
      </div>

      <div className="image">
        <img src={coder} alt="coding" />
      </div>
    </div>
  );
}

export default Home;
