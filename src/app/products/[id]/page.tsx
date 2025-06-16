import ActionButton from '@/components/common/action-button'
import AsideComponent from '@/components/common/aside'
import Rating from '@/components/home/rating'
import products from '@/data/products.json'
import { Truck } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type ProductsPageProps = {
  params: {
    id: string
  }
}

export default function ProductsPage({ params }: ProductsPageProps) {
  const product = products.find(p => p.id === params.id)

  if (!product) return notFound()

  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div className="col-span-4">
        <article className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl">
          <div className="flex">
            <Image
              src="/airpods.jpg"
              alt={product.name}
              width={300}
              height={300}
              className="rounded-2xl overflow-hidden mr-4"
            />
            <div className="flex flex-col items-start">
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
                <ActionButton isLink={false} title="Add to cart" icon="cart" />
                <button
                  type="button"
                  className="bg-white/70 rounded-full font-medium cursor-pointer px-4 transition-all shadow hover:shadow-md"
                >
                  Add to favorites
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-xl">Tech specs</p>
            <p className="mt-1 text-zinc-600">{product.techSpecs}</p>
          </div>
        </article>
      </div>

      <AsideComponent />
    </div>
  )
}
