import React from "react";
import { Link } from "react-router-dom";
import ProjectCarousel from "./ProjectCarousel";
import TechCarousel from "./TechCarousel";

const contact = require("../images/email.png");
const resume = require("../images/resume_icon.png");

const Home = () => {
  return (
    <div className="home main">
      <div className="title-container">
        <h1 id="alycia">Alycia Nicole</h1>
        <h2 id="title">full-stack developer</h2>
      </div>
      <div className="links">
        <div className="link-row">
          <Link to="/about">
            <div className="about home-link">
              <TechCarousel />
              <h3>About</h3>
            </div>
          </Link>

          <Link to="/projects">
            <div className="projects home-link">
              <ProjectCarousel />
              <h3>Projects</h3>
            </div>
          </Link>

          <Link to="/resume">
            <div className="resume home-link">
              <img src={resume} alt="Resume" className="tech-pic" />
              <h3>Resume</h3>
            </div>
          </Link>

          <Link to="/contact">
            <div className="contact home-link">
              <img src={contact} alt="Contact" className="tech-pic" />
              <h3>Contact</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
