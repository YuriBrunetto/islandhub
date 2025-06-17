'use client'

import products from '@/data/products.json'
import { Product } from '@/types/product'
import { Search } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function Results({ products }: { products: Product[] }) {
  return (
    products.length > 0 && (
      <motion.div
        initial={{ opacity: 0, translateY: '-10%' }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: '-10%' }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-13 py-2 rounded-2xl bg-white/80 w-full z-10 backdrop-blur-sm shadow overflow-hidden"
      >
        <div className="flex flex-col">
          {products?.map(product => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              title={product.name}
              className="font-semibold py-2 text-zinc-600 px-4 transition-all hover:bg-zinc-50"
            >
              {product.name.toLowerCase()}
            </Link>
          ))}
        </div>
      </motion.div>
    )
  )
}

export default function Searchbar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [focused, setFocused] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setQuery('')
  }, [pathname])

  useEffect(() => {
    if (query.length < 3) {
      setResults([])
      return
    }

    const filtered = products
      .filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 3)

    setResults(filtered)
  }, [query])

  const variants = {
    initial: {
      width: '20rem'
    },
    expanded: {
      width: '24rem'
    }
  }

  return (
    <div className="hidden lg:block relative">
      <Results products={results} />

      <motion.div
        className="h-12 px-8 pr-16 flex items-center relative rounded-full bg-white shadow transition-all"
        variants={variants}
        initial="initial"
        transition={{ type: 'ease', duration: 0.3 }}
        animate={focused ? 'expanded' : 'initial'}
      >
        <input
          type="text"
          name="search"
          placeholder="Search products..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => setQuery(e.target.value)}
          className="font-medium border-none w-full focus:outline-none"
          value={query}
        />
        <button
          type="button"
          className="w-12 cursor-pointer flex-grow shrink-0 basis-0 h-12 rounded-full absolute right-0 bottom-0 bg-zinc-800 flex items-center justify-center"
        >
          <Search color="#ffffff" size={20} />
        </button>
      </motion.div>
    </div>
  )
}
