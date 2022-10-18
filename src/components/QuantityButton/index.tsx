import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { QuantityButtonContainer } from './styles'

export function QuantityButton() {
  const [quantity, setQuantity] = useState(0)

  function handleAddQuantity() {
    setQuantity(prev => prev + 1);
  }

  function handleRemoveQuantity() {
    setQuantity(prev => prev - 1);
  }

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
