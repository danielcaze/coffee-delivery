import CoffeeUrl from '../../../../assets/Coffee.png'
import { QuantityButton } from '../../../../components/QuantityButton';
import { AddToCartButton } from '../AddToCartButton';
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

              <AddToCartButton />
            </div>
          </AddToCartContainer>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
