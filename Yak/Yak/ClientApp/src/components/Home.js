import React, {Component, Fragment} from 'react';
import Nav from './Nav/Nav';
import SplashScreen from  './SplashScreen/SplashScreen';

class Home extends Component{
  render(){
    return (
      <Fragment>
       <Nav />
       <SplashScreen />
      </Fragment>
    )
  }
}

export default Home;