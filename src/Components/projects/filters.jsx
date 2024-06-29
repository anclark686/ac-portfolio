import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Filters = ({ setFilteredProjects }) => {
  return (
    <div className="filer-container">
      <h4>Filters</h4>

      <Accordion className="project-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Backend Technlogies</Accordion.Header>
          <Accordion.Body>
            <div className="tech-checkboxes">
              <div id="python-container" className="project-tech-container">
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
              </div>
              <div id="ruby-container">
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
              <div id="node-container">
                <input
                      type="checkbox"
                      className="sub-select"
                      id="node"
                      onChange={setFilteredProjects}
                    />
                    <label htmlFor="node" className="main-tech-label">
                      Node.js
                    </label>
                <ul className="tags-list">
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
                </ul>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Frontend Technologies</Accordion.Header>
          <Accordion.Body>
            <div className="tech-checkboxes">
              <div id="javascript-container" className="project-tech-container">
                <input
                  type="checkbox"
                  className="main-select"
                  id="javascript"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="javascript" className="main-tech-label">
                  JavaScript
                </label>
                <ul className="tags-list">
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
              <div id="javascript-container" className="project-tech-container">
                <input
                  type="checkbox"
                  className="main-select"
                  id="templates"
                  onChange={setFilteredProjects}
                />
                <label htmlFor="javascript" className="main-tech-label">
                  Templates
                </label>
                <ul className="tags-list">
                  <li>
                    <input
                      type="checkbox"
                      className="sub-select"
                      id="flask-templates"
                      onChange={setFilteredProjects}
                    />
                    <label htmlFor="react" className="sub-tech-label">
                      Flask
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="sub-select"
                      id="django-templates"
                      onChange={setFilteredProjects}
                    />
                    <label htmlFor="vue" className="sub-tech-label">
                      Django
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="sub-select"
                      id="rails-templates"
                      onChange={setFilteredProjects}
                    />
                    <label htmlFor="electron" className="sub-tech-label">
                      Rails
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Databases</Accordion.Header>
          <Accordion.Body>
            <div className="tech-checkboxes">
              <div id="db-container" className="project-tech-container">
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="postgresql"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="postgresql" className="sub-tech-label">
                    PostgreSQL
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="mysql"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="mysql" className="sub-tech-label">
                    MySQL
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="sqlite"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="sqlite" className="sub-tech-label">
                    SQLite
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="mongodb"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="mongodb" className="sub-tech-label">
                    MongoDB
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="firestore"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="firestore" className="sub-tech-label">
                    Firestore
                  </label>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Years</Accordion.Header>
          <Accordion.Body>
            <div className="tech-checkboxes">
              <div id="year-container" className="project-tech-container">
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="year-2024"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="year-2024" className="sub-tech-label">
                    2024
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="year-2023"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="year-2023" className="sub-tech-label">
                    2023
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="year-2022"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="year-2022" className="sub-tech-label">
                    2022
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="main-select"
                    id="year-2021"
                    onChange={setFilteredProjects}
                  />
                  <label htmlFor="year-2021" className="sub-tech-label">
                    2021
                  </label>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Filters;
