import React from 'react';
import { projectDatas } from '../data.js';

function Projects() {
  return (
    <div className="Projects">
      <h1 className="project-main">Projects I Created</h1>
      {projectDatas.map((projectData) => (
        <main className="proj">
        <div className="project-1">
          <h2 className="project1-title"><span className="purple">Title:</span> {projectData.title}</h2>
          <p className="project1-subtitle"><span className="purple">Subtitle:</span> {projectData.subtitle}</p>
          <p className="project1-desc"><span className="purple">Description:</span> {projectData.description}</p>
          <img className="project1-img" src={projectData.image} alt="gallery" />
          <p className="project1-status"><span className="purple">Status:</span> Online</p>
          <p className="project1-published"><span className="purple">Published:</span> Yes</p>
          <a className="project1-visit" href={projectData.link} rel="noreferrer" target="_blank">Visit</a>
        </div>
        </main>
      )
      )};
    </div>
  );
}

export default Projects;