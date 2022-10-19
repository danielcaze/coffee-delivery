import { ReactNode } from "react";
import { NavButtonContainer } from "./styles";

interface NavButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variation: 'purple' | 'yellow'
  showNotifications?: boolean
}

export function NavButton({ children, variation, showNotifications }: NavButtonProps) {
  return (
    <NavButtonContainer baseColor={variation}>
      {children}
    </NavButtonContainer>
  )
}
