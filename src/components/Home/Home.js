import React, { Component } from 'react';
import fire from '../../config/Fire.js';
import Tacos from '../Taco/TacoFeed.js';
import Menu from '../Menu/Menu.js';
import Address from '../Address/Address.js';
import './Home.css'
import Button from 'react-bootstrap/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      cart: []
    }
  }

  addToCart(taco) {
    let copyCart = this.state.cart.slice()
    copyCart.push(taco)
    this.setState({ cart: copyCart})
  }

  logout() {
    fire.auth().signOut();
  }
  
  render() {
    return(
      <div className="taco-container">
        <div>
          <Tacos addTaco={(t) => this.addToCart(t)} />
        </div>
        <div>
          <div id="menu-container">
            <Menu cart={this.state.cart}/>
          </div>
          <div id="address-container">
            <Address />
          </div>
          <div id="settings-container">
            <Button className="logout-button">FAQ</Button>
            <Button className="logout-button">About Taco To Yousday</Button>
            <Button className="logout-button">Contact</Button>
            <Button className="logout-button" onClick={this.logout}>Log Out</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
