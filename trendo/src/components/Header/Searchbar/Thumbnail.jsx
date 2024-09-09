
import React from 'react';
import StarIcon from '../../SVG/StarIcon';

function Thumbnail({product}) {

  return (
    <div className='flex py-4 items-start w-full hover:bg-customDarkGray duration-75 px-12'>
        <img src={product.image.url} alt="Product image" className='h-20 w-20 object-cover border border-secondary aspect-square' />

        <div className='flex flex-col w-full'>
            <div className='flex w-full items-center justify-between pl-8'>
                <p className='font-semibold 2xl:text-lg'>{product.title}</p>
                <span className='flex items-center gap-1 font-medium'>
                    <StarIcon/>
                    {product.rating}
                </span>
            </div>

            <div className='flex gap-3 pl-8'>
              {product.discountedPrice < product.price && <p className='line-through text-red-800'>$ {product.price}</p>}
              <p className='font-medium'>$ {product.discountedPrice}</p>
            </div>
          
        </div>
    </div>
  );
}

export default Thumbnail;

