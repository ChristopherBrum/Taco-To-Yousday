import React from 'react';
import Button from 'react-bootstrap/Button';

function FaqPopup(props) {

  return(
    <div className="faq-popup">
      <div className="faq-popup-inner">
      <h1 className="headline">Frequently Asked Questions</h1>
      <ul>
        <li>Where do the tacos come from?</li>
        <li>Who delivers the tacos?</li>
        <li>What time will the tacos arrive on Tuesdays?</li>
        <li>Can I pause my taco subscription?</li>
        <li>Do you offer tacos for people with dietary restriction?</li>
      </ul>
      <Button className="popup-close-button" onClick={props.closePopup}>Close</Button>  
      </div>
    </div>
  )
}

export default FaqPopup;