import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

ReactDOM.render(
  <AuthProvider> {/* Wrap App with AuthProvider */}
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
