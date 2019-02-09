import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class Subbar extends Component {
    render () {
        const { userName } = this.props;
        return (
            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item style={{'marginRight': '10px'}}>
                    <Nav.Link eventKey="disabled" disabled>Hi {userName}!</Nav.Link>
                </Nav.Item>    

                <Nav.Item data-test="nav-item">
                    <Nav.Link href="/login"><strong>Logout</strong></Nav.Link>
                </Nav.Item> 

                <Nav.Item data-test="nav-item">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>

                <Nav.Item data-test="nav-item">
                    <Nav.Link href="/home">Tab 1</Nav.Link>
                </Nav.Item>

                <Nav.Item data-test="nav-item">
                    <Nav.Link href="/home">Tab 2</Nav.Link>
                </Nav.Item>

                <Nav.Item data-test="nav-item">
                    <Nav.Link href="/home">Tab 3</Nav.Link>
                </Nav.Item>

                <Nav.Item data-test="nav-item">
                    <Nav.Link href="/home">Tab 4</Nav.Link>
                </Nav.Item>
            
            </Nav>
        );
    }
}

export default Subbar;
