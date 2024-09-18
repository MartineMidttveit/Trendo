import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productContext } from '../components/Providers'
import ChevronRight from '../components/SVG/ChevronRight'
import StarIcon from '../components/SVG/StarIcon'
import useCurrencyFormatter from '../hooks/useCurrencyFormatter'
import HeartIcon from '../components/SVG/HeartIcon'

const Product = () => {
  const { productId } = useParams()
  const { products } = useContext(productContext)


  const formattedPrice = useCurrencyFormatter()
  const product = products?.find(product => product.id === productId)
  const hasMoreThanOneReview = product?.reviews.length > 1

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='relative h-full'>
      <div className='bg-customGrey h-full absolute bottom-0 w-1/3 -z-10 lg:block hidden' />

      <div className='py-[4.5rem] wrapper flex gap-[6.813rem] font-barlow flex-col xl:flex-row'>
        <img className='object-cover' src={product?.image.url} alt={product?.image.alt} />

        <div className='space-y-11 flex flex-col'>
          <div className='flex items-center gap-4 flex-wrap'>
            <span className='text-lg text-gray-neutral font-medium'>All products</span>
            {product?.tags.map((tag, index) => (
              <React.Fragment key={index + 1}>
                <ChevronRight className='fill-gray-neutral' />
                <span className='text-lg font-medium capitalize text-gray-neutral'>
                  {tag}
                </span>
              </React.Fragment>
            ))}
            <ChevronRight className='fill-black' />
            <span className='text-lg font-medium capitalize text-black'>
              {product?.title}
            </span>
          </div>


          <div className='flex flex-col items-start gap-4'>
            <h1 className='text-3xl font-semibold'>{product?.title}</h1>
            <div className='flex items-center gap-5 flex-wrap'>
              {product?.rating === 0 ? <span className='text-gray-neutral text-lg'>No reviews yet</span> :
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

                  <span className='text-gray-neutral text-lg'>
                    (based on {product?.reviews.length}{' '}
                    {hasMoreThanOneReview ? 'reviews' : 'review'})
                  </span>
                </>}

            </div>
          </div>

          <div className='flex items-start justify-start lg:gap-7 lg:flex-row flex-col lg:items-center'>
            {product?.price > product?.discountedPrice ?
              <>
                <span className='font-semibold text-2xl'>{formattedPrice(product?.price)}</span>
                <span className='font-semibold text-xl line-through text-gray-neutral'>{formattedPrice(product?.discountedPrice)}</span>
              </> :
              <span className='font-semibold text-2xl'>{formattedPrice(product?.price)}</span>
            }
          </div>


          <span className='text-lg leading-5 text-left block'>{product?.description}</span>


          <div className='flex items-center gap-8 lg:flex-row flex-col'>
            <button type='button' className='bg-[#D6A689] text-black text-lg max-w-[10.438rem] h-11 w-full rounded-[38px]'>Add to cart</button>
            <button type='button' className='flex items-center gap-3 text-lg'><HeartIcon /> Save to wishlist</button>
          </div>

          <p className='text-gray-neutral text-lg leading-none text-left'>Standard delivery in 4-5 days or Express Shipping 1-2 days.</p>
        </div>
      </div>
    </div>
  )
}

export default Product
