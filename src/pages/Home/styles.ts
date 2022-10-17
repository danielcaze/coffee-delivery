import styled from "styled-components";
import BackgroundImageUrl from '../../assets/background-coffee-delivery.png'

export const HomeContainer = styled.div`
  height: 544px;
  padding: 9.2rem 16rem;
  
  background-image: url(${BackgroundImageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const IntroductionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5.6rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 6.6rem;

    header {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      strong {
        color: ${(props) => props.theme['gray-900']};
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: var(--title-xl);
      }

      p {
        color: ${(props) => props.theme['gray-800']};
        font-size: var(--text-l);
      }
    }
  }

  img {
    max-width: 476px;
    max-height: 360px;
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  gap: 2rem 4rem;
  grid-template-columns: repeat(2, 1fr);
`