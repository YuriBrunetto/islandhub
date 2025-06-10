'use client'

import { Search } from 'lucide-react'
import * as motion from 'motion/react-client'
import { useState } from 'react'

export default function Searchbar() {
  const [focused, setFocused] = useState(false)

  const variants = {
    initial: {
      width: '20rem'
    },
    expanded: {
      width: '32rem'
    }
  }

  return (
    <motion.div
      className="h-12 px-8 pr-16 flex items-center relative rounded-full bg-white shadow transition-all"
      variants={variants}
      initial="initial"
      transition={{ type: 'spring', stiffness: 50, duration: 100 }}
      animate={focused ? 'expanded' : 'initial'}
    >
      <input
        type="text"
        name="search"
        placeholder="Search products..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="font-medium border-none w-full focus:outline-none"
      />
      <button
        type="button"
        className="w-12 cursor-pointer flex-grow shrink-0 basis-0 h-12 rounded-full absolute right-0 bottom-0 bg-zinc-800 flex items-center justify-center"
      >
        <Search color="#ffffff" size={20} />
      </button>
    </motion.div>
  )
}
