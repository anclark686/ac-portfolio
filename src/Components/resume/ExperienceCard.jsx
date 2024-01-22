import React from "react";
import Card from "react-bootstrap/Card";

const ExperienceCard = ({ job }) => {
  return (
    <div className="experience-card">
      <Card>
        <Card.Header className="experience-card-header">
          {job.company}
        </Card.Header>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {job.dateRange}
          </Card.Subtitle>
          <Card.Text>{job.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceCard;
