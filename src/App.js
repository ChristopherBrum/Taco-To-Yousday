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
      <Container fluid>
        <Row>
          <Col><Link to="/">Home</Link></Col>
          <Col xs={8}>Spacing</Col>
          <Col>Menu</Col>
        </Row> 
        <Container fluid="sm">            
          <Button onClick={()=>{setLoginSwitch(true);setSignUpSwitch(false)}}>Login</Button>
          <Button onClick={()=>{setLoginSwitch(false);setSignUpSwitch(true)}}>Sign Up</Button>
          {loginSwitch ? <Login /> : null}
          {signUpSwitch ? <SignUp /> : null}
        </Container>

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
      </Container>
    </Router>
  );
}

export default App;
