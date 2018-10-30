import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Home from './Home.js';
import Navigation from './Navigation.js';
import RegistrationForm from './Auth/RegistrationForm.js';
import Login from './Auth/Login.js';
import Protected from './Protected.js';
import '../CSS/App.css';
import config from '../config.js';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
          onAuthRequired={onAuthRequired}
        >
          <main>
            <Route path='/' component={Navigation} />
            <Route path='/' exact={true} component={Home} />
            <Route path='/login' render={() => <Login baseUrl={config.url} />} />
            <Route path="/register" component={RegistrationForm} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
            <SecureRoute exact={true} path='/protected' component={Protected} />
          </main>
        </Security>
      </Router>
    );
  }
}

export default App;
