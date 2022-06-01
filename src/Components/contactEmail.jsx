import React from 'react';
import { Form, Col, Button, Card } from 'react-bootstrap';

const initialFormData = Object.freeze({
    username: "",
    email: "",
    message: ""
  });


export const FormPage = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thanks for your message!`);
        const templateId = 'template_199uw68';
        const serviceID = "service_6omd18s";
        sendFeedback(serviceID, templateId, { from_name: formData.name, message_html: formData.message, email: formData.email })

        console.log(formData);
      };

    return (
        <div className="contactCard">
            <Card body className="col d-flex justify-content-center">
                <Form>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                        />
                    </Form.Group>
                    <Form.Group as={Col} id="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange= {handleChange} name="message" as="textarea" rows={5} />
                    </Form.Group>

                    <Button onClick={handleSubmit} variant="info" type="submit">
                        Submit
                        </Button>
                </Form >
            </Card>
        </div>

    )
}

export default FormPage;