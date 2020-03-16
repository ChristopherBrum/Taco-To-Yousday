import React, { Component } from 'react';
import fire from '../../config/Fire.js';
import Tacos from '../Taco/TacoFeed.js';

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
        <h1>Taco To Yousday</h1>
        <h5>Bringing Taco Tuesday to you</h5>
        <button onClick={this.logout}>Log Out</button>
        <Tacos />
      </div>
    );
  }
}
export default Home;
