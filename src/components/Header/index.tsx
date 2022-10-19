import LogoCoffeeDelivery from '/assets/logo-coffee-delivery.svg'
import { HeaderContainer, NavButtonsWrapper } from './styles'
import { NavButton } from './components/NavButton'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={LogoCoffeeDelivery} alt="" />
      </div>
      <nav>
        <NavButton variation={'purple'}>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </NavButton>
        <NavButton variation={'yellow'}>
          <ShoppingCart size={22} weight="fill" />
        </NavButton>
      </nav>
    </HeaderContainer>
  )
}
