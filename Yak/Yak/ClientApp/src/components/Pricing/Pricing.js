import React, {Component, Fragment} from 'react';
import './Pricing.scss';

class Pricing extends React.Component{
  render(){
    return (
      <div className='pricing'>
        <h2 data-aos="fade-up">Choose your starting point</h2>
        <h3  data-aos="zoom-in" className='pricingExplore'>Explore memberships and packs</h3>
        <div className='pricingDiv'  data-aos="zoom-in">
          <div>
            <h4>Enterprise</h4>
            <h4 className='price'>Free</h4>
            <p>0-3 employees? Get access to our spaces for free to help your company grow. Take advantage of more productive space, and only pay for the extra facilities you use.</p>
          </div>
          <div>
            <h4>Professional</h4>
            <h4 className='price'>From £240/mo</h4>
            <p>Get access to our growing network of workspaces, choose the number of access cards you want to grant each month, and only pay for the ones you use.</p>
          </div>
          <div>
            <h4>All-out</h4>
            <h4 className='price'>From £5,280/pa— Get 1 month free</h4>
            <p>Unlimited annual access to our growing network of workspaces, special events, special offers, events and employee perks.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing;