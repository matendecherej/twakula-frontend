import React, { useState } from 'react';
import axios from 'axios';

const AccountSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:4000/api/users/account', {
        username,
        email,
        password,
      });
      console.log('Account updated:', response.data);
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  return (
    <form className="account-settings" onSubmit={handleUpdateAccount}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Update Account</button>
    </form>
  );
};

export default AccountSettings;
