import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface PurchaseInterface {
  id: string
  cep: string
  street: string
  number: string
  neighbourhood: string
  city: string
  province: string
  paymentMethod: string
  complement?: string
}
interface PurchaseContextProp {
  purchaseCreation: (purchase: PurchaseInterface) => void
  purchases: PurchaseInterface[]
}

export const PurchaseContext = createContext({} as PurchaseContextProp)

interface PurchaseProviderProps {
  children: ReactNode
}

export function PurchaseProvider({ children }: PurchaseProviderProps) {
  const [purchases, setPurchases] = useState<PurchaseInterface[]>([])

  const value = {
    purchaseCreation,
    purchases,
  }

  function purchaseCreation(purchase: PurchaseInterface) {
    setPurchases((prevState) => [...prevState, purchase])
    storeInLocalStorage(purchase)
  }

  function storeInLocalStorage(data: PurchaseInterface) {
    localStorage.setItem(
      '@coffee-delivery:orders-1.0.0',
      JSON.stringify([...purchases, data]),
    )
  }

  useEffect(() => {
    async function getOrders() {
      try {
        await api
          .get('orders')
          .then((response) => setPurchases(response.data.orders))
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
  }, [])

  return (
    <PurchaseContext.Provider value={value}>
      {children}
    </PurchaseContext.Provider>
  )
}
