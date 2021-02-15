import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
  render(){
    return (
      <div className='footer'>
        <div className='footerTitleDiv' data-aos="fade-up">
          <h3>YAK</h3>
          <p>Personalised business coaching</p>
        </div>
        <div className='footerLinksDiv' data-aos="fade-up">
          <ul>
            <li>Programs</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
          <div className='socialIcons'>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="far fa-envelope"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;