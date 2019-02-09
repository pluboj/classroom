import React, { Component } from 'react';
import { connect } from 'react-redux';
import Subbar from '../../shared/Subbar/Subbar';
import Studentlist from '../Student/Studentlist';

import { userActions } from '../../_actions';

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render () {
        const { user } = this.props;
        return (
            <div>
                <Subbar userName={user.firstName}/>
                <Studentlist></Studentlist>
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
