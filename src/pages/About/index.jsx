import React from 'react';
import Skill from '../../components/Skill';
import skillSet from '../../data/skills';
import { headingStyles } from '../../utils/styles';

function About() {
  return (
    <div>
      <h1 className={headingStyles}>About & Skills</h1>
      <div className="my-10">
        <div className="text-[20px] text-[#ccd6f6] py-5">
          <h2 className="text-[#64ffda] text-[40px] pb-5">About me</h2>
          <p>
            I am ambitious front end developer based on Toamasina, Madagascar.
          </p>
          <p>I am quitly confident, naturaly curious.</p>
          <p>
            If I need to define my self in one sentence, that would be a foot
            ball fanatic, the technology obsessed, and I love music and anime.
          </p>
        </div>

        {/* Skills content */}
        <h2 className="text-[#64ffda] text-[40px] pb-5">My Skills</h2>
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
