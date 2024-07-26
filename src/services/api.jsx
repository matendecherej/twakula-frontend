import axios from 'axios';

export const registerUser = async (username, email, password) => {
  const response = await axios.post('http://localhost:4000/api/users/register', {
    username,
    email,
    password
  });
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post('http://localhost:4000/api/users/login', { email, password });
  const { token, name } = response.data;
  
  localStorage.setItem('token', token);

  return { token, username: name };
};
