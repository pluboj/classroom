import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class StudentForm extends Component {

    render () {
        return (
            <Container>
                 <h2>Student Form</h2>
                 <br/>
                 <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
            
        )
    }
}

export default StudentForm;