import React from "react";
import Logo from './images/logo.svg'
import Carousel from "./images/carousel.svg"
import Earth from "./images/earth.svg"
import Profile from "./images/profile.svg"
import Smile from "./images/smile.svg"
import Twitter from "./images/twitter.svg"
import Facebook from "./images/facebook.svg"
import Mobimg1 from  "./images/mob.png"
import Mobimg2 from  "./images/mob-1.png"
import Screenshot1 from  "./images/screenshot.jpg"
import Screenshot2 from  "./images/screenshot1.jpg"
import Img1 from "./images/profile-img1.jpg"
import Img2 from "./images/profile-img2.jpg"
import './App.css';
import CardInfo from "./Components/Card/CardInfo";



function App() {
  return (
    <div className="app">
     <div className="nav">
      <img src={Logo} alt="soprano logo" className="logo" />
      <div className="list">
        <ul>
          
          <li>
            <a href="/"> Home </a>
          </li>
        </ul>
        <ul>
          
          <li>
            <a href="/"> Products </a>
          </li>
        </ul>
        <ul>
          
          <li>
            <a href="/"> Abouts Us</a>
          </li>
        </ul>
        <ul>
          
          <li>
            <a href="/"> Demos </a>
          </li>
        </ul>
        <ul>
          
          <li>
            <a href="/"> Contact Us </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="carousel">
      <img src={Carousel} alt="carousel img" className="carousel__img"/>
      
    </div> 
     <div className="mobile">

     <div className="mobile-img">
     <img src={Mobimg1} alt="Mob img" className="mobile__img-1"/>
     <img src={Mobimg2} alt="Mob img" className="mobile__img-2"/>
     </div>

      <h1>Essential Mobile App Landing for Workspaces</h1>

      <p>A mobile app landing page is important and essential for right amount of information about your product. Start increasing your user base upon the launch of your product</p>


      <button><a href="/"> Explore Demos  &#8594;</a> </button>

  

     </div>

     <hr/>

     <div className="demos">

      <h3>Explore our demos</h3>

       <p>Explore our landing Page demos on different kind of topics. More Demos are coming soon.</p>


       <div className="demos__images">
         <div className="demos__images-left">
         <img src={Screenshot1} alt="" className="demos__images-left1"/>
         
         <h3> Website Landing</h3>

         </div>
         <div className="demos__images-right">
         <img src={Screenshot2} alt="" className="demos__images-right1" />

         <h3> App Modern Landing </h3>
           
         </div>
       </div>

     </div>

     <hr/>

     <div className="journey">

      <h3>Start your business journey with Soprano</h3>

       <p>Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>


       <div className="journey__logo">
       
         <div className="journey__logo1">
           <img src={Earth} alt=""/>
           <h4>Move Your Business Online</h4>
          
           <p>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
         </div>
         <div className="journey__logo1">
           <img src={Profile} alt=""/>
           <h4>Move Your Business Online</h4>
          
           <p>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
         </div>
         <div className="journey__logo1">
           <img src={Smile} alt=""/>
           <h4>Move Your Business Online</h4>
          
           <p>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
         </div>

         
       </div>
       <button className="journey-button" ><a href="/"> Start Free Trail </a> </button>

     </div>

     <hr/>

     <div className="review">
       <h3>What Clients say about our product</h3>

       <div className="review__card">
       <CardInfo image={Img1}/>
       <CardInfo image={Img2}/>
       </div>

       

     </div>

     <div className="contact">
       <div className="contact__text">
       <h2>Subscribe our newsletter</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab itaque, doloremque  <br></br>facilis eum saepe omnis laborum repudiandae excepturi in ducimus,
       <br/> ratione quos reiciendis quasi perspiciatis dolorem quis tempora sint. Fuga?</p>
       </div>

       <div className="contact__button">

       <button className="contact-button1" ><a href="/"> Get Access </a> </button>

       </div>
       
     </div>

     <hr style={{width:"100%"}}/>

     <div className="footer">
       <img src={Logo} alt="soprano logo" className="logo"/>
       <div className="footer__icon">
         <img src={Twitter} alt="twitter" className="twitter"/>
         <img src={Facebook} alt="facebook"/>
       </div>
       
       <p>Copywright 2020 Soprano.ai</p>

     </div>
     
    </div>
    
    
  );
}

export default App;
