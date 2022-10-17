import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import CoffeImageUrl from '../../assets/coffee-image.png'
import { Benefit } from './components/Benefit';
import { BenefitsContainer, HomeContainer, IntroductionContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <IntroductionContainer>
        <div>
          <header>
            <strong>
              Encontre o café perfeito para qualquer hora do dia
            </strong>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>
          <BenefitsContainer>
            <Benefit icon={<ShoppingCart size={16} weight={'fill'} />} text={'Compra simples e segura'} baseColor={'yellow-700'} />
            <Benefit icon={<Package size={16} weight={'fill'} />} text={'Embalagem mantém o café intacto'} baseColor={'gray-700'} />
            <Benefit icon={<Timer size={16} weight={'fill'} />} text={'Entrega rápida e rastreada'} baseColor={'yellow-500'} />
            <Benefit icon={<Coffee size={16} weight={'fill'} />} text={'O café chega fresquinho até você'} baseColor={'purple-500'} />
          </BenefitsContainer>
        </div>
        <img src={CoffeImageUrl} alt="" />
      </IntroductionContainer>
    </HomeContainer>
  )
}
