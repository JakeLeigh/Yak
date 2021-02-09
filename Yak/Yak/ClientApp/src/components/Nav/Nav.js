import React from 'react';
import './Nav.scss';

class Nav extends React.Component{
  render(){
    return (
      <nav className='nav'>
        <div className='nav-wrapper'>
          <div className='nav-inner container-fluid'>
            <a href='/' class='navTitle' data-aos="fade-up">YAK</a>
            <a class='navAbout' data-aos="fade-up">About</a>
            <button className='yakButton joinButton' data-aos="fade-up">Join Now</button>
          </div>
        </div>
        <div class='nav--collapsed'>
          <div class='burgerMenu'></div>
        </div>
      </nav>
    )
  }
}

export default Nav;