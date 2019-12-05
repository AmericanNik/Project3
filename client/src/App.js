import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Graph from './components/graph/graph';
import Logs from './components/auth/Logs';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        []{' '}
      </Switch>
      <Route exact path='/logs' component={Logs} />
      <Route exact path='/graph' component={Graph} />
    </Fragment>
  </Router>
);

export default App;
