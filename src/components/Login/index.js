import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './index.css';

class Login extends Component {
    render () {
        return (
            <Form className="login-form" data-test="login-form">
                <h1>Please sign in</h1>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label data-test="label-username">Username</Form.Label>
                    <Form.Control 
                        data-test="input-username"
                        type="text" 
                        placeholder="Enter Username" 
                    />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label data-test="label-password">Password</Form.Label>
                    <Form.Control 
                        data-test="input-password" 
                        type="password" 
                        placeholder="Enter Password" 
                    />
                </Form.Group>

                <Button variant="primary" size="lg" block>
                    Sign in
                </Button>
            </Form>
        )
    }
}

export default Login;
