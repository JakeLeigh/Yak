import React from 'react';
import './SplashScreen.css';
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
            <h1>The freedom to work productively</h1>
          </div>
          <div class='splashButtons'>
            <button class='yakButton splashButton'>I'm an Employer</button>
            <button class='yakButton splashButton'>I'm a Landlord</button>
          </div>
        </div>
    </main>
  )
}
}

export default SplashScreen;