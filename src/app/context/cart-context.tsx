'use client'

import { createContext, useContext, useState } from 'react'
import { Product } from '@/types/product'
import toast from 'react-hot-toast'

type CartContextType = {
  cart: Product[]
  favorites: Product[]
  addToCart: (product: Product) => void
  addToFavorites: (product: Product) => void
  removeFromCart: (id: string) => void
  removeFromFavorites: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])
  const [favorites, setFavorites] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product])
    toast('Product added to cart! ✅', {
      position: 'bottom-center',
      className: 'my-toaster'
    })
  }

  const addToFavorites = (product: Product) => {
    setFavorites(prev => [...prev, product])
    toast('Product added to favorites! ❤️', {
      position: 'bottom-center',
      className: 'my-toaster'
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(p => p.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        addToFavorites,
        removeFromCart,
        removeFromFavorites
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
