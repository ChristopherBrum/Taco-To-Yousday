import React, { useState } from 'react';
import './LogIn.css';

export default function LogIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm(){
        return (email.length > 0 && password.length > 0);
    }

return(
    <div>
        <form>
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