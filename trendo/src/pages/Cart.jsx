import React from 'react'
import MinusCircleIcon from '../components/SVG/MinusCircleIcon'
import PlusCircleIcon from '../components/SVG/PlusCircleIcon'


const Cart = () => {
  return (
    <>
      <div className='bg-customGrey h-full absolute bottom-0 w-2/3 -z-10 lg:block hidden' />

      <div className='wrapper font-barlow my-16'>

        <div className='flex flex-col text-left gap-5'>
          <strong className='font-semibold text-3xl'>
            Shopping cart
          </strong>
          <strong className='text-lg font-normal'>
            <span className='font-semibold'>2 items</span>{' '}
            in your shopping cart
          </strong>
        </div>


        <div className='bg-white grid grid-cols-3 mt-12 max-w-[45.313rem] gap-9 px-12 py-14'>
          <div className='space-y-8 w-fit'>
            <strong className='font-semibold text-lg text-left block'>Product</strong>
            <div className='flex items-center gap-9'>
              <div className='object-cover w-[8.5rem] h-[8.5rem] bg-black' />
              <div className='flex flex-col justify-start !text-left'>
                <span className='text-base'>Beauty</span>
                <span className='text-lg font-semibold'>Hairdryer</span>
              </div>
            </div>
          </div>

          <div className='space-y-20 w-fit ml-20'>
            <strong className='font-semibold text-lg text-left block'>Price</strong>

            <div className='flex flex-col justify-start !text-left -translate-y-1.5'>
              <span className='text-base text-gray-neutral line-through'>$ 59.90</span>
              <span className='text-lg font-semibold'>$ 59.90</span>
            </div>
          </div>

          <div className='space-y-24 w-fit'>
            <strong className='font-semibold text-lg text-left block'>Quantity</strong>

            <div className='flex items-center gap-5'>
              <button type='button'>
                <MinusCircleIcon />
              </button>
              <span className='font-semibold text-lg'>1</span>
              <button type='button'>
                <PlusCircleIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Cart
