import { createContext, ReactNode, useState } from 'react'

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
  purchase: PurchaseInterface | null
}

export const PurchaseContext = createContext({} as PurchaseContextProp)

interface PurchaseProviderProps {
  children: ReactNode
}

export function PurchaseProvider({ children }: PurchaseProviderProps) {
  const [purchase, setPurchase] = useState<PurchaseInterface | null>(null)

  const value = {
    purchaseCreation,
    purchase,
  }

  function purchaseCreation(purchase: PurchaseInterface) {
    setPurchase(purchase)
  }

  return (
    <PurchaseContext.Provider value={value}>
      {children}
    </PurchaseContext.Provider>
  )
}
