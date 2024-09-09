import React from 'react';
import CloseIcon from '../../SVG/CloseIcon';
import ClockIcon from '../../SVG/ClockIcon';
import StarIcon from '../../SVG/StarIcon';

function SearchResults() {
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

            <div className='hidden px-12'>
                <div className='flex flex-col gap-3 text-left'>
                    <p className='2xl:text-lg py-4'>The search for "rpkrj" gave 0 results.</p>
                    <button className='bg-customOrange 2xl:px-8 2xl:py-3 text-primary font-medium 2xl:text-lg hover:shadow-lg duration-300'>Browse products</button>
                </div>

                <div className='border-t border-secondary mt-8 w-full text-left'>
                    <p className='2xl:text-lg font-semibold pt-6'>Trending now</p>
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

{/* When there are search results */}
            

            <p className='2xl:text-lg pt-4 pb-6 pl-12'>The search for "rty" gave 3 results.</p>
            <div className='flex py-4 items-start w-full text-left hover:bg-customDarkGray duration-75 px-12'>
                <img src="/hairdryer.jpg" alt="" className='h-20 w-20 object-cover border' />

                <div className='flex flex-col w-full'>
                    <div className='flex w-full items-center justify-between pl-10'>
                        <p className='font-semibold 2xl:text-lg'>Product title here</p>
                        <span className='flex items-center gap-1'>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </span>
                    </div>
                    <p className='pl-10 font-medium'>$150.00</p>
                </div>
            </div>

            <div className='flex py-4 items-start w-full text-left hover:bg-customDarkGray duration-75 px-12'>
                <img src="/hairdryer.jpg" alt="" className='h-20 w-20 object-cover border' />

                <div className='flex flex-col w-full'>
                    <div className='flex w-full items-center justify-between pl-10'>
                        <p className='font-semibold 2xl:text-lg'>Product title here</p>
                        <span className='flex items-center gap-1'>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </span>
                    </div>
                    <p className='pl-10 font-medium'>$50.00</p>
                </div>
            </div>

            <div className='flex py-4 items-start w-full text-left hover:bg-customDarkGray duration-75 px-12'>
                <img src="/hairdryer.jpg" alt="" className='h-20 w-20 object-cover border' />

                <div className='flex flex-col w-full'>
                    <div className='flex w-full items-center justify-between pl-10'>
                        <p className='font-semibold 2xl:text-lg'>Product title here</p>
                        <span className='flex items-center gap-1'>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </span>
                    </div>
                    <p className='pl-10 font-medium'>$30.00</p>
                </div>
            </div>

            <button className='ml-12 bg-customOrange 2xl:px-16 2xl:py-3 mt-3 text-primary font-medium 2xl:text-lg hover:shadow-lg duration-300'>View all results</button> 
        </div>
    </div>
           
  );
}

export default SearchResults;
