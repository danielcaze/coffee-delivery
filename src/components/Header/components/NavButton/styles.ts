import styled from "styled-components";

interface NavButtonContainer {
  baseColor: string
}

export const NavButtonContainer = styled.button<NavButtonContainer>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.8rem;
  border-radius: 6px;

  font-size: var(--text-s);

  background-color: ${(props) => props.baseColor === 'purple' ? props.theme["purple-300"] : props.theme["yellow-300"]};
  color: ${(props) => props.baseColor === 'purple' ? props.theme["purple-700"] : props.theme["yellow-700"]};

  svg {
    color: ${(props) => props.baseColor === 'purple' ? props.theme["purple-500"] : props.theme["yellow-500"]};
  }
`