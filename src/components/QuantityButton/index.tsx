import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { QuantityButtonContainer } from './styles'

interface QuantityButton {
  handleRemoveQuantity: () => void
  handleAddQuantity: () => void
  quantity: number
}

export function QuantityButton({ handleAddQuantity, handleRemoveQuantity, quantity }: QuantityButton) {


  return (
    <QuantityButtonContainer>
      <button onClick={handleRemoveQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <p>{quantity}</p>
      <button onClick={handleAddQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityButtonContainer>
  )
}
