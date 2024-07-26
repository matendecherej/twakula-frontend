import React from 'react';

const TrendingPosts = ({ posts }) => {
  return (
    <div className="trending-posts">
      <h2>Trending Recipes</h2>
      <div className="post-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
