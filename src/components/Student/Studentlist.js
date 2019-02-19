import React, { Component } from 'react';
import Student from './student';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        return (
            <Jumbotron>
               {this.buildLayout()}
               <Button variant="secondary" size="lg">
                    <FontAwesomeIcon icon={['far', 'plus-square']} /> Add student
               </Button>
            </Jumbotron>
        );
    }
}

export default Studentlist;
