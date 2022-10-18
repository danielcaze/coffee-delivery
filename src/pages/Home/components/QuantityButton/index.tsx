import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'

export function QuantityButton() {
  return (
    <QuantityButtonContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <p>1</p>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityButtonContainer>
  )
}
