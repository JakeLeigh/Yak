import React, {Component, Fragment} from 'react';
import './Obstacles.scss';
import leafBackground from '../../assets/leafBackground.jpg';

class Obstacles extends React.Component{
  render(){
    return (
      <div className='obstacleBackground'>
        <div className='obstacleImage'>
          <img className='leafBackground' src={leafBackground} alt='background image of leaves'/>
        </div>
        <div className='obstacleContent'>
          <h3 className='obstacleTitle' data-aos="fade-up">Overcome your obstacles</h3>
          <div className='obstaclePoints' data-aos="zoom-in">
            <div>
              <h4>Increase Productivity</h4>
              <p>Give employees space in which they can focus, create and perform.</p>
            </div>
            <div>
              <h4>Offer Employees Freedom</h4>
              <p>Increase employee satisfaction, retention and attract the best talent.</p>
            </div>
            <div>
              <h4>Reduce Your Overheads</h4>
              <p>Ditch the over priced office building, and only pay for the services your employees use.</p>
            </div>
            <div>
              <h4>Expand Without Limits</h4>
              <p>As your team grows, your plan can too. Seamlessly expand your team without th eneed to move premises.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Obstacles;