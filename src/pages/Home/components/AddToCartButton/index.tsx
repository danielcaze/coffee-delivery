import { ShoppingCart } from 'phosphor-react'
import { Attributes } from 'react'
import { NavButton } from '../../../../components/Header/components/NavButton'

export function AddToCartButton({ ...rest }: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <NavButton variation={'purple'} {...rest}>
      <ShoppingCart weight={'fill'} size={22} />
    </NavButton>
  )
}
