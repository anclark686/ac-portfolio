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
              <Dropdown.Item eventKey="home" className="NavButtons">
                <Link to="/"><div>Home</div></Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="about" className="NavButtons">
                <Link to="/about"><div>About</div></Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="projects" className="NavButtons">
                <Link to="/projects"><div>Projects</div></Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="contact" className="NavButtons">
                <Link to="/contact"><div>Contact</div></Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="resume" className="NavButtons" href="http://www.google.com">
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