import React, { Component } from 'react';
import fire from '../../config/Fire.js';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import title from '../Images/TacoToYousday-font.png';
import subtitle from '../Images/slogan-font.png';
import about from '../Images/what-is-TTY.png';
import AboutPopUp from '../AboutPopUp/AboutPopUp.js';  

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup= this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            showAboutPopUp: false,
        }   
        this.toggleAboutPopUp = this.toggleAboutPopUp.bind(this);
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        })
    }    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    toggleAboutPopUp() {  
        this.setState( state => ({  
            showAboutPopUp: !state.showAboutPopUp  
        }));  
    }  

    render() {
        return (
            <div className="landing-container">
                <div className="bg-overlay">
                    <img src={title} className="title" alt="website logo"></img>
                    <img src={subtitle} className="subtitle" alt="website subtitle"></img>
                    <img src={about} onClick={() => this.toggleAboutPopUp()} className="about" alt="link to what TTY is about" ></img>
                    {this.state.showAboutPopUp ?  
                        <AboutPopUp  
                            text='Close'  
                            closePopup={this.toggleAboutPopUp}  
                        />  
                            : null  
                    }  
                    <Form id="login-form-container">
                        <Form.Group controlId="formBasicEmail"> 
                            <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                            <Form.Control value={this.state.email} onChange={this.handleChange} type="email" name="email"  
                                placeholder="Enter email" />
                            <small id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </small>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                            <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" 
                                className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="form-button">
                            <Button type="submit" onClick={this.login} className="btn btn-primary">Login</Button>
                            <Button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Login;