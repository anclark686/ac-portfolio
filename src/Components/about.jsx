import React from "react";
import { Link } from "react-router-dom";
import techStack from "./TechStack";

const About = () => {
  return (
    <div className="about-content main">
      <h1 className="header">About Me</h1>
      <h2 className="subheader">Developer in Training:</h2>
      <h3>
        Programming is one of my biggest hobbies, and I hope to make it my
        career one day.
      </h3>
      <h3>
        The projects page includes a handful of sites I've made in my free-time.
      </h3>

      <h2 className="subheader tech-header">Technologies Used:</h2>
      <div className="technologies">
        {techStack.map((tech, i) => (
          <div className="tech-item" key={i}>
            <i className={`${tech.iconClass} tech-icon`}></i>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="link-home">
        Back to Home
      </Link>
    </div>
  );
};

export default About;
