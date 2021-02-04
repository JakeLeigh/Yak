import React from 'react';
import './Nav.css';

class Nav extends React.Component{
  render(){
    return (
      <header className='nav'>
        <div className='nav-wrapper'>
          <div className='nav-inner container-fluid'>
            <a href='/' class='navTitle'>YAK</a>
            <a>About</a>
            <button className='yakButton joinButton'>Join Now</button>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav;