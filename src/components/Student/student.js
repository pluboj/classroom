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
            {props.student.studentFirstName} {props.student.studentLastName}
        </Card.Header>
        <Table>
            <tbody>
            <tr>
                <th>ID</th>
                <td>{props.student.studentId}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td><Moment format="MMM D YYYY">{props.student.studentDOB}</Moment></td>
            </tr>
            <tr>
                <td colSpan={2} className="edit">
                    <Card.Link 
                        href={`/form/${props.student.studentId}`} 
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
