import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../Common/PostCard';

const TrendingRecipes = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/recipes/trending');
        setTrendingPosts(response.data);
      } catch (error) {
        console.error('Error fetching trending posts:', error);
      }
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div className="trending-recipes">
      <h2>Trending Recipes</h2>
      {trendingPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TrendingRecipes;
