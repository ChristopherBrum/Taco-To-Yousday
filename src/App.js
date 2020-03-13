import React, { useState } from 'react';
import './App.css';
import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp.js';
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
      <div>
        <div className="home-container">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div className="login-button-container">
            <button onClick={()=>{setLoginSwitch(true);setSignUpSwitch(false)}}>Login</button>
            <button onClick={()=>{setLoginSwitch(false);setSignUpSwitch(true)}}>Sign Up</button>
            {loginSwitch ? <LogIn /> : null}
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

function Navbar() {

}

export default App;
