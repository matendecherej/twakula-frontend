import React, { useState } from 'react';

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Implement search functionality here, such as filtering the `items` array
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search recipes..." 
        value={query}
        onChange={handleSearch}
      />
      {/* Optionally, display search results or suggestions based on the query */}
    </div>
  );
};

export default SearchBar;
