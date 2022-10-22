import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer } from './styles'
import { NavButton } from './components/NavButton'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={LogoCoffeeDelivery} alt="" />
        </Link>
      </div>
      <nav>
        <NavButton variation={'purple'}>
          <MapPin size={22} weight="fill" />
          João Pessoa, PB
        </NavButton>
        <Link to="/checkout">
          <NavButton variation={'yellow'}>
            <ShoppingCart size={22} weight="fill" />
          </NavButton>
        </Link>
        {cart.length > 0 && <div className="quantity">{cart.length}</div>}
      </nav>
    </HeaderContainer>
  )
}
