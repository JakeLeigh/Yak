import React from 'react';
import './AboutSplash.scss';
import aboutSplashImg from '../../assets/splashImage1.jpg';

class AboutSplash extends React.Component{
render(){
  return (
    <main className='splash'>
      <div className='section-background'>
        <img className='background-image' src={aboutSplashImg} alt='office space'/>
        </div>
        <div className='aboutSection-content'>
          <div className='aboutSplashTitle'>
            <h1 data-aos="fade-up">We’re passionate about helping you grow and <u>make an impact.</u></h1>
          </div>
        </div>
    </main>
  )
}
}

export default AboutSplash;