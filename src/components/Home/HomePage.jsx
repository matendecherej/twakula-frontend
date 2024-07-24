import React from 'react';
import Feed from './Feed';
import TrendingRecipes from './TrendingRecipes';
import './styles/Home.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <TrendingRecipes />
      <Feed />
    </div>
  );
};

export default HomePage;
