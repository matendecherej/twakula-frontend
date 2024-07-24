import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <div className="post-card-content">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
