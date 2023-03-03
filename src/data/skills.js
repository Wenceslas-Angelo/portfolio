import React from 'react';

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGit } from 'react-icons/fa';
import { SiSass, SiRedux } from 'react-icons/si';

const skillSet = [
  {
    icon: <AiFillHtml5 color="#f06529" className="skills-icon" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 color="#264de4" className="skills-icon" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript color="#F0DB4F" className="skills-icon" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiSass color="#cd6799" className="skills-icon" />,
    spanText: 'SASS',
    url: '',
  },
  {
    icon: <FaGit color="#F1502F" className="skills-icon" />,
    spanText: 'GIT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <RiReactjsLine color="#61DBFB" className="skills-icon" />,
    spanText: 'REACT JS',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
  },
  {
    icon: <SiRedux color="#764abc" className="skills-icon" />,
    spanText: 'Redux',
    url: 'https://redux.js.org/introduction/getting-started',
  },
];

export default skillSet;
