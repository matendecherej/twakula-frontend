import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Import CSS for styling

const Register = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/users/register', {
        name,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err.response.data);
      setError(err.response.data.message); // Display error message
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2 className="register-title">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="form-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
