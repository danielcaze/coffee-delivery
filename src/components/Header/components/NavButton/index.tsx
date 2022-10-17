import { ReactNode } from "react";
import { NavButtonContainer } from "./styles";

interface NavButtonProps {
  children: ReactNode
  color: 'purple' | 'yellow'
  showNotifications?: boolean
}

export function NavButton({ children, color, showNotifications }: NavButtonProps) {
  return (
    <NavButtonContainer baseColor={color}>
      {children}
    </NavButtonContainer>
  )
}
