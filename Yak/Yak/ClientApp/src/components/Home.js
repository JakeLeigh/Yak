import React, {Component, Fragment} from 'react';
import LearnMore from './LearnMore/LearnMore';
import Nav from './Nav/Nav';
import SplashScreen from  './SplashScreen/SplashScreen';

class Home extends Component{
  render(){
    return (
      <Fragment>
       <Nav />
       <SplashScreen />
       <LearnMore />
      </Fragment>
    )
  }
}

export default Home;