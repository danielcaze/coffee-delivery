import { createContext, ReactNode, useState } from 'react'

const PurchaseInterfaceInitialValue = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  neighbourhood: '',
  city: '',
  province: '',
  paymentMethod: '',
}

type PurchaseType = typeof PurchaseInterfaceInitialValue

interface PurchaseContextProp {
  purchaseCreation: (purchase: PurchaseType) => void
  purchase: PurchaseType
}

export const PurchaseContext = createContext({} as PurchaseContextProp)

interface PurchaseProviderProps {
  children: ReactNode
}

export function PurchaseProvider({ children }: PurchaseProviderProps) {
  const [purchase, setPurchase] = useState<PurchaseType>(
    PurchaseInterfaceInitialValue,
  )
  const value = {
    purchaseCreation,
    purchase,
  }

  function purchaseCreation(purchase: PurchaseType) {
    setPurchase(purchase)
  }

  return (
    <PurchaseContext.Provider value={value}>
      {children}
    </PurchaseContext.Provider>
  )
}
