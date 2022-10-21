import styled from "styled-components";

interface CardTitleContainerProps {
  iconVariant: "yellow" | "purple"
}

export const CardTitleContainer = styled.header<CardTitleContainerProps>`
  display: flex;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme[`${props.iconVariant}-700`]}
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    p {
      font-size: var(--text-m);
      color: ${(props) => props.theme["gray-800"]}
    }

    span {
      font-size: var(--text-s);
      color: ${(props) => props.theme["gray-700"]}
    }
  }
`