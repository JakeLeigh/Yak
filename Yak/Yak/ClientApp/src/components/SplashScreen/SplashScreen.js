import React from 'react';
import './SplashScreen.css';
import SplashImage from '../../assets/officeImage.jpg';

class SplashScreen extends React.Component{
  render(){
    return (
     <main class='splash'>
       <div class='section-background'>
         <img class='background-image' src={SplashImage} />
         <div class='section-content'>
           <h1>The freedom to work productively</h1>
         </div>
       </div>
     </main>
    )
  }
}

export default SplashScreen;