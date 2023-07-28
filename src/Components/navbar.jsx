import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';

function Navbar() {
  return (
    <div>
      <>
        {['Info'].map(
          (variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id="drop-down-nav"
              variant={variant.toLowerCase()}
              title="Menu"
              menuVariant="dark"
            >
              <Dropdown.Item as={Link} to="/" eventKey="home" className="NavButtons">
                <div>Home</div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/about" eventKey="about" className="NavButtons">
                <div>About</div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/projects" eventKey="projects" className="NavButtons">
                <div>Projects</div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/contact" eventKey="contact" className="NavButtons">
                <div>Contact</div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="resume" className="NavButtons" href="https://reyaly-resume.herokuapp.com/">
                Resume
              </Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </>

    </div>
    
  );
}

export default Navbar;