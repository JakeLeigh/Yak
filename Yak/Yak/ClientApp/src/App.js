import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import About from './components/About';
import Home  from './components/Home';
import './global.css';

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Fragment>
    );
  }
}
