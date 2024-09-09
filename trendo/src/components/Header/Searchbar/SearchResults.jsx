import React from 'react';
import Thumbnail from './Thumbnail';

function SearchResults() {
  return (
    <div className='text-left w-full'>
        <p className='2xl:text-lg pt-4 pb-6 pl-12'>The search for "rty" gave 3 results.</p>
       
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>

        <button className='ml-12 bg-customOrange 2xl:px-16 2xl:py-3 mt-3 text-primary font-medium 2xl:text-lg hover:shadow-lg duration-300'>View all results</button> 
    </div>
  );
}

export default SearchResults;
