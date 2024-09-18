import React from 'react';
import SearchIcon from '../../SVG/SearchIcon';

function Dropdown({ isMenuOpen }) {
  return (
    <div
      className="absolute right-0 transition-all duration-300 lg:hidden flex flex-col text-primary py-4 w-full md:w-2/3 bg-customGrey px-10 border-t border-secondary"
      style={{
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        pointerEvents: isMenuOpen ? 'auto' : 'none',
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10%)',
      }}>
      <div className="rounded-full w-full border border-primary mt-4 bg-white">
        <div className="flex items-center justify-between px-4 py-2 ">
          <input
            type="text"
            placeholder="Search through 11,345 products..."
            className="focus:outline-none w-full"
          />
          <SearchIcon />
        </div>
      </div>

      <a href="/" className="py-4 border-b border-primary w-full text-center">
        Home
      </a>
      <a href="/contact" className="py-4 w-full text-center">
        Contact
      </a>
    </div>
  );
}

export default Dropdown;