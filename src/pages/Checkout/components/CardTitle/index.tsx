import { ReactNode } from "react";
import { CardTitleContainer } from "./styles";

interface CardTitleProps {
  title: string
  subtitle: string
  iconVariant: "yellow" | "purple"
  icon: ReactNode
}

export function CardTitle({ title, subtitle, iconVariant = "yellow", icon }: CardTitleProps) {
  return (
    <CardTitleContainer iconVariant={iconVariant}>
      {icon}
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </CardTitleContainer>
  )
}
