import React from "react";
import { Link } from "react-router-dom";

const about = require('../images/information.png')
const projects = require('../images/web-development.png')
const contact = require('../images/email.png')

const Home = () => {
  return (
    <div className="home">
      <h1 id="alycia">Alycia Nicole</h1>
      <h2 id="title">full-stack developer</h2>

      <div className="links">
        <div className="link-row">
          <Link to="/about">
            
            <div className="about home-link">
            <img src={about} alt="About" className="tech-pic"/>
              <h3>About</h3>
              </div>
          </Link>

          <Link to="/projects">
          
            <div className="projects home-link">
            <img src={projects} alt="Projects" className="tech-pic"/>
              <h3>Projects</h3>
              </div>
          </Link>

          <Link to="/contact">
          
            <div className="contact home-link">
            <img src={contact} alt="Contact" className="tech-pic"/>
              <h3>Contact</h3>
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
