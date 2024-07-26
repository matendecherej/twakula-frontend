import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { loginUser } from '../services/api';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      if (response.token) {
        login({ username: response.username, token: response.token });
        navigate('/explore');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-img">
      <div className="content">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"><FontAwesomeIcon icon={faUser} /></span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="field space">
            <span className="fa fa-lock"><FontAwesomeIcon icon={faLock} /></span>
            <input
              type={showPassword ? "text" : "password"}
              className="pass-key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <span className="show" onClick={toggleShowPassword}>
              {showPassword ? 'HIDE' : 'SHOW'}
            </span>
          </div>
          <div className="pass">
            <button type="button" onClick={() => alert('Forgot Password functionality not implemented.')}>
              Forgot Password?
            </button>
          </div>
          <div className="field">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
        <div className="login">
          Or login with
        </div>
        <div className="links">
          <div className="facebook">
            <FontAwesomeIcon icon={faFacebookF} /><span>Facebook</span>
          </div>
          <div className="instagram">
            <FontAwesomeIcon icon={faInstagram} /><span>Instagram</span>
          </div>
        </div>
        <div className="signup">
          Don't have an account?
          <button onClick={() => navigate('/register')}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
