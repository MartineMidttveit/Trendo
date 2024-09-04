import React from 'react';
import SearchIcon from '../../SVG/SearchIcon';

function SearchBar() {
  return (
    <div className="hidden lg:block w-1/5 border-b border-secondary">
        <div className="flex items-center justify-between px-4 py-2">
            <input
                type="text"
                placeholder="Search through 11,345 products..."
                className="focus:outline-none w-full bg-customGrey"
            />
            <SearchIcon/>
        </div>
    </div>
  );
}

export default SearchBar;



