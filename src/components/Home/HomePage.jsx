import React from 'react';
import Feed from './Feed';
import CreatePost from './CreatePost';
import TrendingRecipes from './TrendingRecipes';
import './styles/Home.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <CreatePost />
      <TrendingRecipes />
      <Feed />
    </div>
  );
};

export default HomePage;
