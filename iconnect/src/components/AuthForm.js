// src/components/AuthForm.js
import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './AuthForm.css'; // Optional: You can create a CSS file for styling

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign up and sign in

  const handleAuth = async (event) => {
    event.preventDefault();

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up successfully');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully');
      }
    } catch (error) {
      console.error('Authentication Error:', error.message);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleAuth}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-btn">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-btn">
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default AuthForm;
