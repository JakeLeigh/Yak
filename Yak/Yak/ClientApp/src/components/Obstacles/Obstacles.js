import React, {Component, Fragment} from 'react';
import './Obstacles.css';
import leafBackground from '../../assets/leafBackground.jpg';

class Obstacles extends React.Component{
  render(){
    return (
      <div class='obstacleBackground'>
        <div class='obstacleImage'>
          <img class='leafBackground' src={leafBackground} />
        </div>
        <div class='obstacleContent'>
          <h3 class='obstacleTitle'>Overcome your obstacles</h3>
          <div class='obstaclePoints'>
            <div>
              <h4>Increase Popularity</h4>
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