import React from 'react';
import CloseIcon from '../../SVG/CloseIcon';
import NoResults from './NoResults';
import SearchResults from './SearchResults';

function Search() {
  return (
    <div className="absolute z-10 justify-center top-[145px] w-full h-full bg-black bg-opacity-20 flex">
        <div className='bg-customGrey h-fit w-[40rem] flex flex-col items-start relative py-12'>
            <div className='flex justify-between items-center w-full px-12'>
                <div className='flex items-center 2xl:text-xl gap-2'>
                    <p className='font-bold'>Search results</p>
                    <span className='font-semibold text-secondary'>(3)</span>
                </div>
                
                <CloseIcon/>
            </div>

{/* No search results */}

            <NoResults/>

{/* When there are search results */}

            <SearchResults/>
        </div>
    </div>
  );
}

export default Search;