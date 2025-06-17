'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'
import HeaderButton from './header-button'
import Searchbar from './searchbar'
import { useCart } from '@/app/context/cart-context'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const { cart, favorites } = useCart()
  const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, translateY: '-10%' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.4,
        scale: {
          type: 'spring',
          visualDuration: 0.3,
          bounce: 0.5
        }
      }}
      className="w-[calc(100%-16px)] lg:max-w-[1240px] fixed top-4 p-2 flex items-center justify-between rounded-full h-16 bg-white/50 backdrop-blur-sm left-2 lg:left-1/2 lg:-translate-x-1/2 z-20 shadow"
    >
      <div className="flex items-center">
        <Link
          href="/"
          className="h-12 mr-1.5 font-medium p-1 text-lg bg-black/5 rounded-full py-2 px-4 hover:bg-black/10"
          title="nitec."
        >
          nitec.
        </Link>

        <Searchbar active={isSearchActive} />
      </div>

      <div className="flex items-center space-x-1.5">
        <HeaderButton name="cart" count={cart.length} />
        <HeaderButton name="favorites" count={favorites.length} />
        <button
          type="button"
          className="size-12 flex justify-center items-center rounded-full bg-zinc-800 shadow cursor-pointer md:hidden"
          onClick={() => setIsSearchActive(!isSearchActive)}
        >
          <Search size={20} className="text-white" />
        </button>

        <button
          type="button"
          className="hidden lg:flex bg-white h-12 pl-5 pr-14 rounded-full cursor-pointer font-semibold items-center gap-2 shadow text-[14px] relative"
        >
          Ryman Alex
          <span className="w-10 h-10 absolute right-2 border-2 border-solid border-zinc-200 rounded-full bg-zinc-100 overflow-hidden">
            <Image
              src="/faces/face-1.png"
              alt="Ryman Alex"
              width={40}
              height={40}
            />
          </span>
        </button>
      </div>
    </motion.header>
  )
}
