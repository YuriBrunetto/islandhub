import * as motion from 'motion/react-client'
import Image from 'next/image'
import ActionButton from '../common/action-button'
import products from '@/data/products.json'
import { SocialIcon } from 'react-social-icons'

export default function Banners() {
  const randomIndex = Math.floor(Math.random() * products.length)
  const product = products[randomIndex]

  return (
    <motion.section
      initial={{ opacity: 0, translateX: '-5%' }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 0.4,
        scale: {
          type: 'spring',
          visualDuration: 0.3,
          bounce: 0.5
        }
      }}
      className="bg-white/70 backdrop-blur-sm p-6 lg:p-8 rounded-2xl"
    >
      <div className="flex flex-col md:flex-row justify-between">
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

        <div className="mt-6 md:mt-0 md:pl-4">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-2xl overflow-hidden lg:ml-4"
          />
        </div>
      </div>
      <div className="flex items-center mt-4">
        <span className="text-sm">Follow us on:</span>

        <div className="flex items-center space-x-2 ml-2">
          <SocialIcon
            url="https://www.islandhub.com"
            target="_blank"
            network="tiktok"
            bgColor="#ffffff"
            fgColor="#222222"
            style={{
              width: 32,
              height: 32
            }}
          />
          <SocialIcon
            url="https://www.islandhub.com"
            target="_blank"
            network="instagram"
            bgColor="#ffffff"
            fgColor="#222222"
            style={{
              width: 32,
              height: 32
            }}
          />
          <SocialIcon
            url="https://www.islandhub.com"
            target="_blank"
            network="linkedin"
            bgColor="#ffffff"
            fgColor="#222222"
            style={{
              width: 32,
              height: 32
            }}
          />
        </div>
      </div>
    </motion.section>
  )
}
