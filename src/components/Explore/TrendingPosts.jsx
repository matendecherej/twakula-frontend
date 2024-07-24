import React from 'react';
import PostCard from '../Common/PostCard';

const TrendingPosts = ({ posts }) => {
  return (
    <div className="trending-posts">
      <h2>Trending Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TrendingPosts;
