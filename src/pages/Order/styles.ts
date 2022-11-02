import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10.2rem;
  padding-top: 8rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  > img {
    max-width: 49.2rem;
    align-self: flex-end;
  }
`

export const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  strong {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2', sans-serif;
    font-size: var(--title-l);
    font-weight: 800;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
    font-size: var(--text-l);
  }
`

export const DeliveryDataContainer = styled.div`
  position: relative;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 0.1rem;
    background: ${(props) =>
      `linear-gradient(to right,${props.theme['purple-500']},${props.theme['yellow-500']})`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

interface DeliveryDataProps {
  variation: 'purple-500' | 'yellow-500' | 'yellow-700'
}

export const DeliveryData = styled.div<DeliveryDataProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  div:first-child {
    border-radius: 50%;
    background: ${(props) => props.theme[props.variation]};
    color: ${(props) => props.theme.white};
    padding: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;

    p {
      font-size: var(--text-m);
      color: ${(props) => props.theme['gray-700']};

      span {
        font-weight: 700;
      }
    }

    span {
      font-size: var(--text-m);
      color: ${(props) => props.theme['gray-700']};
      font-weight: 700;
    }
  }
`
