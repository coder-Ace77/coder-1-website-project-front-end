import React from 'react';
import './css/AuthForm.css';

const LoginForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username or Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="auth-button">Login</button>
        </form>
    );
}

export default LoginForm;
