import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useEffect, useState } from 'react';
import CoffeImageUrl from '../../assets/coffee-image.png'
import { CoffeeType } from '../../mocks/Coffees';
import { api } from '../../services/api';
import { Benefit } from './components/Benefit';
import { CoffeeCard } from './components/CoffeeCard';
import { BenefitsContainer, HomeContainer, IntroductionContainer, OurCoffeeContainer } from "./styles";

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    api.get('coffees')
      .then(response => setCoffees(response.data.coffees))
  }, [])

  console.log(coffees)

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
      <OurCoffeeContainer>
        <strong>Nossos cafés</strong>
        <div>
          {
            coffees.map(coffee => (
              <CoffeeCard key={coffee.id} data={coffee} />
            ))
          }
        </div>
      </OurCoffeeContainer>
    </HomeContainer>
  )
}
