import React from 'react';
import SearchIcon from '../../SVG/SearchIcon';

function Dropdown({ isMenuOpen }) {
  if (!isMenuOpen) return null;

  return (
    <div className="absolute right-0 lg:hidden flex flex-col text-primary py-4 w-full md:w-2/3 bg-customGrey px-10 border-t border-secondary">
      <div className="rounded-full w-full border border-primary mt-4 bg-white">
        <div className="flex items-center justify-between px-4 py-2 ">
          <input
            type="text"
            placeholder="Search through 11,345 products..."
            className="focus:outline-none w-full"
          />
          <SearchIcon/>
        </div>
      </div>

      <a href="#" className="py-4 border-b border-primary w-full text-center">
        Home
      </a>
      <a href="#" className="py-4 w-full text-center">
        Contact
      </a>
    </div>
  );
}

export default Dropdown;