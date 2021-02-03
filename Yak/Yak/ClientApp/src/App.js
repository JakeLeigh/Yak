import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import Home  from './components/Home';

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Route exact path='/' component={Home} />
      </Fragment>
    );
  }
}
