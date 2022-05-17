import {React, useState} from "react";
  
const Projects = () => {
  const [projects, setProjects] = useState([]);

  
  return (
    <div>
      <h1 className="header">Projects</h1>
      <a href="https://github.com/anclark686" target="_blank" rel="noreferrer">GitHub</a>
      

    </div>
  );
};
  
export default Projects;