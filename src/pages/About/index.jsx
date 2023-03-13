import React from 'react';
import { Link } from 'react-router-dom';
import skillSet from '../../data/skills';
import { headingStyles } from '../../utils/styles';

function About() {
  return (
    <div>
      <h1 className={headingStyles}>About & Skills</h1>
      <div className="my-10">
        {/* About content */}
        <p></p>

        {/* Skills content */}
        <div className="grid md:grid-cols-3 gap-5">
          {skillSet.map((item, index) => (
            <div key={index + item} className="text-lg font-[Burtons]">
              <Link
                to={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:text-indigo-600 hover:border-indigo-600 hover:scale-[1.05]  flex flex-col justify-center items-center py-2 rounded-md transition"
              >
                <span className="text-3xl py-2">{item.icon}</span>
                <span className="text-3xl">{item.spanText}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
