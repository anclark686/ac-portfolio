import React from "react";
import projects from "./projects/ProjectList";
import ProjectCard from "./projects/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="project-content main">
      <h1 className="header">Projects</h1>
      <a
        className="outside-link"
        href="https://github.com/anclark686"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <div className="container">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      <div className="disclaimer">
        <h4>* Denotes a work project, site and code unavailable.</h4>
      </div>
      <Link to="/" className="link-home">Back to Home</Link>
    </div>
  );
};

export default Projects;
