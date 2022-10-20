import { useState } from 'react';
import { QuantityButton } from '../../../../components/QuantityButton';
import { useCart } from '../../../../hooks/useCart';
import { CoffeeType } from '../../../../mocks/Coffees';
import { AddToCartButton } from '../AddToCartButton';
import { AddToCartContainer, CoffeeCardContainer, CoffeeTagContainer, TextContainer } from "./styles";
interface CoffeeCardProps {
  data: CoffeeType
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { name, description, icon, price, tags, id } = data
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()

  function handleAddQuantity() {
    setQuantity(prev => prev + 1);
  }

  function handleRemoveQuantity() {
    setQuantity(prev => prev - 1);
  }

  function handleAddToCart() {
    if (quantity === 0) return
    addToCart({ id, name, icon, price, quantity })
    setQuantity(0)
  }

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
              <QuantityButton handleAddQuantity={handleAddQuantity} handleRemoveQuantity={handleRemoveQuantity} quantity={quantity} />

              <AddToCartButton onClick={handleAddToCart} />
            </div>
          </AddToCartContainer>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
