import React from 'react';
import Button from 'react-bootstrap/Button';

function ContactPopup(props) {

  return(
    <div className="faq-popup">
      <div className="faq-popup-inner">
      <h1 className="headline">Contact</h1>
      <p>Please, feel free to get in touch with any and all questions, suggestions or inquiries at:</p>
      <ul>
        <li>Email: taco_to_yousday@gmail.com</li>
      </ul>
      <Button className="popup-close-button" onClick={props.closePopup}>Close</Button>  
      </div>
    </div>
  )
}

export default ContactPopup;