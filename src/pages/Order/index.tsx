import {
  DeliveryData,
  DeliveryDataContainer,
  OrderContainer,
  TitleContainer,
} from './styles'

import OrderImage from '../../assets/man_wearing_yellow_shirt_and_green_pants_on_a_bike.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { PurchaseContext } from '../../contexts/PurchaseContext'

export function Order() {
  const { purchase } = useContext(PurchaseContext)

  return (
    <OrderContainer>
      <div>
        <TitleContainer>
          <strong>Uhu! Pedido confirmado</strong>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContainer>
        <DeliveryDataContainer>
          <DeliveryData variation="purple-500">
            <div>
              <MapPin size={16} weight={'fill'} />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {purchase.street}, {purchase.number}
                </span>
              </p>
              <span>
                {purchase.neighbourhood} - {purchase.city}, {purchase.province}
              </span>
            </div>
          </DeliveryData>
          <DeliveryData variation="yellow-500">
            <div>
              <Timer size={16} weight={'fill'} />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </DeliveryData>
          <DeliveryData variation="yellow-700">
            <div>
              <CurrencyDollar size={16} weight={'fill'} />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <span>
                {purchase.paymentMethod === 'credit'
                  ? 'Cartão de Crédito'
                  : purchase.paymentMethod === 'debit'
                    ? 'Cartão de Débito'
                    : 'Dinheiro'}
              </span>
            </div>
          </DeliveryData>
        </DeliveryDataContainer>
      </div>
      <img src={OrderImage} alt="" />
    </OrderContainer>
  )
}
