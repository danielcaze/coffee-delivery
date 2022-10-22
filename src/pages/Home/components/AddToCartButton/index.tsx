import { ShoppingCart } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { NavButton } from '../../../../components/Header/components/NavButton'

export function AddToCartButton({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <NavButton variation={'purple'} {...rest}>
      <ShoppingCart weight={'fill'} size={22} />
    </NavButton>
  )
}
