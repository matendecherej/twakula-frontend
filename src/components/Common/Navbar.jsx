import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Twakula</Link>
      </div>
      <div className="navbar-links">
        <Link to="/explore">Explore</Link>
        <Link to="/notifications">Notifications</Link>
        {user ? (
          <>
            <Link to="/profile">{user.username}</Link>
            <Link to="/add-recipe">Add Recipe</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
