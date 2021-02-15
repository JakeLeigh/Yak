import React from 'react';
import './SplashScreen.scss';
import SplashImage from '../../assets/splashImage2.jpg';

class SplashScreen extends React.Component{
render(){
  return (
    <main class='splash'>
      <div class='section-background'>
        <img class='background-image' src={SplashImage} />
        </div>
        <div class='section-content'>
          <div class='splashTitle'>
            <h1 data-aos="fade-up">Making working remotely, work for you</h1>
          </div>
          <div class='splashButtons' data-aos="fade-up">
            <button class='yakButton splashButton' >I Have Spaces</button>
            <button class='yakButton splashButton' >I Need Spaces</button>
          </div>
        </div>
    </main>
  )
}
}

export default SplashScreen;