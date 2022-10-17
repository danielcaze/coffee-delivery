import styled from "styled-components";

interface BenefitContainerProps {
  baseColor: 'yellow-700' | 'gray-700' | 'yellow-500' | 'purple-500'
}

export const BenefitContainer = styled.div<BenefitContainerProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  max-width: fit-content;

  div {
    border-radius: 50%;
    padding: 0.8rem;

    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme[props.baseColor]};

    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: var(--text-m);
  }
`