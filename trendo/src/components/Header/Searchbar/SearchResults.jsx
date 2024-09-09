import React from 'react';
import Thumbnail from './Thumbnail';

function SearchResults() {
  return (
    <div className='w-full'>

        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>

        <button className='ml-12 bg-customOrange 2xl:px-16 2xl:py-3 mt-3 text-primary font-medium 2xl:text-lg hover:shadow-lg duration-300'>View all results</button> 
    </div>
  );
}

export default SearchResults;
