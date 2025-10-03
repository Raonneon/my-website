import styled from 'styled-components'
import { type ReactNode } from 'react'

const ButtonBase = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const PrimaryButton = styled(ButtonBase)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  &:hover {
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`

const SecondaryButton = styled(ButtonBase)`
  background: #6c757d;
`

const DangerButton = styled(ButtonBase)`
  background: #ff4757;
`

interface StyledButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
}

function StyledButton({ children, onClick, variant = 'primary' }: StyledButtonProps) {
  const ButtonComponent = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    danger: DangerButton
  }[variant]

  return (
    <ButtonComponent onClick={onClick}>
      {children}
    </ButtonComponent>
  )
}

export default StyledButton