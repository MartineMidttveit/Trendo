import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Search from '../components/Header/Searchbar/Search';

import useFetch from '../hooks/useFetch';

function Frontpage() {

const [value, setValue] = useFetch();

  return (
      <main className="text-primary font-barlow relative">
        <Header/>
          <Search/>
            <div className="bg-customGrey shadow-lg">

              <div className="flex justify-center relative">
                <img src="/image.png" alt="Woman with sunglasses in front of a wall of leaves and flowers" className="w-full object-cover h-screen"/>

                <div className='absolute left-0 mt-16 top-1/3 text-customGrey text-left wrapper'>
                  <p className='text-2xl font-medium mb-5'>SAVE UP TO 20% EXTRA ON THE</p>
                  <h1 className='text-8xl font-medium'>Summer sale</h1>
                  <p className='text-3xl mt-8'>Don't miss out — shop now for the best deals!</p>

                  <button className='bg-customOrange 2xl:px-8 2xl:py-3 2xl:mt-10 text-primary font-medium 2xl:text-lg hover:bg-customGrey hover:text-customGreen duration-300'>SHOP NOW</button>
                </div>
              </div>

              <div className='flex items-end wrapper'>
                <div className='pt-10 text-left w-full mx-auto'>
                  <h1 className='text-2xl font-bold'>All products</h1>
                  <p className='2xl:text-lg pt-2'>Showing <span className='font-medium'>11</span> out of <span className='font-medium'>11.345</span> products</p>
                </div>

                <div className="relative sm:w-64">
                    <select name="sortBy" id="sortBy" className="text-sm xl:text-base border rounded px-3 py-2 outline-none h-10 w-full sm:w-64 xl:h-12" aria-label="Sort listings">
                        <option value="Latest">Most popular</option>
                        <option value="Ending">Newest products</option>
                        <option value="TitleAZ">Lowest price</option>
                        <option value="TitleZA">Highest price</option>
                        <option value="TitleZA">A to Z</option>
                    </select>
                </div>
              </div>
            
              <Cards products={value}/>
            </div>
          <Footer/>
      </main>
  );
}

export default Frontpage;
