import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Classroom</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default App;
