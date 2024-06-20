import React from "react";
import { Link } from "react-router-dom";
import techStack from "./TechStack";

const About = () => {
  return (
    <div className="about-content main">
      <h1 className="header">About Me</h1>
      <h2 className="subheader">Full-Stack Developer:</h2>
      <div className="about-summary-container">
        <p className="about-summary">
          I'm a recently crowned Software Engineer, pulled from the depths of
          tutorial hell by a great company, and with an awesome bootcamp
          lighting the way.
        </p>
        <p className="about-summary">
          Programming is one of my biggest hobbies, and I love creating small
          projects on the side.
        </p>
        <p className="about-summary">
          The projects page includes a handful of sites I've made in my
          free-time.
        </p>
      </div>

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
