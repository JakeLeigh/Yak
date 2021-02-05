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
      </div>
    )
  }
}

export default Obstacles;