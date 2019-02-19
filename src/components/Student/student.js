import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';

import './student.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Student = props => (
    <Card 
        border={props.border}    
        className="Student"
        data-test="card-student"
    >
        <Card.Header 
            className="header" 
            style={{backgroundColor : props.border === 'primary' ? 'lightblue' : 'lightcoral'}}
        >
            {props.studentName}
        </Card.Header>
        <Table>
            <tbody>
            <tr>
                <th>ID</th>
                <td>{props.studentId}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td><Moment format="MMM D YYYY">{props.studentDOB}</Moment></td>
            </tr>
            <tr>
                <td colSpan={2} className="edit">
                    <Card.Link 
                        href="#"
                    >
                        <FontAwesomeIcon icon={['far', 'edit']} size="lg" />
                    </Card.Link>
                </td>
            </tr>
            </tbody>
        </Table>
    </Card>
)

export default Student;
