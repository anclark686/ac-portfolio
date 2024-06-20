import React from "react";
import Card from "react-bootstrap/Card";

const SkillsCards = () => {
  return (
    <div className="skills-cards">
      <div className="skills-card">
        <Card>
          <Card.Header className="skills-card-header">
            Programming Skills
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Python
              <ul>
                <li>Flask</li>
                <li>Django</li>
              </ul>
              JavaScript
              <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Angular 2 & AngularJS</li>
                <li>Typescript</li>
              </ul>
              Ruby
              <ul>
                <li>Rails</li>
              </ul>
              HTML / CSS
              <br />
              VBA / .NET
              <br />
              Kotlin / Java
              <br />
              Databases:
              <ul>
                <li>SQL: MySQL, PostgreSQL</li>
                <li>NoSQL: MongoDB, Firestore</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="minor-skills">
        <div className="skills-card">
          <Card>
            <Card.Header className="experience-card-header">
              Technical Skills
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Software Testing
                <br />
                Deployment - CI/CD
                <br />
                Jira Ticketing Systems
                <br />
                Amazon Web Services
                <br />
                Technical Support & Troubleshooting
                <br />
                Data Entry & Analysis
                <br />
                Microsoft Office Suite
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="skills-card">
          <Card>
            <Card.Header className="experience-card-header">
              Soft Skills
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Agile Practices
                <br />
                Team Leadership
                <br />
                Interpersonal Communication
                <br />
                Staff Training
                <br />
                Staff Supervision
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsCards;
