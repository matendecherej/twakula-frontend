import React from 'react';

const UserStats = ({ user }) => {
  return (
    <div className="user-stats">
      <p>{user.posts.length} Posts</p>
      <p>{user.followers.length} Followers</p>
      <p>{user.following.length} Following</p>
    </div>
  );
};

export default UserStats;
