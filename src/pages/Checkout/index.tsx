import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { QuantityButton } from '../../components/QuantityButton'
import { useCart } from '../../hooks/useCart'
import { CardTitle } from './components/CardTitle'
import {
  AddressFormContainer,
  CheckoutCoffeeCard,
  CheckoutContainer,
  CompleteYourOrderContainer,
  CompleteYourOrderField,
  FinishOrderContainer,
  PaymentMethodButton,
  PaymentMethodButtonsContainer,
  PricesContainer,
  RemoveButton,
  SelectedCoffeesContainer,
} from './styles'

export function Checkout() {
  const { cart, removeFromCart } = useCart()

  return (
    <CheckoutContainer>
      <CompleteYourOrderContainer>
        <strong>Complete seu pedido</strong>
        <div>
          <CompleteYourOrderField>
            <CardTitle
              title={'Endereço de Entrega'}
              subtitle={'Informe o endereço onde deseja receber seu pedido'}
              iconVariant={'yellow'}
              icon={<MapPinLine size={22} weight="regular" />}
            />
            <AddressFormContainer>
              <input type="tel" placeholder="CEP" required />
              <input type="text" placeholder="Rua" required />
              <fieldset>
                <input type="number" placeholder="Número" required />
                <input type="text" placeholder="Complemento" required />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Bairro" required />
                <input type="text" placeholder="Cidade" required />
                <input type="text" placeholder="UF" maxLength={2} required />
              </fieldset>
            </AddressFormContainer>
          </CompleteYourOrderField>
          <CompleteYourOrderField>
            <CardTitle
              title={'Pagamento'}
              subtitle={
                'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
              }
              iconVariant={'purple'}
              icon={<CurrencyDollar size={22} weight="regular" />}
            />
            <PaymentMethodButtonsContainer>
              <PaymentMethodButton type="button">
                <CreditCard size={16} />
                Cartão de crédito
              </PaymentMethodButton>
              <PaymentMethodButton type="button">
                <Bank size={16} />
                Cartão de débito
              </PaymentMethodButton>
              <PaymentMethodButton type="button">
                <Money size={16} />
                Dinheiro
              </PaymentMethodButton>
            </PaymentMethodButtonsContainer>
          </CompleteYourOrderField>
        </div>
      </CompleteYourOrderContainer>
      <SelectedCoffeesContainer>
        <strong>Cafes selecionados</strong>
        <FinishOrderContainer>
          <div>
            {cart.map((item) => (
              <CheckoutCoffeeCard key={item.id}>
                <div>
                  <img src={item.icon} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <div className="button-container">
                      <QuantityButton
                        handleRemoveQuantity={function (): void {
                          throw new Error('Function not implemented.')
                        }}
                        handleAddQuantity={function (): void {
                          throw new Error('Function not implemented.')
                        }}
                        quantity={item.quantity}
                      />
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        <Trash size={16} />
                        Remover
                      </RemoveButton>
                    </div>
                  </div>
                </div>
                <strong>R$ {item.price}</strong>
              </CheckoutCoffeeCard>
            ))}
          </div>
          <PricesContainer>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </PricesContainer>
          <button type="button">Confirmar pedido</button>
        </FinishOrderContainer>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
