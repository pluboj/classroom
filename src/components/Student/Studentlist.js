import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/Card';
import Student from './student';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Studentlist extends Component {
    render () {
        return (
            <Jumbotron>
                <Student />
                <Student />
                <Student />
            </Jumbotron>
        );
    }
}

export default Studentlist;
