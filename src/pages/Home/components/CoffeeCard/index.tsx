import { ShoppingCart } from 'phosphor-react';
import CoffeeUrl from '../../../../assets/Coffee.png'
import { NavButton } from '../../../../components/Header/components/NavButton';
import { QuantityButton } from '../QuantityButton';
import { AddToCartContainer, CoffeeCardContainer, CoffeeTagContainer, TextContainer } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeUrl} alt="" />
      <div>
        <CoffeeTagContainer>
          Tradicional
        </CoffeeTagContainer>

        <div>
          <TextContainer>
            <strong>Expresso Tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </TextContainer>

          <AddToCartContainer>
            <span> 9,90</span>

            <div>
              <QuantityButton />

              <NavButton color={'purple'}>
                <ShoppingCart weight={'fill'} size={22} />
              </NavButton>
            </div>
          </AddToCartContainer>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
