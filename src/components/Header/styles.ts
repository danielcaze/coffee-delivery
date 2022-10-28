import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: var(--navbar-height-desktop);
  padding: 3.2rem 16rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;

  background-color: ${(props) => props.theme['gray-100']};

  a {
    box-shadow: initial;
  }

  nav {
    position: relative;
    display: flex;
    gap: 1.2rem;

    > button {
      cursor: initial;
      box-shadow: initial;
    }

    .quantity {
      position: absolute;
      right: -0.8rem;
      top: -0.8rem;

      background: ${(props) => props.theme['yellow-700']};
      color: ${(props) => props.theme.white};

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      user-select: none;
    }
  }
`

export const NavButtonsWrapper = styled.nav``
