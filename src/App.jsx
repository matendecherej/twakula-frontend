import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/HomePage';
import Profile from './components/Profile/ProfilePage';
import Explore from './components/Explore/ExplorePage';
import Notifications from './components/Notifications/NotificationsPage';
import Settings from './components/Settings/SettingsPage';
import Login from './components/Login';
import Register from './components/Register';
import AddRecipeForm from './components/Forms/AddRecipeForm'; // Import AddRecipeForm
import Navbar from './components/Common/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-recipe" element={<PrivateRoute><AddRecipeForm /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
