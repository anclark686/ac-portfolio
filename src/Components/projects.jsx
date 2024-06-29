import React, { useState } from "react";
import {
  personalProjects,
  beginnerProjects,
  adaProjects,
  adaBeginnerProjects,
  workProjects,
} from "./projects/ProjectList";
import ProjectCard from "./projects/ProjectCard";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Filters from "./projects/filters";

const Projects = () => {
  const [filterArr, setFilterArr] = useState([]);
  const [filteredPersonal, setFilteredPersonal] = useState(personalProjects);
  const [filteredBeginner, setFilteredBeginner] = useState(beginnerProjects);
  const [filteredAda, setFilteredAda] = useState(adaProjects);
  const [filteredAdaBeginner, setFilteredAdaBeginner] = useState(adaBeginnerProjects);
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
    setFilteredBeginner(filterItems(e, beginnerProjects, filters));
    setFilteredAda(filterItems(e, adaProjects, filters));
    setFilteredAdaBeginner(filterItems(e, adaBeginnerProjects, filters));
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

      <Filters setFilteredProjects={setFilteredProjects} />

      <div className="project-container">
        <h4 className="project-header">Personal Projects</h4>
        <p>(Expand fields to view more)</p>
        <div className="container">
        <Accordion className="project-accordion" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Intermediate/Advanced & Self-Guided Projects</Accordion.Header>
            <Accordion.Body>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Beginner/Tutorial Projects</Accordion.Header>
            <Accordion.Body>
              <div className="container">
                {filteredBeginner.length !== 0 ? (
                  <>
                    {filteredBeginner.map((project, i) => (
                      <ProjectCard key={i} project={project} />
                    ))}
                  </>
                ) : (
                  <p>No projects found. Try changing your filters.</p>
                )}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        <h4 className="project-header">Ada Developers Academy Projects</h4>
        <p>(Expand fields to view more)</p>
        <div className="container">
          <Accordion className="project-accordion" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Intermediate/Advanced Projects
              </Accordion.Header>
              <Accordion.Body>
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
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Beginner/Guided Projects</Accordion.Header>
              <Accordion.Body>
                <div className="container">
                  {filteredAdaBeginner.length !== 0 ? (
                    <>
                      {filteredAdaBeginner.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                      ))}
                    </>
                  ) : (
                    <p>No projects found. Try changing your filters.</p>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
