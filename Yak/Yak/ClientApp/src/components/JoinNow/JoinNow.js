import React from 'react';
import './JoinNow.scss';
import manSitting2 from '../../assets/man-sitting2.jpg';

class JoinNow extends React.Component{
  render(){
    return (
      <div className='joinNowDiv'>
      <div className='joinNowImageDiv'>
        <img className='manSittingImg2' src={manSitting2} alt='man sitting at desk'/>
      </div>
      <div className='joinNowContent'>
        <h2 data-aos="fade-up">Let’s kickstart your workspace revolution </h2>
        <h4 data-aos="fade-up">We'll be with you every step of the way.</h4>
        <button className='yakButton joinNowButton' data-aos="fade-up">Join Now</button>
      </div>
    </div>
    )
  }
}

export default JoinNow;