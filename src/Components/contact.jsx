import React from "react";
// import { Form, Col, Button, Card } from 'react-bootstrap';
import FormPage from "./contactEmail";


  
const Contact = () => {
  return (
    <div>
      <h1 className="header">Contact Me</h1>
      <a href="https://www.linkedin.com/in/anclark686/" target="_blank" rel="noreferrer">LinkedIn</a>
      <br />
      {/* <a href="mailto:anclark686@gmail.com" target="_blank" rel="noreferrer">Email Me</a> */}

      <FormPage />

      {/* <div className="contactCard">
        <Card body className="col d-flex justify-content-center">
          <Form>
              <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control name="name" type="name" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter email"
                  />
              </Form.Group>
              <Form.Group as={Col} id="formGridQuery">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control name="message" as="textarea" rows={5} />
              </Form.Group>

              <Button variant="info" type="submit">
                  Submit
                  </Button>
          </Form >
        </Card>
      </div> */}
    </div>
  );
};
  
export default Contact;