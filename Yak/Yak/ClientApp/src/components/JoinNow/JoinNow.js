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
        <h2>Got a workspace? Become a part of the UK's fastest-<br />growing office network</h2>
        <button class='yakButton joinNowButton'>Sign Up</button>
      </div>
    </div>
    )
  }
}

export default JoinNow;