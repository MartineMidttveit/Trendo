import React, { useState } from 'react';
import CartIcon from '../../SVG/CartIcon';
import CartAmount from './CartAmount';

function Cart() {

  return (
    <div className='relative'>
      <div className='cursor-pointer'>
        <CartIcon />
        <CartAmount/>
      </div>

    </div>
  );
}

export default Cart;
