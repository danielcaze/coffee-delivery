import { ReactNode } from 'react'
import { BenefitContainer } from './styles'

interface BenefitProps {
  icon: ReactNode
  text: string
  baseColor: 'yellow-700' | 'gray-700' | 'yellow-500' | 'purple-500'
}

export function Benefit({ text, icon, baseColor }: BenefitProps) {
  return (
    <BenefitContainer baseColor={baseColor}>
      <div>
        {icon}
      </div>
      <span>{text}</span>
    </BenefitContainer>
  )
}
