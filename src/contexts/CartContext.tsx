import { createContext, ReactNode, useState } from 'react'

interface CartItem {
  id: string
  name: string
  icon: string
  price: string
  quantity: number
}
interface CartContextProps {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  const value = {
    cart,
    addToCart,
    removeFromCart,
  }

  function addToCart(item: CartItem) {
    const arrayItems = cart.map((item) => item.id)
    const cartHasItem = arrayItems.includes(item.id)
    const newArray = cart.map((prevState) => {
      if (prevState.id === item.id) {
        const itemAfterQuantityUpdate = {
          ...prevState,
          quantity: prevState.quantity + item.quantity,
        }
        return itemAfterQuantityUpdate
      }
      return prevState
    })
    setCart((prevState) => {
      if (cartHasItem) {
        return newArray
      }
      return [...prevState, item]
    })
  }

  function removeFromCart(id: string) {
    setCart((prevState) => prevState.filter((item) => item.id !== id))
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
