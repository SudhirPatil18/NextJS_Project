import { useState } from 'react';
import useStore from '../store';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const searchCells = useStore((state) => state.searchCells);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchCells(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleSearch}
      className="border border-gray-400 p-2 mb-4"
    />
  );
};

export default SearchBar;
