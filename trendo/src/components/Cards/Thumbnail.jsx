import React from 'react';

function Thumbnail({product}) {
  return (
    <div className="w-full">

{/* Product image */}
      <div className="relative hover:opacity-90 duration-100">
        <img src={product.image.url} alt="Product image" className='h-96 2xl:h-[30rem] object-cover w-full'/>
          {product.discountedPrice < product.price && <span className='bg-customGrey absolute top-5 right-5 px-5 py-1 font-medium shadow-md'>
          SALE
        </span>}
      </div>

{/* Product text */}
        <div className="text-primary text-left mt-4 flex flex-col gap-3 2xl:text-lg">
          <h2 className="font-bold text-xl">{product.title}</h2>
          <p>
            {product.description}
          </p>

          <div className='flex gap-3'>
            {product.discountedPrice < product.price && <p className='line-through text-red-800'>$ {product.price}</p>}
            <p className='font-medium'>$ {product.discountedPrice}</p>
          </div>
        </div>
    </div>
  );
}

export default Thumbnail;
