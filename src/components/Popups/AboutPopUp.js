import React from 'react';  
import Button from 'react-bootstrap/Button';
import './AboutPopUp.css';  

function Popup(props) {  
  return (  
    <div className='popup'>  
      <div className='popup\_inner'>  
        <div>
          <h1 className="headline">What is Taco To Yousday and How does it work?</h1>  
          <p className="about-body">
            <strong>Taco To Yousday</strong> is a weekly taco subscription service that brings Taco Tuesday to you, in the confort of your own home. 
            Everybody loves tacos and taco Tuesday is a huge tradicion for many. 
            Unfortunately going out after a long day of working can be more work than it's worth.
            That's where <strong>Taco To Yousday</strong> comes in and makes your Tuesday nights a whole lot yummier.
          </p>
          <p className="about-body-subtitle">Getting started is easy:</p>
            <ol className="about-popup-ol">
              <li>Simply sign up with your email</li> 
              <li>Add your address where you would like your tacos delivered</li>
              <li>Choose from the different tacos available in your area</li>
              <li>Choose your appetite level</li>
              <li>Choose how often you would like <strong>Taco To Yousday</strong> deliveries</li>
              <li>Click the checkout button to complete your subscription</li>
            </ol>
            <p className="about-body">Then kick back and wait for Taco Tuesday to come to you</p>        
        </div>
        <Button className="popup-close-button" onClick={props.closePopup}>Close</Button>  
      </div>  
    </div>  
  );  
}  

export default Popup;