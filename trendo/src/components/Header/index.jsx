import React, { useState } from 'react';
import Cart from './Cart';
import Hamburger from './Hamburger';
import Dropdown from './Hamburger/Dropdown';
import SearchBar from './Searchbar';

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
        
        <SearchBar/>

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