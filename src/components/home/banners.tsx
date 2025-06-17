import Image from 'next/image'
import ActionButton from '../common/action-button'
import products from '@/data/products.json'

function SocialButton() {
  return (
    <a href="#" title="TikTok" className="w-8 h-8 rounded-full bg-white"></a>
  )
}

export default function Banners() {
  const randomIndex = Math.floor(Math.random() * products.length)
  const product = products[randomIndex]

  return (
    <section className="bg-white/70 backdrop-blur-sm p-6 lg:p-8 rounded-2xl">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col items-start lg:max-w-[50%]">
          <span className="text-[12px] rounded-full px-4 py-2 bg-white/70 shadow">
            🎛️ Music is classic
          </span>

          <div className="mt-4">
            <div className="">
              <h2 className="text-2xl lg:text-4xl font-semibold lg:max-w-[80%]">
                {product.name}
              </h2>
              <div className="flex items-center space-x-4 mt-2 lg:mt-4">
                <span className="font-bold text-3xl hidden">0{product.id}</span>
                <span className="text-sm opacity-10 hidden">-------------</span>
                <div className="lg:pr-4">
                  <p className="font-medium text-lg">{product.brand}</p>
                  <p className="text-zinc-500">{product.description}</p>
                </div>
              </div>
            </div>
          </div>

          <ActionButton
            isLink
            href={`/products/${product.id}`}
            title="Buy now"
            icon="arrow"
            className="mt-4"
          />
        </div>

        <div className="mt-6 lg:mt-0">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-2xl overflow-hidden mr-4"
          />
        </div>
      </div>
      <div className="flex items-center mt-12">
        <span className="text-sm">Follow us on:</span>

        <div className="flex items-center space-x-2 ml-2">
          <SocialButton />
          <SocialButton />
          <SocialButton />
          <SocialButton />
        </div>
      </div>
    </section>
  )
}
