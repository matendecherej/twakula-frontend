import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserPosts from './UserPosts';
import EditProfile from './EditProfile';
import UserStats from './UserStats';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const userId = "id_of_logged_in_user"; // This should be dynamically fetched based on logged-in user

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.profilePicture} alt={user.username} className="profile-picture" />
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
      </div>
      <div className="profile-content">
        <UserStats user={user} />
        <EditProfile user={user} />
        <UserPosts userId={userId} />
      </div>
    </div>
  );
};

export default ProfilePage;
