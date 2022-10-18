import { ShoppingCart } from 'phosphor-react'
import { NavButton } from '../../../../components/Header/components/NavButton'

export function AddToCartButton() {
  return (
    <NavButton color={'purple'}>
      <ShoppingCart weight={'fill'} size={22} />
    </NavButton>
  )
}
