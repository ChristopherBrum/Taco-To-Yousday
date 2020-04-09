import React, { useState } from 'react'; 
import './Menu.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Checkout from '../Checkout/Checkout.js';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Menu(props) { 
  const [tacoPlanAmount, setTacoPlanAmount] = useState(0);
  const [tacoPlanName, setTacoPlanName] = useState('Choose your ');
  const [tacoPlanFrequencyAmount, setTacoPlanFrequencyAmount] = useState(0);
  const [tacoPlanFrequencyName, setTacoPlanFrequencyName] = useState('Choose a ');
  const [orderTotal, setOrderTotal] = useState(0)
  const tacoPlans = [
    {plan: "Pequeno", price: 3.99},
    {plan: "Medio", price: 4.99},
    {plan: "Grande", price: 5.99},
    {plan: "Gordi", price: 6.99},
    {plan: "Familia", price: 12.99}
  ]
  const tacoFrequency = [
    {amount: 4, id: "4", name: "Taco Addict"},
    {amount: 3, id: "3", name: "Taco Lover"},
    {amount: 2, id: "2", name: "Taco Fan"},
    {amount: 1, id: "1", name: "Taco Eater"} 
  ]

  useEffect(()=>calcTotal(), [tacoPlanAmount, tacoPlanFrequencyAmount])

  const tacoAmountHandler = (value) => {
    let chosenAppetite = tacoPlans.find(tacoPlan => tacoPlan.plan === value)
    setTacoPlanAmount(chosenAppetite.price)
    setTacoPlanName(chosenAppetite.plan)
  }

  const tacoFrequencyHandler = (value) => {
    let chosenFrequency = tacoFrequency.find(frequency => frequency.id === value)
    setTacoPlanFrequencyAmount(chosenFrequency.amount)
    setTacoPlanFrequencyName(chosenFrequency.name)
  }

  const calcTotal = () => {
    let calc = (tacoPlanAmount * tacoPlanFrequencyAmount)
    let monthlyTotal = calc.toString()
    setOrderTotal(tacoPlanAmount * tacoPlanFrequencyAmount)  
  }

  return(
    <div className="menu-container">
      <h5 className="menu-title">Taco Status</h5>
      <div className="dropdown-container">
        <div className="taco-dropdown">
          <ButtonGroup>
            <DropdownButton onSelect={(event) => tacoAmountHandler(event)} as={ButtonGroup} title="Choose Taco Appetite" id="taco-nested-dropdown">
              <Dropdown.Item eventKey="Pequeno" >Pequeño Meal: 2 Tacos for $3.99</Dropdown.Item>
              <Dropdown.Item eventKey="Medio" >Medio Meal: 3 Tacos for $4.99</Dropdown.Item>
              <Dropdown.Item eventKey="Grande" >Grande Meal: 4 Tacos for $5.99</Dropdown.Item>
              <Dropdown.Item eventKey="Gordi" >Gordi Meal: 5 Tacos for $6.99</Dropdown.Item>
              <Dropdown.Item eventKey="Familia" >Familia Meal: 10 Tacos for $12.99</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>  
        </div>
        <div className="taco-dropdown">
          <ButtonGroup>
            <DropdownButton onSelect={(event) => tacoFrequencyHandler(event)} as={ButtonGroup} title="Choose Taco Plan" id="taco-nested-dropdown">
              <Dropdown.Item eventKey="4"><strong>Taco Addict:</strong> Every Tuesday!</Dropdown.Item>
              <Dropdown.Item eventKey="3"><strong>Taco Lover:</strong> Three Weeks per Month</Dropdown.Item>
              <Dropdown.Item eventKey="2"><strong>Taco Fan:</strong> Every Other Tuesday</Dropdown.Item>
              <Dropdown.Item eventKey="1"><strong>Taco Eater:</strong> Once a Month</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
        <div className="taco-menu-options-container">
          <div className="taco-menu-display">
            <p id="order-total">Tacos in Cart: </p>
            <ul id="tacos-in-cart">{props.name}</ul>
          </div>
          <div className="taco-menu-display">
            <p id="order-total">Taco Appetite: </p>
            <ul id="tacos-in-cart">{tacoPlanName} meal size</ul>
          </div>
          <div className="taco-menu-display">
            <p id="order-total">Taco Plan: </p>
            <ul id="tacos-in-cart">{tacoPlanFrequencyName} plan</ul>
          </div>
          <h5 id="order-total-real">Order Total: ${orderTotal}</h5>
        </div>
      </div>
        <Button onClick={() => alert('This is working') }>
          Checkout
        </Button>
    </div>
  );
}

export default Menu;
