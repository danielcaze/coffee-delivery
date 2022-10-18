import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 310px;
  padding-inline: 2.4rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 0.6rem 3.6rem;

  img {
    margin-top: -1.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.3rem;
    }
  }
`

export const CoffeeTagContainer = styled.span`
  padding: 0.4rem 0.8rem;

  text-transform: uppercase;

  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  font-weight: 700;

  border-radius: 100px;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;

  strong {
    font-size: var(--title-s);
    font-weight: 800;
    font-family: "Baloo 2", sans-serif;
  }

  p {
    font-size: var(--text-s);
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
  }
`

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;

  span {
    font-size: var(--title-m);
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['gray-700']};
  }

  span::before {
    content: "R$";

    font-size: var(--text-s);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['gray-700']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`