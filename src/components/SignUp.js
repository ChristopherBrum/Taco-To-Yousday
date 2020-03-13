import React, { useState } from 'react';
import './LogIn.css';


export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm(){
        return (email.length > 0 && password.length > 0);
    }

return(
    <div>
        <form>
            <label>
                First Name:
                <input type="text" name="name" />
            </label>
            <label>
                Last Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" name="name" />
            </label>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
    )
}