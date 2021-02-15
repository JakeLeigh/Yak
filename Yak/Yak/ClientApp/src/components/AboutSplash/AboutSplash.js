import React from 'react';
import './AboutSplash.scss';
import aboutSplashImg from '../../assets/splashImage1.jpg';

class AboutSplash extends React.Component{
render(){
  return (
    <main class='splash'>
      <div class='section-background'>
        <img class='background-image' src={aboutSplashImg} />
        </div>
        <div class='aboutSection-content'>
          <div class='aboutSplashTitle'>
            <h1 data-aos="fade-up">We’re passionate about helping you grow and <u>make an impact.</u></h1>
          </div>
        </div>
    </main>
  )
}
}

export default AboutSplash;