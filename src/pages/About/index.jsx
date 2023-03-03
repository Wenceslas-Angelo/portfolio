import React from 'react';
import { Link } from 'react-router-dom';
import skillSet from '../../data/skills';
import './index.scss';

function About() {
  return (
    <div className="about-page">
      <h1>About & Skills</h1>

      <div className="skills-container">
        {skillSet.map((item, index) => (
          <div key={index + item}>
            <Link
              to={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-container"
            >
              {item.icon}
              <span className="skill__name">{item.spanText}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
