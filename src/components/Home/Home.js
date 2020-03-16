import React, { Component } from 'react';
import fire from '../../config/Fire.js';
import Tacos from '../Taco/TacoFeed.js';
import './Home.css'

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
      <div>
        <div className="home-title-container">
          <h1>Taco To Yousday</h1>
          <button onClick={this.logout}>Log Out</button>
        </div>
        <Tacos />
      </div>
    );
  }
}
export default Home;
