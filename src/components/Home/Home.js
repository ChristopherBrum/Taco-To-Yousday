import React, { Component } from 'react';
import fire from '../../config/Fire.js';
import Tacos from '../Taco/TacoFeed.js';
import Menu from '../Menu/Menu.js';
import Address from '../Address/Address.js';
import Button from 'react-bootstrap/Button';
import FaqPopup from '../Popups/FaqPopup.js';
import AboutPopUp from '../Popups/AboutPopUp.js';  
import AboutPopup2 from '../Popups/AboutPopup2.js';
import ContactPopup from '../Popups/ContactPopup.js'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toggleFaqPopup = this.toggleFaqPopup.bind(this);
    this.toggleAboutPopup2 = this.toggleAboutPopup2.bind(this);
    this.toggleContactPopup = this.toggleContactPopup.bind(this);
    this.state = {
      cart: []
    }
  }

  addToCart(taco) {
    let copyCart = this.state.cart.slice()

    copyCart.push(taco)
    this.setState({ cart: copyCart})
  }

  checkArr(arr) {
    if(arr.length === 0){
      return "Taco Cart Empty"
    } else {
      return arr.map(name => 
        <li className="taco-name-li">{name.title}</li>
      )
    }
  }

  logout() {
    fire.auth().signOut();
  }
  
  toggleFaqPopup() {
    this.setState( state => ({  
      showFaqPopup: !state.showFaqPopup 
    }));  
  }

  toggleAboutPopup2() {
    this.setState( state => ({  
      showAboutPopup2: !state.showAboutPopup2 
    }));  
  }

  toggleContactPopup() {
    this.setState( state => ({  
      showContactPopup: !state.showContactPopup 
    }));  
  }
  
  render() {
    return(
      <div className="taco-container">
        <div>
          <Tacos addTaco={(t) => this.addToCart(t)} />
        </div>
        <div>
          <div id="menu-container">
            <Menu cart={this.state.cart} name={this.checkArr(this.state.cart)}/>
          </div>
          <div id="address-container">
            <Address />
          </div>
          <div id="settings-container">
            <Button className="logout-button" onClick={() => this.toggleFaqPopup()}>FAQ</Button>
              {this.state.showFaqPopup ? <FaqPopup closePopup={this.toggleFaqPopup} /> : null }  
            <Button className="logout-button" onClick={() => this.toggleAboutPopup2()}>About Taco To Yousday</Button>
              {this.state.showAboutPopup2 ? <AboutPopup2 closePopup={this.toggleAboutPopup2} /> : null } 
            <Button className="logout-button" onClick={() => this.toggleContactPopup()}>Contact</Button>
              {this.state.showContactPopup ? <ContactPopup closePopup={this.toggleContactPopup} /> : null } 
            <Button className="logout-button" onClick={this.logout}>Log Out</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
