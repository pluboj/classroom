import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import { PrivateRoute } from './components/PrivateRoute';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Content from './shared/Content/Content';
import Login from './components/Login';
import HomePage from './components/Home';
import RegisterPage from './components/Register';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

library.add(faCopyright);

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="App">
        <Header />
        {alert.message && 
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <Content>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={RegisterPage} />
          </Content>
        </Router>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  }
}

const connectedApp = connect(mapStateToProps)(App);

export { connectedApp as App };
