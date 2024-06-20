import React, { useState } from "react";
import projects from "./projects/ProjectList";
import ProjectCard from "./projects/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filterArr, setFilterArr] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const addToFilterArr = (e) => {
    let tempArr

    if (e.target.checked) {
      if (!filterArr.includes(e.target.id)) {
        tempArr = [...filterArr, e.target.id]

        setFilterArr(tempArr)
      } 
    } else {
      tempArr = filterArr.filter((x) => x !== e.target.id)

      setFilterArr(tempArr)
    }

    return tempArr
  }

  const filterItems = (e) => {
    let filters = addToFilterArr(e)
    console.log(filters)
    if (filters.length === 0) {
      setFilteredProjects(projects)
      return
    } 

    const tempFilteredProjects = []

    projects.forEach((project) => {
      filters.forEach((filter) => {
        if (project.tags.includes(filter) && !tempFilteredProjects.includes(project)) {
          tempFilteredProjects.push(project)
        }
      })
    })
    
    setFilteredProjects(tempFilteredProjects)
  }

  return (
    <div className="project-content main">
      <h1 className="header">Projects</h1>
      <a
        className="outside-link"
        href="https://github.com/anclark686"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <div className="filer-container">
        <h4>Filters</h4>

        <div className="tech-checkboxes">
          <div id="python-ruby-container" className="project-tech-container">
            <input type="checkbox" className="main-select" id="python" onChange={filterItems} />
            <label htmlFor="python" className="main-tech-label">Python</label>
            <ul className="tags-list">
              <li>
                <input type="checkbox" className="sub-select" id="flask" onChange={filterItems} />
                <label htmlFor="flask" className="sub-tech-label">Flask</label>
              </li>
              <li>
                <input type="checkbox" className="sub-select" id="django" onChange={filterItems} />
                <label htmlFor="django" className="sub-tech-label">Django</label>
              </li>
            </ul>
            <input type="checkbox" className="main-select" id="ruby" onChange={filterItems} />
            <label htmlFor="ruby" className="main-tech-label">Ruby</label>
            <ul className="tags-list">
              <li>
                <input type="checkbox" className="sub-select" id="rails" onChange={filterItems} />
                <label htmlFor="rails" className="sub-tech-label">Rails</label>
              </li>
            </ul>
          </div>

          <div id="javascript-container" className="project-tech-container">
            <input type="checkbox" className="main-select" id="javascript" onChange={filterItems} />
            <label htmlFor="javascript" className="main-tech-label">Javascript</label>
            <ul className="tags-list">
              <li>
                <input type="checkbox" className="sub-select" id="node" onChange={filterItems} />
                <label htmlFor="node" className="sub-tech-label">Node</label>
              </li>
              <li>
                <input type="checkbox" className="sub-select" id="express" onChange={filterItems} />
                <label htmlFor="express" className="sub-tech-label">Express</label>
              </li>
              <li>
                <input type="checkbox" className="sub-select" id="react" onChange={filterItems} />
                <label htmlFor="react" className="sub-tech-label">React</label>
              </li>
              <li>
                <input type="checkbox" className="sub-select" id="vue" onChange={filterItems} />
                <label htmlFor="vue" className="sub-tech-label">Vue</label>
              </li>
              <li>
                <input type="checkbox" className="sub-select" id="electron" onChange={filterItems} />
                <label htmlFor="electron" className="sub-tech-label">Electron</label>
              </li>
            </ul>
          </div>

          <div id="db-container" className="project-tech-container">
          <p id="db-text" className="main-tech-label">Databases</p>
            <ul className="tags-list">
              <li>
                <input type="checkbox" className="main-select" id="postgresql" onChange={filterItems} />
                <label htmlFor="postgresql" className="sub-tech-label">PostgreSQL</label>
              </li>
              <li>
                <input type="checkbox" className="main-select" id="mysql" onChange={filterItems} />
                <label htmlFor="mysql" className="sub-tech-label">MySQL</label>
              </li>
              <li>
                <input type="checkbox" className="main-select" id="sqlite" onChange={filterItems} />
                <label htmlFor="sqlite" className="sub-tech-label">SQLite</label>
              </li>
              <li>
                <input type="checkbox" className="main-select" id="mongodb" onChange={filterItems} />
                <label htmlFor="mongodb" className="sub-tech-label">MongoDB</label>
              </li>
              <li>
                <input type="checkbox" className="main-select" id="firestore" onChange={filterItems} />
                <label htmlFor="firestore" className="sub-tech-label">Firestore</label>
              </li>
            </ul>
          </div>

          <div id="year-container" className="project-tech-container">
            <p id="year-text" className="main-tech-label">Years</p>
            <ul className="tags-list">
              <li>
                <input type="checkbox" className="main-select" id="year-2021" onChange={filterItems} />
                <label htmlFor="year-2021" className="sub-tech-label">2021</label>
              </li>
              <li>
                <input type="checkbox" className="main-select" id="year-2022" onChange={filterItems} />
                <label htmlFor="year-2022" className="sub-tech-label">2022</label>
              </li>
              <li>
                <input type="checkbox" className="main-select" id="year-2023" onChange={filterItems} />
                <label htmlFor="year-2023" className="sub-tech-label">2023</label>
              </li>
              <li>
                <input type="checkbox" className="main-select" id="year-2024" onChange={filterItems} />
                <label htmlFor="year-2024" className="sub-tech-label">2024</label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      <div className="disclaimer">
        <h4>* Denotes a work side project; site and code unavailable.</h4>
      </div>
      <Link to="/" className="link-home">
        Back to Home
      </Link>
    </div>
  );
};

export default Projects;
