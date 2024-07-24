import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/HomePage';
import Profile from './components/Profile/ProfilePage';
import Explore from './components/Explore/ExplorePage';
import Notifications from './components/Notifications/NotificationsPage';
import Messages from './components/Messages/MessagesPage';
import Settings from './components/Settings/SettingsPage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Common/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
        <Route path="/messages" element={<PrivateRoute><Messages /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
