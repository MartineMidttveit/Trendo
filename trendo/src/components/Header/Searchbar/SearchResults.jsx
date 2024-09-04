import React from 'react';
import CloseIcon from '../../SVG/CloseIcon';
import ClockIcon from '../../SVG/ClockIcon';

function SearchResults() {
  return (
    <div className="absolute z-10 flex justify-center top-[145px] w-full h-full bg-black bg-opacity-20">
        <div className='bg-customGrey h-fit w-[40rem] flex flex-col items-start relative px-12 py-8'>
            <div className='flex justify-between items-center w-full'>
                <p className='font-bold 2xl:text-xl'>Search results</p>
                <CloseIcon/>
            </div>

            <div className='flex flex-col gap-3 text-left'>
                <p className='2xl:text-lg py-4'>The search for "rpkrj" gave 0 results.</p>
                <button className='bg-customOrange 2xl:px-8 2xl:py-3 text-primary font-medium 2xl:text-lg hover:shadow-lg duration-300'>Browse products</button>
            </div>

            <div className='border-t border-secondary mt-8 w-full text-left'>
                <p className='2xl:text-lg font-semibold pt-6'>Most recent search</p>
                <span className='flex gap-3 items-center pt-3 pb-1'>
                    <ClockIcon/>
                    Hairdryer
                </span>

                <span className='flex gap-3 items-center py-1'>
                    <ClockIcon/>
                    Phonecase
                </span>

                <span className='flex gap-3 items-center py-1'>
                    <ClockIcon/>
                    Lipstick
                </span>
            </div>
        </div>
    </div>
  );
}

export default SearchResults;
