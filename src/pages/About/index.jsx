import React from 'react';
import { Link } from 'react-router-dom';
import skillSet from '../../data/skills';

function About() {
  return (
    <div className="">
      <h1>About & Skills</h1>

      <div className="">
        {skillSet.map((item, index) => (
          <div key={index + item}>
            <Link
              to={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {item.icon}
              <span className="">{item.spanText}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
