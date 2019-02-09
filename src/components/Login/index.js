import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { userActions } from '../../_actions';
import './index.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { target: { name, value } } = e;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render () {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <Form className="login-form" data-test="login-form" onSubmit={e => this.handleSubmit(e)}>
                <h1>Please sign in</h1>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label data-test="label-username">Username</Form.Label>
                    <Form.Control 
                        data-test="input-username"
                        type="text" 
                        placeholder="Enter Username" 
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    {submitted && !username &&
                        <div className="lbl-error">Username is required</div>
                    }
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label data-test="label-password">Password</Form.Label>
                    <Form.Control 
                        data-test="input-password" 
                        type="password" 
                        placeholder="Enter Password" 
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    {submitted && !password &&
                        <div className="lbl-error">Password is required</div>
                    }
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" block>
                    Sign in
                </Button>
                {loggingIn &&
                    <FontAwesomeIcon icon={['far', 'hourglass']} />}
                <Link to="/register" className="btn btn-link">Register</Link>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };
