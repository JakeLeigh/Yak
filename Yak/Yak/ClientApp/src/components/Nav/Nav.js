import React, { Fragment } from 'react';
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
  <Fragment>
    <nav className='nav showOnDesktop'>
      <div className='nav-wrapper'>
        <div className='nav-inner container-fluid'>
          <a href='/' class='navTitle' data-aos="fade-up">YAK</a>
          <a  href='/about' class='navAbout' data-aos="fade-up">About</a>
          <button className='yakButton joinButton' data-aos="fade-up">Join Now</button>
        </div>
      </div>
    </nav>
    <nav class="Navigation showOnMobile">
      <a href='/' class='navTitle' data-aos="fade-up">YAK</a>
      <div class={this.state.toggleMobileNav===true ? 'Overlay--on Overlay' : 'Overlay'}>
        <ul class="Navigation-list">
          <li><a href='/about' class='navAbout' data-aos="fade-up">About</a></li>
          <li><button className='yakButtonMobile joinButton' data-aos="fade-up">Join Now</button></li>
        </ul>
      </div>
      <section class="Navigation--collapsed" onClick={this.toggleMenu}>
        <div class={this.state.toggleMobileNav===true ? 'BurgerMenu--on BurgerMenu' : 'BurgerMenu'}></div>
      </section>
    </nav>
  </Fragment>
)
}
}

export default Nav;