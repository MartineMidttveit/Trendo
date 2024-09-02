import React from 'react';
import SearchIcon from '../SVG/SearchIcon';

function Dropdown({ isMenuOpen }) {
  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden flex flex-col text-primary py-4 w-2/3">
      <div className="rounded-full w-full border border-primary">
        <div className="flex items-center justify-between px-4 py-2">
          <input
            type="text"
            placeholder="Search through 11,345 products..."
            className="focus:outline-none w-full"
          />
          <SearchIcon/>
        </div>
      </div>

      <a href="#" className="py-2 border-b border-primary w-full text-center">
        Home
      </a>
      <a href="#" className="py-2 border-b border-primary w-full text-center">
        Contact
      </a>
    </div>
  );
}

export default Dropdown;