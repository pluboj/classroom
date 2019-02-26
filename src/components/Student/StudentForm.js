import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const usStates = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
    'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois', 
]

class StudentForm extends Component {

    render () {
        return (
            <Container>
                 <h2>Student Form</h2>
                 <br/>
                 <Form>
                    <Form.Row>
                        <Form.Group as={Col}  md={4} controlId="formGridStudentId">
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control name="sid" placeholder="10000000" />
                        </Form.Group>
                    </Form.Row>
                     <hr/>
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

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address1" placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control name="address2" placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" name="state">
                                <option>Choose...</option>
                                {usStates.map(state => <option key={state} value={state}>{state}</option>)}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="zip"/>
                        </Form.Group>
                    </Form.Row>
                    <hr/>

                    <Form.Row>
                        <Form.Group as={Col}  md={4} controlId="formGridDOB">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control name="dob" placeholder="01/01/2000" />
                        </Form.Group>
                    </Form.Row>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Col md={2}>
                                <Form.Check inline label="Male" name="studentGender" type="radio" id="male" />
                                <Form.Check inline label="Female" name="studentGender" type="radio" id="female" />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Row>
                        <Form.Group id="formGridAllergiesCheckbox">
                            <Col md={2}>
                                <Form.Check type="checkbox" name="allergies" label="Allergies" />
                            </Col>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group id="formGridDisabilitiesCheckbox">
                            <Col md={2}>
                                <Form.Check type="checkbox" name="dasability" label="Disability" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <hr/>
                    <h4>Parent / Guardian</h4>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridParentFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstNameParent" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridParentLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastNameParent" placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} md={4} controlId="formGridPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phone"/>
                        </Form.Group>
                    </Form.Row>

                    <hr/>
                    <Form.Row>
                        <Button as={Col} variant="secondary" size="lg" type="reset">
                            Reset
                        </Button>
                        <Button as={Col} variant="success" size="lg" type="submit">
                            Submit
                        </Button>
                        <Button as={Col} variant="danger" size="lg" >
                            Cancel
                        </Button>
                    </Form.Row>
                    
                </Form>
            </Container>
            
        )
    }
}

export default StudentForm;