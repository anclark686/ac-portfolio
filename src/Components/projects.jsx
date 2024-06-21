import React, { useState } from "react";
import {
  personalProjects,
  adaProjects,
  workProjects,
} from "./projects/ProjectList";
import ProjectCard from "./projects/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filterArr, setFilterArr] = useState([]);
  const [filteredPersonal, setFilteredPersonal] = useState(personalProjects);
  const [filteredAda, setFilteredAda] = useState(adaProjects);
  const [filteredWork, setFilteredWork] = useState(workProjects);

  const addToFilterArr = (e) => {
    let tempArr;

    if (e.target.checked) {
      if (!filterArr.includes(e.target.id)) {
        tempArr = [...filterArr, e.target.id];

        setFilterArr(tempArr);
      }
    } else {
      tempArr = filterArr.filter((x) => x !== e.target.id);

      setFilterArr(tempArr);
    }

    return tempArr;
  };

  const filterItems = (e, ogProjects, filters) => {
    if (filters.length === 0) {
      return ogProjects;
    }

    const tempFilteredProjects = [];

    ogProjects.forEach((project) => {
      filters.forEach((filter) => {
        if (
          project.tags.includes(filter) &&
          !tempFilteredProjects.includes(project)
        ) {
          tempFilteredProjects.push(project);
        }
      });
    });

    return tempFilteredProjects;
  };

  const setFilteredProjects = (e) => {
    let filters = addToFilterArr(e);

    setFilteredPersonal(filterItems(e, personalProjects, filters));
    setFilteredAda(filterItems(e, adaProjects, filters));
    setFilteredWork(filterItems(e, workProjects, filters));
  };

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
            <input
              type="checkbox"
              className="main-select"
              id="python"
              onChange={setFilteredProjects}
            />
            <label htmlFor="python" className="main-tech-label">
              Python
            </label>
            <ul className="tags-list">
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="flask"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="flask" className="sub-tech-label">
                  Flask
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="django"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="django" className="sub-tech-label">
                  Django
                </label>
              </li>
            </ul>
            <input
              type="checkbox"
              className="main-select"
              id="ruby"
              onChange={setFilteredProjects}
            />
            <label htmlFor="ruby" className="main-tech-label">
              Ruby
            </label>
            <ul className="tags-list">
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="rails"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="rails" className="sub-tech-label">
                  Rails
                </label>
              </li>
            </ul>
          </div>

          <div id="javascript-container" className="project-tech-container">
            <input
              type="checkbox"
              className="main-select"
              id="javascript"
              onChange={setFilteredProjects}
            />
            <label htmlFor="javascript" className="main-tech-label">
              Javascript
            </label>
            <ul className="tags-list">
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="node"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="node" className="sub-tech-label">
                  Node
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="express"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="express" className="sub-tech-label">
                  Express
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="react"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="react" className="sub-tech-label">
                  React
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="vue"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="vue" className="sub-tech-label">
                  Vue
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sub-select"
                  id="electron"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="electron" className="sub-tech-label">
                  Electron
                </label>
              </li>
            </ul>
          </div>

          <div id="db-container" className="project-tech-container">
            <p id="db-text" className="main-tech-label">
              Databases
            </p>
            <ul className="tags-list">
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="postgresql"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="postgresql" className="sub-tech-label">
                  PostgreSQL
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="mysql"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="mysql" className="sub-tech-label">
                  MySQL
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="sqlite"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="sqlite" className="sub-tech-label">
                  SQLite
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="mongodb"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="mongodb" className="sub-tech-label">
                  MongoDB
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="firestore"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="firestore" className="sub-tech-label">
                  Firestore
                </label>
              </li>
            </ul>
          </div>

          <div id="year-container" className="project-tech-container">
            <p id="year-text" className="main-tech-label">
              Years
            </p>
            <ul className="tags-list">
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="year-2021"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="year-2021" className="sub-tech-label">
                  2021
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="year-2022"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="year-2022" className="sub-tech-label">
                  2022
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="year-2023"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="year-2023" className="sub-tech-label">
                  2023
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="main-select"
                  id="year-2024"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="year-2024" className="sub-tech-label">
                  2024
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project-container">
        <h4 className="project-header">Personal Projects</h4>
        <div className="container">
          {filteredPersonal.length !== 0 ? (
            <>
              {filteredPersonal.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </>
          ) : (
            <p>No projects found. Try changing your filters.</p>
          )}
        </div>

        <h4 className="project-header">Ada Developers Academy Projects</h4>
        <div className="container">
          {filteredAda.length !== 0 ? (
            <>
              {filteredAda.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </>
          ) : (
            <p>No projects found. Try changing your filters.</p>
          )}
        </div>

        <h4 className="project-header">
          Work Side Projects (Code and Site Unavailable)
        </h4>
        <div className="container">
          {filteredWork.length !== 0 ? (
            <>
              {filteredWork.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </>
          ) : (
            <p>No projects found. Try changing your filters.</p>
          )}
        </div>
      </div>

      <Link to="/" className="link-home">
        Back to Home
      </Link>
    </div>
  );
};

export default Projects;
