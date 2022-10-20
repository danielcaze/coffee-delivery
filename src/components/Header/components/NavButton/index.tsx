import { ButtonHTMLAttributes, ReactNode } from "react";
import { NavButtonContainer } from "./styles";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variation: 'purple' | 'yellow'
  showNotifications?: boolean
}

export function NavButton({ children, variation, showNotifications, ...rest }: NavButtonProps) {
  return (
    <NavButtonContainer baseColor={variation} {...rest}>
      {children}
    </NavButtonContainer>
  )
}
