import React from 'react';
import CloseIcon from '../../SVG/CloseIcon';
import NoResults from './NoResults';
import SearchResults from './SearchResults';

function SearchContainer({onClose,searchValue}) {
  return (
    <div className="absolute z-10 justify-center top-[69px] w-screen h-screen bg-black bg-opacity-20 flex">
        <div className='bg-customGrey h-fit w-[40rem] flex flex-col items-start relative py-12'>
            <div className='flex justify-between items-center w-full px-12'>
                <div className='flex items-center 2xl:text-xl gap-2'>
                    <p className='font-bold'>Search results</p>
                    <span className='font-semibold text-secondary'>(3)</span>
                </div>
                
                <button onClick={onClose} >
                <CloseIcon />
                </button>
            </div>
            
            <p className='2xl:text-lg py-4 pl-12'>{`The search for "${searchValue}" gave 0 results.`}</p>

{/* No search results */}
            
            <NoResults/>

{/* When there are search results */}

            <SearchResults/>
        </div>
    </div>
  );
}

export default SearchContainer;