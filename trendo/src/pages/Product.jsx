import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productContext } from '../components/Providers'
import { useCart } from '../hooks/useCart'
import ChevronRight from '../components/SVG/ChevronRight'
import StarIcon from '../components/SVG/StarIcon'
import useCurrencyFormatter from '../hooks/useCurrencyFormatter'
import HeartIcon from '../components/SVG/HeartIcon'

const Product = () => {
  const { productId } = useParams()
  const { products } = useContext(productContext)
  const { addItemToCart } = useCart()

  const formattedPrice = useCurrencyFormatter()
  const product = products?.find(product => product.id === productId)
  const hasMoreThanOneReview = product?.reviews.length > 1

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex wrapper bg-customGrey flex-col lg:flex-row w-full'>
      <div className='lg:h-screen lg:w-2/5 lg:block relative'>

        <div className='py-12 lg:py-20 flex justify-center font-barlow flex-col xl:flex-row'>
          <div className='relative flex justify-center'>
            <img className='object-cover rounded w-2/3 lg:w-full aspect-square' src={product?.image.url} alt={product?.image.alt} />
            <span className='bg-customGrey absolute top-6 rounded right-6 px-5 py-1 uppercase font-medium shadow-md text-sm lg:text-base'>sale</span>
          </div>
        </div>
      </div>

      <div className='space-y-11 flex flex-col bg-white py-[4.5rem] px-14 lg:w-1/2 w-full'>
          <div className='flex items-center gap-2 lg:gap-4 flex-wrap text-sm md:text-base lg:text-lg'>
            <span className='text-secondary font-medium'>All products</span>
            {product?.tags.map((tag, index) => (
              <React.Fragment key={index + 1}>
                <ChevronRight className='fill-secondary' />
                <span className='font-medium capitalize text-secondary'>
                  {tag}
                </span>
              </React.Fragment>
            ))}
            <ChevronRight className='fill-black' />
            <span className='font-medium capitalize text-black'>
              {product?.title}
            </span>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <h1 className='text-3xl font-semibold'>{product?.title}</h1>
            <div className='flex items-center gap-5 flex-wrap'>
              {product?.rating === 0 ? <span className='text-secondary text-lg'>No reviews yet</span> :
                <>
                  <div className='flex items-center gap-1.5'>
                    {Array(Math.floor(product?.rating || 0)).fill(0).map((_, index) => (
                      <StarIcon key={index + 1} />
                    ))}

                    {product?.rating % 1 !== 0 && (
                      <div className='relative'>
                        <StarIcon />
                        <div className='absolute bg-white size-5 top-0 left-2/4' />
                      </div>
                    )}
                  </div>

                  <span className='text-lg font-medium'>{product?.rating.toFixed(1)} / 5.0</span>

                  <span className='text-secondary text-lg'>
                    (based on {product?.reviews.length}{' '}
                    {hasMoreThanOneReview ? 'reviews' : 'review'})
                  </span>
                </>}

            </div>
          </div>

          <div className='flex items-start justify-start lg:gap-7 lg:flex-row flex-col lg:items-center'>
            {product?.price > product?.discountedPrice ?
              <>
                <span className='font-semibold text-2xl'>{formattedPrice(product?.discountedPrice)}</span>
                <span className='font-semibold text-xl line-through text-secondary'>{formattedPrice(product?.price)}</span>
              </> :
              <span className='font-semibold text-2xl'>{formattedPrice(product?.price)}</span>
            }
          </div>

          <span className='text-lg leading-5 text-left block'>{product?.description}</span>

          <div className='flex items-center gap-8 lg:flex-row flex-col'>
            <button type='button' className='bg-customOrange text-black text-lg max-w-[10.438rem] h-11 w-full rounded-[38px]' onClick={() => addItemToCart(product)}>Add to cart</button>
            <button type='button' className='flex items-center gap-3 text-lg'><HeartIcon /> Save to wishlist</button>
          </div>

          <p className='text-secondary text-lg leading-none text-left'>Standard delivery in 4-5 days or Express Shipping 1-2 days.</p>
        </div>
      </div>
  )
}

export default Product
