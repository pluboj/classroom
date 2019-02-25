import React, { Component } from 'react';
import Student from './student';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import './studentlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Background from '../../images/classroom-lg.jpg';
import students from '../../data/data-students.json';

class Studentlist extends Component {
    state = {
        students : []
    };

    componentDidMount() {
        this.setState({
            students : students
        });
    }

    buildLayout = () => {
        let studentList = [];
        let row = [];
        let n = 0;
         while( n < this.state.students.length ){
            let student = this.state.students[n];
            row.push(
                <Student 
                    key={'st-'+n}
                    border={`${student.studentGender === 'M' ? 'primary' : 'danger'}`}
                    studentId={student.studentId}
                    studentDOB={student.studentDOB}
                    studentName={student.studentName}
                />
            )
            if ((n + 1) % 8 === 0 || n === this.state.students.length - 1) {
                studentList.push(<Row key={'row-'+n}>{row}</Row>);
                row = [];
            } 
            n++;
        };
        return studentList;   
    }

    render () {
        const listStyle = {
            backgroundImage: `url(${Background})`,
        }
        return (
            <Jumbotron style={listStyle} className="panel">
                {this.buildLayout()}
                <Link to="/form">
                    <Button variant="secondary" size="lg" style={{color: 'wheat'}}>
                        <FontAwesomeIcon icon={['far', 'plus-square']} /> Add student
                    </Button>
                </Link>
            </Jumbotron>
        );
    }
}

export default Studentlist;
