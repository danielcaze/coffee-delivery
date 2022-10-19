import { QuantityButton } from '../../../../components/QuantityButton';
import { CoffeeType } from '../../../../mocks/Coffees';
import { AddToCartButton } from '../AddToCartButton';
import { AddToCartContainer, CoffeeCardContainer, CoffeeTagContainer, TextContainer } from "./styles";
interface CoffeeCardProps {
  data: CoffeeType
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { name, description, icon, price, tags } = data
  return (
    <CoffeeCardContainer>
      <img src={icon} alt="" />
      <div>
        <CoffeeTagContainer>
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </CoffeeTagContainer>

        <div>
          <TextContainer>
            <strong>{name}</strong>
            <p>{description}</p>
          </TextContainer>

          <AddToCartContainer>
            <span>{" " + price}</span>

            <div>
              <QuantityButton />

              <AddToCartButton onClick={() => console.log("aa")} />
            </div>
          </AddToCartContainer>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
