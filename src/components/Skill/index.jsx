import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Skill({ url, icon, text }) {
  return (
    <div className="text-lg font-[Burtons]">
      <Link
        to={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white text-white hover:text-indigo-600 hover:border-indigo-600 hover:scale-[1.05]  flex flex-col justify-center items-center py-2 rounded-md transition"
      >
        <span className="text-3xl py-2">{icon}</span>
        <span className="text-3xl">{text}</span>
      </Link>
    </div>
  );
}

Skill.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
};

export default Skill;
