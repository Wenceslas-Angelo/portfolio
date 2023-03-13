import React from 'react';
import Project from '../../components/project';
import projects from '../../data/projects';
import { headingStyles } from '../../utils/styles';

function Work() {
  return (
    <div>
      <h1 className={headingStyles}>My projects</h1>

      <div>
        {projects.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            name={project.name}
            technologies={project.technologies}
            github={project.github}
            deployment={project.deployment}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
