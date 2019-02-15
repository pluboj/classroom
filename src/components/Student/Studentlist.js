import React, { Component } from 'react';
import Student from './student';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'

const data = [
    {
        studentId : 12345678,
        studentName : 'Martin Smith',
        studentDOB : '02/02/2015',
        studentGender : 'M'
    },
    {
        studentId : 11122233,
        studentName : 'Richard Crown',
        studentDOB : '12/08/2015',
        studentGender : 'M'
    },
    {
        studentId : 10005600,
        studentName : 'Rebeca Bower',
        studentDOB : '06/01/2015',
        studentGender : 'F'
    },
    {
        studentId : 12345678,
        studentName : 'Martin Smith',
        studentDOB : '02/02/2015',
        studentGender : 'M'
    },
];

class Studentlist extends Component {
    state = {
        students : []
    };

    componentDidMount() {
        this.setState({
            students : data
        });
    }

    buidLayout = () => {
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
               {this.buidLayout()}
            </Jumbotron>
        );
    }
}

export default Studentlist;
