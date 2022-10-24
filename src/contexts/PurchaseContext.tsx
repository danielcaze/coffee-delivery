import { createContext, ReactNode, useState } from 'react'

const PurchaseInterfaceInitialValue = {
  id: '',
  cep: '',
  street: '',
  number: '',
  neighbourhood: '',
  city: '',
  province: '',
  paymentMethod: '',
}

type PurchaseType = typeof PurchaseInterfaceInitialValue

interface PurchaseInterface extends PurchaseType {
  complement?: string
}

interface PurchaseContextProp {
  purchaseCreation: (purchase: PurchaseType) => void
  purchase: PurchaseType
}

export const PurchaseContext = createContext({} as PurchaseContextProp)

interface PurchaseProviderProps {
  children: ReactNode
}

export function PurchaseProvider({ children }: PurchaseProviderProps) {
  const [purchase, setPurchase] = useState<PurchaseInterface>(
    PurchaseInterfaceInitialValue,
  )
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
