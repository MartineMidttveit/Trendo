import React from 'react';

function Thumbnail() {
  return (
    <div className="w-full">

{/* Product image */}
      <div className="relative hover:opacity-90 duration-100">
        <img src="/hairdryer.jpg" alt="" className='h-96 2xl:h-[30rem] object-cover'/>
        <span className='bg-customGrey absolute top-5 right-5 px-5 py-1 font-medium'>
          SALE
        </span>
      </div>

{/* Product text */}
        <div className="text-primary text-left mt-4 flex flex-col gap-3 2xl:text-lg">
          <h2 className="font-bold text-xl">Product title here</h2>
          <p>
            A short description of the product to go underneath the title here, so that it looks allright...
          </p>

          <div className='flex gap-3'>
            <p className='line-through text-red-800'>$ 150.00</p>
            <p className='font-medium'>$ 100.00</p>
          </div>
        </div>
    </div>
  );
}

export default Thumbnail;
