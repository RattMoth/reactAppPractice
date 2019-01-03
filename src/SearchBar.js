import React from 'react';

const SearchBar = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green bg-lightest-blue"
        type="search"
        placeholder="Filter Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
