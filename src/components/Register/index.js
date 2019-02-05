import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { userActions } from '../../_actions';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <Form className="login-form" name="form" onSubmit={this.handleSubmit}>
                <h2>Register</h2>

                <Form.Group controlId="formGroupUsername">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter First Name" 
                        name="firstName"
                        value={user.firstName}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Last Name" 
                        name="lastName"
                        value={user.lastName}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Username" 
                        name="username"
                        value={user.username}
                        onChange={this.handleChange}
                    />
                    {submitted && !user.username &&
                        <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>
                    }
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password" 
                        name="password"
                        value={user.password}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" block>
                    Register
                </Button>
                {registering && 
                    <img src="regImage" alt="registration" />
                }
                <Link to="/login" className="btn btn-link">Cancel</Link>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
