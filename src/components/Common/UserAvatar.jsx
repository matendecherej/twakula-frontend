import React from 'react';

const UserAvatar = ({ user }) => {
  return (
    <div className="user-avatar">
      <img src={user.profilePicture} alt={user.username} />
      <span>{user.username}</span>
    </div>
  );
};

export default UserAvatar;
