'use client'

import { useCart } from '@/app/context/cart-context'
import { Product } from '@/types/product'
import { Truck } from 'lucide-react'
import Image from 'next/image'
import ActionButton from '../common/action-button'
import Rating from '../home/rating'
import Reviews from './reviews'

export default function ProductDetail({ product }: { product: Product }) {
  const { addToCart, addToFavorites } = useCart()

  return (
    <article className="bg-white/70 backdrop-blur-sm p-4 lg:p-8 rounded-2xl">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:mr-4">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-2xl overflow-hidden"
          />
        </div>
        <div className="flex flex-col items-start mt-4 lg:mt-0">
          <Rating />

          <h1 className="text-2xl font-semibold mt-2">{product.name}</h1>
          <p className="mt-1 text-zinc-600">{product.description}</p>

          <div className="mt-4 flex flex-col items-start">
            <span className="bg-zinc-800 uppercase flex items-center text-[12px] font-bold text-lime-200 rounded py-1 px-2">
              <Truck className="mr-1" size={16} />
              Free shipping
            </span>
            <p className="font-semibold mt-1">
              <span className="text-4xl">${product.price.toFixed(2)}</span>
            </p>
          </div>

          <div className="mt-4 flex space-x-2">
            <ActionButton
              title="Add to cart"
              icon="cart"
              handleAction={() => addToCart(product)}
            />

            <button
              type="button"
              className="bg-white/70 h-10 rounded-full font-medium cursor-pointer px-4 leading-4 transition-all shadow hover:shadow-md"
              onClick={() => addToFavorites(product)}
            >
              Add to favorites
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-xl">Tech specs</h3>
        <p className="mt-1 text-zinc-600">{product.techSpecs}</p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-xl">Reviews</h3>
        <Reviews />
      </div>
    </article>
  )
}
