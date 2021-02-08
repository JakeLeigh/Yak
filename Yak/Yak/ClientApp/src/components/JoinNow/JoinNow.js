import React from 'react';
import './JoinNow.css';
import manSitting2 from '../../assets/man-sitting2.jpg';

class JoinNow extends React.Component{
  render(){
    return (
      <div class='joinNowDiv'>
      <div class='joinNowImageDiv'>
        <img class='manSittingImg2' src={manSitting2} />
      </div>
      <div class='joinNowContent'>
        <h2>Let’s kickstart your workspace revolution </h2>
        <h4>We'll be with you every step of the way.</h4>
        <button class='yakButton joinNowButton'>Join Now</button>
      </div>
    </div>
    )
  }
}

export default JoinNow;