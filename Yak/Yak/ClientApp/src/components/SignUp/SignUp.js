import React, {Component, Fragment} from 'react';
import './SignUp.scss';
import manSitting from '../../assets/man-sitting.jpg';

class SignUp extends React.Component{
  render(){
    return (
      <div className='signUpDiv'>
        <div className='signUpImageDiv'>
          <img className='manSittingImg' src={manSitting} alt='man sitting on bench'/>
        </div>
        <div className='signUpContent'>
          <h2 data-aos="fade-up">Got a workspace? Become a part of the UK's fastest-<br />growing office network</h2>
          <button className='yakButton signUpButton' data-aos="fade-up">Sign Up</button>
        </div>
      </div>
    )
  }
}

export default SignUp;