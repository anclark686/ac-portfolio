import React from "react";
import { Link } from "react-router-dom";

const about = require("../images/information.png");
const projects = require("../images/web-development.png");
const contact = require("../images/email.png");
const resume = require("../images/resume_icon.png");

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/about" className="link-group">
            <img src={about} alt="About" className="nav-pic" />
            <h3 className="nav-text">About</h3>
          </Link>

          <Link to="/projects" className="link-group">
            <img src={projects} alt="Projects" className="nav-pic" />
            <h3 className="nav-text">Projects</h3>
          </Link>

          <Link to="/resume" className="link-group">
            <img src={resume} alt="Resume" className="nav-pic" />
            <h3 className="nav-text">Resume</h3>
          </Link>

          <Link to="/contact" className="link-group">
            <img src={contact} alt="Contact" className="nav-pic" />
            <h3 className="nav-text">Contact</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
