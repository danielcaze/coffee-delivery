import { createContext, ReactNode, useState } from "react";

interface CartContextProps {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartItem {
  id: string,
  name: string,
  icon: string,
  price: string,
  quantity: number
}

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  const value = {
    cart,
    addToCart,
    removeFromCart
  }

  function addToCart(item: CartItem) {
    setCart(prevState => [...prevState, item])
  }

  function removeFromCart(id: string) {
    setCart(prevState => prevState.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}