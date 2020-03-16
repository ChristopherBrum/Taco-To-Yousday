import React, { Component } from 'react';
import fire from '../../config/Fire.js';
import Tacos from '../Taco/TacoFeed.js';
import Menu from '../Menu/Menu.js';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  
  render() {
    return(
      <div className="taco-container">
        <div>
          <Tacos />
        </div>
        <div id="menu-container">
          <Menu />
          <Button onClick={this.logout}>Log Out</Button>
        </div>

      </div>
    );
  }
}
export default Home;
