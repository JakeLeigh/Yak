import React from 'react';
import './Nav.scss';

class Nav extends React.Component{
  state = { 
    toggleMobileNav: false
  };

  toggleMenu = () => {
    console.log('got here');
    this.setState({
      toggleMobileNav: !this.state.toggleMobileNav
    });
  }
render(){

  return (
    /*<nav className='nav'>
      <div className='nav-wrapper'>
        <div className='nav-inner container-fluid'>
          <a href='/' class='navTitle' data-aos="fade-up">YAK</a>
          <a class='navAbout' data-aos="fade-up">About</a>
          <button className='yakButton joinButton' data-aos="fade-up">Join Now</button>
        </div>
      </div>
    </nav>*/
    <nav class="Navigation">
<h2 class="Navigation-smallLogo">PLAY ULTI</h2>
<div class={this.state.toggleMobileNav===true ? 'Overlay--on Overlay' : 'Overlay'}>
  <ul class="Navigation-list">
    <li><a href="#">PLAY</a></li>
    <li><a href="#">TEACH</a></li>
    <li><a href="#">SPIRIT</a></li>
    <li><a href="#">GIVE</a></li>
  </ul>
</div>
<section class="Navigation--collapsed" onClick={this.toggleMenu}>
  <div class={this.state.toggleMobileNav===true ? 'BurgerMenu--on BurgerMenu' : 'BurgerMenu'}></div>
</section>
</nav>
  )
}
}

export default Nav;