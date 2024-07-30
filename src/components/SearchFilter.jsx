import React from 'react';

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '20px',
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search citizens..."
        value={searchQuery}
        onChange={handleInputChange}
        style={searchStyle}
      />
    </div>
  );
};

export default SearchFilter;
