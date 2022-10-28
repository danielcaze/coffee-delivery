import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffees } from '../mocks/Coffees'

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
  handleQuantity: (
    item: CartItem,
    operation: 'add' | 'remove',
    quantity: number,
  ) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(
      '@coffee-delivery:coffees-1.0.0',
    )
    if (storagedCartItems) {
      return JSON.parse(storagedCartItems)
    }
    return []
  })

  const value = {
    cart,
    addToCart,
    removeFromCart,
    handleQuantity,
  }

  function addToCart(item: CartItem) {
    const initialItemPrice = Coffees.filter(
      (coffee) => coffee.name === item.name,
    )[0]?.price
    const arrayItems = cart.map((item) => item.id)
    const cartHasItem = arrayItems.includes(item.id)
    const newArray = cart.map((prevState) => {
      if (prevState.id === item.id) {
        const itemAfterQuantityUpdate = {
          ...prevState,
          quantity: prevState.quantity + item.quantity,
          price: String(Number(initialItemPrice) * item.quantity),
        }
        return itemAfterQuantityUpdate
      }
      return prevState
    })
    setCart((prevState) => {
      if (cartHasItem) {
        return newArray
      }
      return [
        ...prevState,
        {
          ...item,
          price: String(Number(initialItemPrice) * item.quantity),
        },
      ]
    })
  }

  function removeFromCart(id: string) {
    setCart((prevState) => prevState.filter((item) => item.id !== id))
  }

  function handleQuantity(
    item: CartItem,
    operation: 'add' | 'remove',
    quantity: number,
  ) {
    const initialItemPrice = Coffees.filter(
      (coffee) => coffee.name === item.name,
    )[0]?.price
    switch (operation) {
      case 'add':
        setCart(
          cart.map((prevState) => {
            if (prevState.id === item.id) {
              const itemAfterQuantityUpdate = {
                ...prevState,
                quantity: prevState.quantity + 1,
                price: String(
                  Number(prevState.price) + Number(initialItemPrice),
                ),
              }
              return itemAfterQuantityUpdate
            }
            return prevState
          }),
        )
        break
      case 'remove':
        if (quantity - 1 === 0) {
          return removeFromCart(item.id)
        }
        setCart(
          cart.map((prevState) => {
            if (prevState.id === item.id) {
              const itemAfterQuantityUpdate = {
                ...prevState,
                quantity: prevState.quantity - 1,
                price: String(
                  Number(prevState.price) - Number(initialItemPrice),
                ),
              }
              return itemAfterQuantityUpdate
            }
            return prevState
          }),
        )
        break
    }
  }

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:coffees-1.0.0', JSON.stringify(cart))
  }, [cart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
