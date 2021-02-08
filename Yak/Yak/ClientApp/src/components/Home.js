import React, {Component, Fragment} from 'react';
import LearnMore from './LearnMore/LearnMore';
import Nav from './Nav/Nav';
import Obstacles from './Obstacles/Obstacles';
import Pricing from './Pricing/Pricing';
import SignUp from './SignUp/SignUp';
import SplashScreen from  './SplashScreen/SplashScreen';
import JoinNow from './JoinNow/JoinNow';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class Home extends Component{
  render(){
    return (
      <Fragment>
       <Nav />
       <SplashScreen />
       <LearnMore />
       <Obstacles />
       <Pricing />
       <SignUp />
       <JoinNow />
       <Footer />
      </Fragment>
    )
  }
}

export default Home;