import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  ShoppingCart,
  Trash,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { QuantityButton } from '../../components/QuantityButton'
import { useCart } from '../../hooks/useCart'
import { CardTitle } from './components/CardTitle'
import {
  AddressFormContainer,
  CheckoutCoffeeCard,
  CheckoutContainer,
  CheckoutForm,
  CompleteYourOrderContainer,
  CompleteYourOrderField,
  FinishOrderContainer,
  PaymentMethodButton,
  PaymentMethodButtonsContainer,
  PricesContainer,
  RemoveButton,
  SelectedCoffeesContainer,
} from './styles'
import { PurchaseContext } from '../../contexts/PurchaseContext'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const paymentMethods = [
  {
    id: 'credit',
    name: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  {
    id: 'debit',
    name: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  {
    id: 'money',
    name: 'Dinheiro',
    icon: <Money size={16} />,
  },
]

const CheckoutFormSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  neighbourhood: zod.string(),
  city: zod.string(),
  province: zod.string(),
  paymentMethod: zod
    .string()
    .refine((val) => paymentMethods.map((payment) => payment.id).includes(val)),
})

type FormSchemaType = zod.infer<typeof CheckoutFormSchema>

export function Checkout() {
  const { cart, removeFromCart, handleQuantity } = useCart()
  const { purchaseCreation, purchases } = useContext(PurchaseContext)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(CheckoutFormSchema),
  })
  const navigate = useNavigate()

  const complementValue = watch('complement')
  const paymentMethod = watch('paymentMethod')

  function onSubmit(data: FormSchemaType) {
    const id = String(purchases.length + 1)
    const formData = {
      ...data,
      paymentMethod,
      id,
    }
    purchaseCreation(formData)
    reset()
    navigate(`/order/${id}`, { state: formData })
  }

  function formatNumber(number: number | string) {
    return Number(number).toFixed(2).replace('.', ',')
  }

  const shippingValue = 3.5
  const shippingValueFormatted = formatNumber(shippingValue)

  const totalItemsValue = cart.reduce((acc, obj) => acc + Number(obj?.price), 0)
  const totalItemsValueFormatted = formatNumber(totalItemsValue)

  const totalValue = formatNumber(totalItemsValue + shippingValue)

  return (
    <CheckoutContainer>
      <CompleteYourOrderContainer>
        <strong>Complete seu pedido</strong>
        <CheckoutForm id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
          <CompleteYourOrderField>
            <CardTitle
              title={'Endereço de Entrega'}
              subtitle={'Informe o endereço onde deseja receber seu pedido'}
              iconVariant={'yellow'}
              icon={<MapPinLine size={22} weight="regular" />}
            />
            <AddressFormContainer>
              <input
                autoFocus
                type="tel"
                placeholder="CEP"
                required
                {...register('cep')}
              />
              <input
                type="text"
                placeholder="Rua"
                required
                {...register('street')}
              />
              <fieldset>
                <input
                  type="number"
                  placeholder="Número"
                  required
                  {...register('number')}
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  className={!complementValue ? 'optional' : ''}
                  {...register('complement')}
                />
              </fieldset>
              <fieldset>
                <input
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register('neighbourhood')}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  required
                  {...register('city')}
                />
                <input
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  required
                  {...register('province')}
                />
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
              {paymentMethods.map((paymentType) => (
                <React.Fragment key={paymentType.id}>
                  <input
                    type="radio"
                    id={paymentType.id}
                    value={paymentType.id}
                    checked={paymentMethod === paymentType.id}
                    {...register('paymentMethod')}
                  />

                  <PaymentMethodButton type="button">
                    <label htmlFor={paymentType.id}>
                      {paymentType.icon}
                      {paymentType.name}
                    </label>
                  </PaymentMethodButton>
                </React.Fragment>
              ))}
            </PaymentMethodButtonsContainer>
            {errors.paymentMethod && (
              <p className="error-message">
                Por favor selecione um método de pagamento.
              </p>
            )}
          </CompleteYourOrderField>
        </CheckoutForm>
      </CompleteYourOrderContainer>
      <SelectedCoffeesContainer>
        <strong>Cafes selecionados</strong>
        <FinishOrderContainer>
          {cart.length > 0 ? (
            <>
              <div>
                {cart.map((item) => (
                  <CheckoutCoffeeCard key={item.id}>
                    <div>
                      <img src={item.icon} alt="" />
                      <div>
                        <p>{item.name}</p>
                        <div className="button-container">
                          <QuantityButton
                            handleRemoveQuantity={() =>
                              handleQuantity(item, 'remove', item.quantity)
                            }
                            handleAddQuantity={() =>
                              handleQuantity(item, 'add', item.quantity)
                            }
                            quantity={item.quantity}
                          />
                          <RemoveButton onClick={() => removeFromCart(item.id)}>
                            <Trash size={16} />
                            Remover
                          </RemoveButton>
                        </div>
                      </div>
                    </div>
                    <strong>R$ {formatNumber(item.price)}</strong>
                  </CheckoutCoffeeCard>
                ))}
              </div>
              <PricesContainer>
                <div>
                  <p>Total de itens</p>
                  <span>R$ {totalItemsValueFormatted}</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ {shippingValueFormatted}</span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>R$ {totalValue}</strong>
                </div>
              </PricesContainer>
              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting && !paymentMethod}
              >
                Confirmar pedido
              </button>
            </>
          ) : (
            <Link to="/" className="empty-cart">
              <div>
                <ShoppingCart size={32} />
                Seu carrinho está vazio. Clique em mim pra voltar as compras!
              </div>
            </Link>
          )}
        </FinishOrderContainer>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
