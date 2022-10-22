import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: min(64rem, 100%) 1fr;
  gap: 3.2rem;
  padding-top: 4rem;
  padding-inline: 16rem;
`

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > strong {
    font-size: var(--title-xs);
    color: ${(props) => props.theme['gray-800']};
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const CompleteYourOrderContainer = styled(BaseContainer)`
  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`
const BaseFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background-color: ${(props) => props.theme['gray-200']};
`

export const CompleteYourOrderField = styled(BaseFieldContainer)`
  gap: 3.2rem;
  border-radius: 6px;
`

export const AddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    border-radius: 4px;
    padding: 1.2rem;
    background: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};
  }

  input:first-child {
    max-width: 20rem;
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-600']};
    font-size: var(--text-s);
  }

  fieldset {
    border: 0;
    display: flex;
    align-items: center;
    gap: 1.2rem;

    input:nth-child(2) {
      flex: 2;
    }

    input:nth-child(3) {
      max-width: 6rem;
    }
  }
`

const BaseButton = styled.button`
  display: flex;
  align-items: center;

  border-radius: 6px;

  text-transform: uppercase;

  color: ${(props) => props.theme['gray-700']};
  font-size: var(--button-s);
  background: ${(props) => props.theme['gray-400']};

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const PaymentMethodButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const PaymentMethodButton = styled(BaseButton)`
  gap: 1.2rem;

  flex: 1;

  padding: 1.6rem;

  border: 1px solid transparent;

  &.active {
    background: ${(props) => props.theme['purple-300']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }
`

export const RemoveButton = styled(BaseButton)`
  gap: 0.4rem;

  padding: 0.65rem 0.7rem;
`

export const SelectedCoffeesContainer = styled(BaseContainer)``

export const CheckoutCoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  & + div {
    margin-top: 2.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      max-height: 6.4rem;
      max-width: 6.4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      p {
        font-size: var(--text-m);
        color: ${(props) => props.theme['gray-800']};
      }

      .button-container {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
    }
  }

  strong {
    align-self: flex-start;

    font-size: var(--text-m);
    font-weight: 700;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const FinishOrderContainer = styled(BaseFieldContainer)`
  border-radius: 0.6rem 4.4rem 0.6rem 4.4rem;
  gap: 2.5rem;

  > button {
    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    padding-block: 1.2rem;

    font-size: var(--button-g);
    font-weight: 700;
    border-radius: 6px;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-700']};
    }
  }
`

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['gray-700']};

    p {
      font-size: var(--text-sm);
    }

    span {
      font-size: var(--text-m);
    }

    strong {
      font-size: var(--text-l);
      font-weight: 700;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`
