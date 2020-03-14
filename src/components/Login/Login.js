import React, { useState } from 'react';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm(){
        return (email.length > 0 && password.length > 0);
    }

return(
    <Container>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Remember Email"
            />

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
    )
}