import React from 'react'
import MinusCircleIcon from '../components/SVG/MinusCircleIcon'
import PlusCircleIcon from '../components/SVG/PlusCircleIcon'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import useCurrencyFormatter from '../hooks/useCurrencyFormatter'


const Cart = () => {
  const { cart, totalPrice, increaseQuantity, decreaseQuantity } = useCart()
  const formattedPrice = useCurrencyFormatter()

  return (
    <div className='flex flex-col lg:flex-row'>
      <div
        className='font-barlow bg-customGrey lg:w-2/3 w-full wrapper'
        style={{
          height: 'calc(100vh - 9.1rem)'
        }}
      >
        <div className='my-16'>
          <div className='flex flex-col text-left gap-5'>
            <strong className='font-semibold text-3xl'>
              Shopping cart
            </strong>
            <strong className='text-lg font-normal'>
              <span className='font-semibold'>{cart.length} items</span>{' '}
              in your shopping cart
            </strong>
          </div>




          <div className='mt-12 bg-white rounded p-6'>
            <div className="grid-cols-3 gap-6 text-lg 2xl:grid hidden">
              <div className="text-left font-semibold">Product</div>
              <div className="font-semibold">Price</div>
              <div className="text-left font-semibold">Quantity</div>
            </div>


            <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-6 items-center justify-items-start xl:justify-items-stretch py-4 border-b">
              {cart.map(product => (
                <React.Fragment key={product.id}>
                  <div className="flex items-center space-x-6">
                    <img className="w-32 rounded object-cover" src={product.image.url} alt={product.image.alt} />

                    <div className='lg:hidden flex flex-col justify-start items-start gap-3'>
                      <div className='flex flex-col gap-1'>
                        {product.tags.map(tag => (
                          <div className="text-base text-gray-neutral text-left leading-none capitalize">{tag}</div>
                        ))}

                        <div className="font-semibold text-lg">{product.title}</div>
                      </div>
                      <div className='flex gap-1'>
                        <span className="text-gray-400 line-through">{formattedPrice(product?.price)}</span>
                        <span className="font-bold">{formattedPrice(product?.discountedPrice)}</span>
                      </div>

                      <div className='items-center gap-5 flex'>
                        <button type='button' onClick={() => decreaseQuantity(product.id)}>
                          <MinusCircleIcon />
                        </button>
                        <span className='font-semibold text-lg'>{product.quantity}</span>
                        <button type='button' onClick={() => increaseQuantity(product.id)}>
                          <PlusCircleIcon />
                        </button>
                      </div>
                    </div>
                    <div className='hidden lg:block space-y-1.5'>
                      {product.tags.map(tag => (
                        <div className="text-base text-gray-neutral text-left leading-none capitalize">{tag}</div>
                      ))}

                      <div className="font-semibold text-base text-left capitalize leading-none">{product.title}</div>
                    </div>
                  </div>
                  <div className='lg:flex-col lg:gap-0 gap-2.5 lg:flex hidden'>
                    <span className="text-gray-400 line-through">{formattedPrice(product?.price)}</span>
                    <span className="font-bold">{formattedPrice(product?.discountedPrice)}</span>
                  </div>

                  <div className='items-center gap-5 hidden lg:flex'>
                    <button type='button' onClick={() => decreaseQuantity(product.id)}>
                      <MinusCircleIcon />
                    </button>
                    <span className='font-semibold text-lg'>{product.quantity}</span>
                    <button type='button' onClick={() => increaseQuantity(product.id)}>
                      <PlusCircleIcon />
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper mt-20 space-y-9'>
        <div className='bg-customGrey w-full lg:w-[28.125rem] h-[18.688rem] p-10 rounded'>
          <strong className='text-lg font-semibold block text-left mb-6'>Cart summary</strong>
          <div className='flex items-center justify-between'>
            <span className='text-lg'>Subtotal:</span>
            <div>
              {cart.map(product => (
                <div key={product.id} className='flex flex-col items-end'>
                  <span className='font-semibold'>{product.title} {product.quantity}x</span>
                  <span>{formattedPrice(product.discountedPrice * product.quantity)}</span>
                </div>
              ))}
            </div>

          </div>

          <div className='flex items-center justify-between'>
            <span className='text-lg'>Taxes:</span>
            <span>$ 2</span>
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-lg'>Shipping:</span>
            <span className='text-lg italic'>FREE</span>
          </div>

          <div className='h-px w-full bg-black my-9' />


          <div className='flex items-center justify-between text-lg font-semibold'>
            <span>Total:</span>
            <span>{formattedPrice(totalPrice)}</span>
          </div>
        </div>

        <div className='bg-customGrey w-full lg:w-[28.125rem] p-10 rounded'>
          <strong className='text-lg font-semibold block text-left mb-6'>Got a gift card or coupon code?</strong>
          <input className='w-full h-14 bg-white border border-black rounded-md px-5' placeholder='Coupon code' />
        </div>

        <div className='flex lg:gap-2.5 gap-5 lg:flex-row flex-col pb-10'>
          <Link className='lg:w-2/4 w-full' to="/">
            <button className='rounded ring-1 ring-black uppercase p-4 w-full'>Shop More</button>
          </Link>
          <Link className='lg:w-2/4 w-full' to="/checkout">
            <button className='rounded bg-beige-reddish uppercase p-4 w-full'>Checkout</button>
          </Link>
        </div>
      </div>

    </div>

  )
}

export default Cart
