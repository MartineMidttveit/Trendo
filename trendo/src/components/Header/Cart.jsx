import React from 'react';
import CartIcon from '../SVG/CartIcon';

function Cart() {
  return (
    <div className='relative'>
      <CartIcon/>
      <span className='bg-customOrange rounded-full h-6 w-6 absolute flex items-center justify-center text-sm font-medium bottom-5 left-8'>
        1
      </span>
    </div>
  );
}

export default Cart;