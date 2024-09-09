import React from 'react';
import Thumbnail from './Thumbnail';

function Cards({products}) {


  return (
    <div className='grid 2xl:grid-cols-4 wrapper mx-auto pt-8 pb-16 gap-4 2xl:gap-x-6 2xl:gap-y-10'>
   {products && products.map(product => <Thumbnail key={product.id} product={product} />)}
    </div>
  );
}

export default Cards;


