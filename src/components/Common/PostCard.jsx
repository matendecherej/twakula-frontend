import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const imageUrl = post.imageUrl || '../src/components/bg.jpg'; // Set a default image

  return (
    <div className="post-card">
      <img src={imageUrl} alt={post.title} className="post-card-image" />
      <div className="post-card-content">
        <h2 className="post-card-title">{post.title}</h2>
        <p className="post-card-description">{post.description}</p>
      </div>
      <div className="post-card-footer">
        <span className="post-card-author">{post.authorName}</span>
        <span className="post-card-date">{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default PostCard;
