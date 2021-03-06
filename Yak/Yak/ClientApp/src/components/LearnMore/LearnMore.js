import React, {Component, Fragment} from 'react';
import './LearnMore.scss';
import LadyWalking from '../../assets/ladyWalking.jpeg';

class LearnMore extends React.Component{
  render(){
    return (
      <div className='LearnMoreContainer'>
        <div className='learnMoreDiv'>
          <div className='container learnMoreContent'>
            <h2 className='learnMoreTitle' data-aos="zoom-in">We're here to help you thrive</h2>
            <p className='learnMoreText' data-aos="zoom-in">The remote working revolution has arrived, but it’s okay if video meetings from the spare room, cupboard or dining table aren’t working for your company. Everyone deserves to work from a space that works for them, give your employees the freedom they have been enjoying, whilst you benefit from their increased productivity.</p>
            <button className='yakButton joinButton' data-aos="zoom-in">Learn More</button>
          </div>
          <div>
            <img src={LadyWalking} className='LearnMoreImage' data-aos="zoom-in" alt='woman walking down corridor'/>
          </div>
        </div>
      </div>
    )
  }
}

export default LearnMore;