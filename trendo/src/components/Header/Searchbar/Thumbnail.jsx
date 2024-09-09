
import React from 'react';
import StarIcon from '../../SVG/StarIcon';

function Thumbnail() {

  return (
    <div className='flex py-4 items-start w-full hover:bg-customDarkGray duration-75 px-12'>
        <img src="/hairdryer.jpg" alt="" className='h-20 w-20 object-cover border' />

        <div className='flex flex-col w-full'>
            <div className='flex w-full items-center justify-between pl-10'>
                <p className='font-semibold 2xl:text-lg'>Product title here</p>
                <span className='flex items-center gap-1 font-medium'>
                    <StarIcon/>
                    3.5
                </span>
            </div>
            <p className='pl-10 font-medium'>$150.00</p>
        </div>
    </div>
  );
}

export default Thumbnail;

