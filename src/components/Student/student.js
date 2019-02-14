import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import './student.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Student = props => (
    <Card 
        border={props.border}    
        className="Student"
        data-test="card-student"
    >
        <Card.Header className="header">Joe Test</Card.Header>
        <Table>
            <tr>
                <th>ID</th>
                <td>{props.studentId}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td>{props.studentDOB}</td>
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
        </Table>
    </Card>
)

export default Student;
