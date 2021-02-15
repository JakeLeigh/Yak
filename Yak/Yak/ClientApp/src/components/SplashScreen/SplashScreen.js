import React from 'react';
import './SplashScreen.scss';
import SplashImage from '../../assets/splashImage2.jpg';

class SplashScreen extends React.Component{
render(){
  return (
    <main className='splash'>
      <div className='section-background'>
        <img className='background-image' src={SplashImage} alt='office space with desks'/>
        </div>
        <div className='section-content'>
          <div className='splashTitle'>
            <h1 data-aos="fade-up">Making working remotely, work for you</h1>
          </div>
          <div className='splashButtons' data-aos="fade-up">
            <button className='yakButton splashButton' >I Have Spaces</button>
            <button className='yakButton splashButton' >I Need Spaces</button>
          </div>
        </div>
    </main>
  )
}
}

export default SplashScreen;