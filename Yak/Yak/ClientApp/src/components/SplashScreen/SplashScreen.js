import React from 'react';
import './SplashScreen.scss';
import SplashImage from '../../assets/officeImage.jpg';

class SplashScreen extends React.Component{
render(){
  return (
    <main class='splash'>
      <div class='section-background'>
        <img class='background-image' src={SplashImage} />
        </div>
        <div class='section-content'>
          <div class='splashTitle'>
            <h1 data-aos="fade-up">The freedom to work productively</h1>
          </div>
          <div class='splashButtons'>
            <button class='yakButton splashButton' data-aos="fade-up">I'm an Employer</button>
            <button class='yakButton splashButton' data-aos="fade-up">I'm a Landlord</button>
          </div>
        </div>
    </main>
  )
}
}

export default SplashScreen;