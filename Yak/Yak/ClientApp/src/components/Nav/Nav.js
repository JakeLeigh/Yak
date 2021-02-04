import React from 'react';
import './Nav.css';

class Nav extends React.Component{
  render(){
    return (
      <header class='nav'>
        <div class='nav-wrapper'>
          <div class='nav-inner container-fluid'>
            <a href='/'>YAK</a>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav;