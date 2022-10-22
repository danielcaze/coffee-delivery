import styled from 'styled-components'

export const QuantityButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.85rem 0.8rem;

  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};

  button {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme['purple-500']};
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  p {
    font-size: var(--text-m);
    color: ${(props) => props.theme['gray-900']};
  }
`
