import React, { Fragment } from 'react';
import './Nav.scss';
import YakLogoText from '../../assets/yakLogoText.png';

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
          <a href='/' className='navTitle' data-aos="fade-up">
            <img src={YakLogoText} className='yakLogo' alt='yak logo'/>
          </a>
          <a  href='/about' className='navAbout' data-aos="fade-up">About</a>
          <button className='yakButton joinButton' data-aos="fade-up">Join Now</button>
        </div>
      </div>
    </nav>
    <nav className="Navigation showOnMobile">
      <a href='/' className='navTitle' data-aos="fade-up">
      <img src={YakLogoText} className='yakLogo' alt='yak logo'/>
      </a>
      <div className={this.state.toggleMobileNav===true ? 'Overlay--on Overlay' : 'Overlay'}>
        <ul className="Navigation-list">
          <li><a href='/about' className='navAbout' data-aos="fade-up">About</a></li>
          <li><button className='yakButtonMobile joinButton' data-aos="fade-up">Join Now</button></li>
        </ul>
      </div>
      <section className="Navigation--collapsed" onClick={this.toggleMenu}>
        <div className={this.state.toggleMobileNav===true ? 'BurgerMenu--on BurgerMenu' : 'BurgerMenu'}></div>
      </section>
    </nav>
  </Fragment>
)
}
}

export default Nav;