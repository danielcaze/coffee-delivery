import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'

interface QuantityButtonProps {
  handleRemoveQuantity: () => void
  handleAddQuantity: () => void
  quantity: number
}

export function QuantityButton({
  handleAddQuantity,
  handleRemoveQuantity,
  quantity,
}: QuantityButtonProps) {
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
