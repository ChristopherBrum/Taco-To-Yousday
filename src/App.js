import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/SignUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [loginSwitch, setLoginSwitch] = useState(false)
  const [signUpSwitch, setSignUpSwitch] = useState(false)

  return (
    <Router>
      <div className="main-container">
        <div className="nav-bar">
          <div className="home-link"><Link id="home-logo" to="/">HOME</Link></div>
          <div className="home-menu">MENU</div>
        </div>
        <div className="title-container">
          <div>
            <h1 className="title">Taco to Yousday</h1>
          </div>
          <div>
            <h3 className="sub-title">Let Taco Tuesday Come to You!</h3>
          </div>
        </div>
        <div className="main-page-container">
          <div className="login-container">            
            <button className="sign-up-button" onClick={()=>{setLoginSwitch(true);setSignUpSwitch(false)}}>Login</button>
            <button className="log-in-button" onClick={()=>{setLoginSwitch(false);setSignUpSwitch(true)}}>Sign Up</button>
            {loginSwitch ? <Login /> : null}
            {signUpSwitch ? <SignUp /> : null}
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
