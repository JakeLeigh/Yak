import React from 'react';
import './Help.scss';

class Help extends React.Component{
  render(){
    return (
      <div className='helpDiv'>
        <h1 data-aos='fade-up' className='helpTitle'>We can help.</h1>
        <div data-aos='fade-up' className='helpPoints'>
          <div>
            <h4>Bring your ideas to life</h4>
            <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.</p>
          </div>
          <div>
            <h4>Build your confidence</h4>
            <p>It can be intimidating to start your own business. Learn to present yourself and your concepts with confidence.</p>
          </div>
          <div>
            <h4>Expand your potential</h4>
            <p>We want to help you meet your maximum potential, whether it’s helping you building brand loyalty or expanding your business offerings.</p>
          </div>
        </div>
        <h2 data-aos='fade-up' className='exploreTitle'>Explore memberships &amp; className packs </h2>
      </div>
    )
  }
}

export default Help;