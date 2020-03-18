import React from 'react'; 
import './Menu.css';
import Button from 'react-bootstrap/Button';

function Menu() {

  return(
    <div className="menu-container">
      <h5 className="menu-title">Taco Status</h5>
      <div>
        <h6>Selected Tacos:</h6>
        <h6>Appetite Level:</h6>
        <h6>Frequency of Tacos:</h6>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}

export default Menu;