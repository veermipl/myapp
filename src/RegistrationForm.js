// src/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ username, email, password });
    };

    return (
        <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;
