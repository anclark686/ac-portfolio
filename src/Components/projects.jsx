import {React} from "react";
import projects from "./ProjectList";
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({project}) => {
  return (
      <div className="project">


          <div>
              <img 
                  src={project.image} 
                  alt={project.title} 
                  className="projectImage"/>
                  <br />
              <h3>{project.title}</h3>
              <h4>{project.language}</h4>
              <p>{project.date}</p>
              <Button 
                id="projectButton"
                variant="info" 
                href={project.link}>
              View Code</Button>

          </div>

      </div>

/*       <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.language}
              <br />
              {project.date}
            </Card.Text>
            <Button 
            variant="info" 
            href={project.link}>View Code</Button>
          </Card.Body>
        </Card>
      </div> */
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