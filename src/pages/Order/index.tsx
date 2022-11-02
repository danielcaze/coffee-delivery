import {
  DeliveryData,
  DeliveryDataContainer,
  OrderContainer,
  TitleContainer,
} from './styles'

import OrderImage from '../../assets/man_wearing_yellow_shirt_and_green_pants_on_a_bike.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

export function Order() {
  const location = useLocation()

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
                  {location.state?.street}, {location.state?.number}
                </span>
              </p>
              <span>
                {location.state?.neighbourhood} - {location.state?.city},{' '}
                {location.state?.province}
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
                {location.state?.paymentMethod === 'credit'
                  ? 'Cartão de Crédito'
                  : location.state?.paymentMethod === 'debit'
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
