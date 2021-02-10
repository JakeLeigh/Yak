import React, {Component, Fragment} from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSplash from './AboutSplash/AboutSplash';
AOS.init();

class About extends Component{
  render(){
    return (
      <Fragment>
       <Nav />
       <AboutSplash />
       <Footer />
      </Fragment>
    )
  }
}

export default About;