import React, { useState } from 'react';
import Cart from './Cart';
import Hamburger from './Hamburger';
import Dropdown from './Hamburger/Dropdown';
import SearchIcon from '../SVG/SearchIcon';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed z-10 w-full'>
      <div className="bg-customGreen flex py-3 items-center justify-center text-customGrey text-sm md:text-base 2xl:text-lg">
          <p className='font-medium'>Free shipping on orders over $100</p>
      </div>

      <div className="flex justify-between items-center wrapper py-6 2xl:text-lg text-primary bg-customGrey shadow-lg">
        <h1 className="font-bold text-2xl 2xl:text-4xl w-2/5 flex items-start">Trendo</h1>

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

        <div className="hidden lg:flex w-2/5 justify-end items-center">
          <p>Home</p>
          <p className="px-8">Contact</p>
          <Cart />
        </div>

        {/* Hamburger Menu and Cart Icon for smaller screens */}
        <div className="lg:hidden flex items-center">
          <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Cart />
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      <Dropdown isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;