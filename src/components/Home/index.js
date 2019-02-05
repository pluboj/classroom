import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
}

    render () {
        const { user } = this.props;
        return (
            <div>
                <p>
                    Hi {user.firstName}!
                </p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    }
}

const connectedHomePage = connect(mapStateToProps)(HomePage);

export { connectedHomePage as HomePage };
