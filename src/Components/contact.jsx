import React from "react";
import FormPage from "./contactEmail";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-content main">
      <h1 className="header">Contact Me</h1>
      <a
        className="outside-link"
        href="https://www.linkedin.com/in/anclark686/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <br />

      <FormPage />
      <Link to="/" className="link-home">Back to Home</Link>
    </div>
  );
};

export default Contact;
