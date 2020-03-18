import React, { Component } from 'react';
import fire from './config/Fire.js';
import './App.css';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import TacoLogo from './components/taco-solo.png';
import TacoFont from './components/TacoToYousday-font.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar id="nav-props" bg="light">
          <Navbar.Brand src="#home" className="navbar-title">
            <img
              src={TacoFont}
              width="200px"
              height="auto"
              className="taco-font"
              alt="Taco Title"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={TacoLogo}
              width="100px"
              height="100px"
              className="taco-logo"
              alt="Taco Logo"
            />
        </Navbar.Brand>
        </Navbar> 
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}
export default App;
