import React from 'react';
import Skill from '../../components/Skill';
import skillSet from '../../data/skills';
import { headingStyles } from '../../utils/styles';

function About() {
  return (
    <div>
      <h1 className={headingStyles}>About & Skills</h1>
      <div className="my-10">
        {/* Skills content */}
        <div className="grid md:grid-cols-3 gap-5">
          {skillSet.map((item, index) => (
            <Skill
              key={index}
              url={item.url}
              icon={item.icon}
              text={item.spanText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
