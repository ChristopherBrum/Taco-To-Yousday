import React, { useState } from 'react';
import './Login.css';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm(){
        return (email.length > 0 && password.length > 0);
    }

return(
    <div className="form-container">
        <form>
            <div>
                <label>
                    Email:
                    <input type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
    )
}