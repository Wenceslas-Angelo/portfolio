import React from 'react';
import { FaHome, FaUser, FaEye, FaEnvelope, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './index.scss';

function SideBar() {
  return (
    <div className="side-bar">
      <nav>
        <NavLink to="/" className="home-link" activeclassname="active">
          <FaHome />
        </NavLink>
        <NavLink to="/about" className="about-link">
          <FaUser />
        </NavLink>
        <NavLink to="/work" className="work-link">
          <FaEye />
        </NavLink>
        <NavLink to="/contact" className="contact-link">
          <FaEnvelope />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Wenceslas-Angelo"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
