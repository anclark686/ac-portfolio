import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProjectCard = ({ project }) => {
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
            className="projectImage"
          />
          <br />
        </Zoom>
        <h3>{project.title}</h3>
        <h4>{project.language}</h4>
        <p>{project.date}</p>
        {project.link === "#" ? (
          <div className="spacer"></div>
        ) : (
          <div className="spacer">
            <Button id="projectButton" variant="info" onClick={handleShow}>
              View More
            </Button>
          </div>
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalButtons">
            <Button
              variant="info"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="modalButton"
            >
              View Site
            </Button>
            <Button
              variant="info"
              href={project.ghLink}
              target="_blank"
              rel="noreferrer"
              className="modalButton"
            >
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
};

export default ProjectCard;
