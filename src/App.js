import React, { Component } from 'react';
import './App.css';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Content from './shared/Content/Content';
import Login from './components/Login/index';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

library.add(faCopyright);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Content>
          <Login />
        </Content>

        <Footer />
      </div>
    );
  }
}

export default App;
