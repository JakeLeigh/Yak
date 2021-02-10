import React from 'react';
import './MeetTeam.scss';
import Woman1 from '../../assets/woman1.jpg';
import Woman2 from '../../assets/woman2.jpg';

class MeetTeam extends React.Component{
  render(){
    return (
      <div class='meetTeam'>
       <div class='teamMemberDiv'>
        <img src={Woman1} class='teamImg'/>
        <div class='teamMemberContent1'>
          <h2 class='teamMemberTitle'>Meet Tina</h2>
          <p class='teamMemberText'>While I loved working in-house as an executive coach for many years, I became passionate about the idea of helping more small businesses succeed. When I met Rose, I knew the opportunity had finally arrived. We quickly bonded over our desire to work with entrepreneurs, and within the year Grow Well Coaching was born. We now have the pleasure of working with aspiring business owners and entrepreneurs from all over the world.</p>
        </div>
       </div>
       <div class='teamMemberDiv'>
        <div class='teamMemberContent2'>
          <h2 class='teamMemberTitle'>Meet Rose</h2>
          <p class='teamMemberText'>After working as a finance director at one of the top firm in New York City, I decided to take a break and look into starting my own business. With several years of experience working in business and finance, I wanted to create a program to guide dreamers through the first steps of starting a business. When I met Tina, our combined experiences helped us create a business coaching platform that has been tested and proven time and time again. We’re honored to have the opportunity to not only help you grow, but to help you Grow Well. </p>
        </div>
        <img src={Woman2} class='teamImg'/>
       </div>
      </div>
    )
  }
}
export default MeetTeam;