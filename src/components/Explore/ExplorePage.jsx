import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SuggestedAccounts from './SuggestedAccounts';
import PostCard from '../Common/PostCard'; // Ensure you import PostCard correctly
import './ExplorePage.css';

const ExplorePage = () => {
  const [posts, setPosts] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchExploreData = async () => {
      try {
        const token = localStorage.getItem('token'); // Adjust if using different storage
        
        const postsResponse = await axios.get('http://localhost:4000/api/recipes/explore', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('Fetched posts:', postsResponse.data); // Add this line for debugging
        const accountsResponse = await axios.get('http://localhost:4000/api/users/suggested', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setPosts(postsResponse.data);
        setAccounts(accountsResponse.data);
      } catch (error) {
        console.error('Error fetching explore data:', error);
      }
    };
  
    fetchExploreData();
  }, []);

  return (
    <div className="explore-page">
      <SearchBar items={posts} />
      <SuggestedAccounts accounts={accounts} />
      <div className="trending-posts">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
