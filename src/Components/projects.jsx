import { React, useState } from "react";
import projects from "./ProjectList";
import { Card, Button, Modal } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



const ProjectCard = ({project}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="project">


          <div>
              <Zoom>
              <img
                  onClick={() => console.log(`clicked ${project.title}`)} 
                  src={project.image} 
                  alt={project.title} 
                  className="projectImage"/>
                <br />
                </Zoom>
              <h3>{project.title}</h3>
              <h4>{project.language}</h4>
              <p>{project.date}</p>
              {project.link === "#" ? null :
              <Button 
                id="projectButton"
                variant="info" 
                onClick={handleShow}>
              View More</Button>}

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalButtons">
                  <Button variant="info" href={project.link} className="modalButton">
                    View Site
                  </Button>
                  <Button variant="info" href={project.ghLink} className="modalButton">
                    View Code
                  </Button>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="info" onClick={handleClose}>
                    Close
                  </Button>
                  
                </Modal.Footer>
              </Modal>
          </div>

      </div>
  );
}

  
const Projects = () => {
  
  return (
    <div>
      <h1 className="header">Projects</h1>
      <a href="https://github.com/anclark686" target="_blank" rel="noreferrer">GitHub</a>

      <div className="container">
        {projects.map((project) => (
            <ProjectCard project={project} />
        ))}

      </div>

    </div>
  );
};
  
export default Projects;