import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = ({ user }) => {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('bio', bio);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    try {
      const response = await axios.put(`http://localhost:4000/api/users/profile/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form className="edit-profile" onSubmit={handleUpdateProfile}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfile;
