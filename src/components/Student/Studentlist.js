import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/Card';
import Student from './student';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'

class Studentlist extends Component {
    render () {
        return (
            <Jumbotron>
                <Row>
                    <Student 
                        border="primary"
                        studentId="12345678"
                        studentDOB="02/02/2015"
                    />
                    <Student 
                        border="primary"
                        studentId="44400123"
                        studentDOB="05/25/2015"
                    />
                    <Student 
                        border="danger"
                        studentId="00009998"
                        studentDOB="12/01/2015"
                    />
                </Row>
            </Jumbotron>
        );
    }
}

export default Studentlist;
