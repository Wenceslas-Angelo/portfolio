import React from 'react';
import PropTypes from 'prop-types';

function Project({ name, image, technologies }) {
  return (
    <div className="w-[40%] shadow-lg shadow-white/20 mt-5 rounded-md relative">
      <div className="relative">
        <img src={image} alt={`${name}-project-image`} />
      </div>

      <div className="py-5">
        {technologies &&
          technologies.map((tech) => (
            <span
              key={tech}
              className="text-white text-[20px] bg-indigo-600 mx-3 px-2 py-1 rounded-3xl"
            >{`${tech}`}</span>
          ))}
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  technologies: PropTypes.array,
};

export default Project;
