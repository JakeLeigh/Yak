import React from 'react';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return (
      <div class='footer'>
        <div class='footerTitleDiv' data-aos="fade-up">
          <h3>YAK</h3>
          <p>Personalised business coaching</p>
        </div>
        <div class='footerLinksDiv' data-aos="fade-up">
          <ul>
            <li>Programs</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
          <div class='socialIcons'>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="far fa-envelope"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;