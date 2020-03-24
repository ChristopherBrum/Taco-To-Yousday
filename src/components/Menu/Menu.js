import React from 'react'; 
import './Menu.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Menu(props) {

  // function getPrice() {
    
  // }

  return(
    <div className="menu-container">
      <h5 className="menu-title">Taco Status</h5>
      <div className="dropdown-container">
        <div className="taco-dropdown">
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} title="Choose a Taco" id="taco-nested-dropdown">
              <Dropdown.Item eventKey="1">Fried Avocado</Dropdown.Item>
              <Dropdown.Item eventKey="2">Blackberry Chicken</Dropdown.Item>
              <Dropdown.Item eventKey="3">Cilantro Lime Shrimp</Dropdown.Item>
              <Dropdown.Item eventKey="4">Mango Mahi-Mahi</Dropdown.Item>
              <Dropdown.Item eventKey="5">Wild Caught Lobster</Dropdown.Item>
              <Dropdown.Item eventKey="6">The Hungry Vegan</Dropdown.Item>
              <Dropdown.Item eventKey="7">Carne Asada</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
        <div className="taco-dropdown">
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} title="How Many Tacos" id="taco-nested-dropdown">
              <Dropdown.Item eventKey="1">Pequeño Meal: 2 Tacos for $3.99</Dropdown.Item>
              <Dropdown.Item eventKey="2">Medio Meal: 3 Tacos for $4.99</Dropdown.Item>
              <Dropdown.Item eventKey="3">Grande Meal: 4 Tacos for $5.99</Dropdown.Item>
              <Dropdown.Item eventKey="4">Gordi Meal: 5 Tacos for $6.99</Dropdown.Item>
              <Dropdown.Item eventKey="5">Familia Meal: 10 Tacos for $12.99</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>  
        </div>
        <div className="taco-dropdown">
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} title="How Often" id="taco-nested-dropdown">
              <Dropdown.Item eventKey="1">Every Tuesday!</Dropdown.Item>
              <Dropdown.Item eventKey="2">Every Other Tuesday</Dropdown.Item>
              <Dropdown.Item eventKey="3">Once a Month</Dropdown.Item>
              <Dropdown.Item eventKey="4">Just Next Tuesday</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
        <div className="taco-menu-display">
          <h5 id="order-total">Tacos in Cart: </h5>
          <ul id="tacos-in-cart">{props.name}</ul>
        </div>
        <h5 id="order-total">Order Total: </h5>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}

export default Menu;
