import React, { Component } from 'react';
import fire from '../../config/Fire.js';

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
        <h1>You are Home</h1>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}
export default Home;
