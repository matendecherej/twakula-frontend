import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SuggestedAccounts from './SuggestedAccounts';
import TrendingPosts from './TrendingPosts';

const ExplorePage = () => {
  const [posts, setPosts] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchExploreData = async () => {
      try {
        const postsResponse = await axios.get('http://localhost:4000/api/recipes/explore');
        const accountsResponse = await axios.get('http://localhost:4000/api/users/suggested');
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
      <TrendingPosts posts={posts} />
    </div>
  );
};

export default ExplorePage;
