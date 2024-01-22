import React from "react";
import Card from "react-bootstrap/Card";

const EducationCard = ({ education }) => {
  return (
    <div className="education-card">
      <Card>
        <Card.Header className="education-card-header">
          {education.school}
        </Card.Header>
        <Card.Body>
          <Card.Title>{education.degree}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {education.date}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EducationCard;
