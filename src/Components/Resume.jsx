import React from "react";
import ExperienceCard from "./resume/ExperienceCard";
import jobs from "./resume/ExperienceList";
import EducationCard from "./resume/EducationCard";
import education from "./resume/EducationList";
import SkillsCards from "./resume/SkillsCards";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume-content main">
      <h1 className="header">Resume</h1>
      <a
        className="outside-link"
        href="https://www.linkedin.com/in/anclark686/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <br />
      <a
        className="resume-download"
        href="https://ancportfoliobucket.s3.amazonaws.com/A_Clark_Resume.pdf"
        download="A_Clark_Resume.pdf"
      >
        Download PDF
      </a>

      <h3 className="resume-subheader">Skills</h3>
      <SkillsCards />

      <h3 className="resume-subheader">Experience</h3>
      {jobs.map((job, i) => (
        <ExperienceCard key={i} job={job} />
      ))}

      <h3 className="resume-subheader">Education</h3>
      <div className="education-cards">
        {education.map((school, i) => (
          <EducationCard key={i} education={school} />
        ))}
      </div>
      <Link to="/" className="link-home">Back to Home</Link>
    </div>
  );
};

export default Resume;
