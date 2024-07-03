import React from 'react';
import './css/AuthForm.css';

const SignupForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="text" placeholder="Full Name" required />
            <button type="submit" className="auth-button">Sign Up</button>
        </form>
    );
}

export default SignupForm;
