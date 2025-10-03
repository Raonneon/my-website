import styles from './Button.module.css'
import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'normal' | 'small'
}

function Button({ children, onClick, variant = 'primary', size = 'normal' }: ButtonProps) {
  const variantClass = {
    primary: '',
    secondary: styles.buttonSecondary,
    danger: styles.buttonDanger
  }[variant]

  const sizeClass = size === 'small' ? styles.buttonSmall : ''

  return (
    <button 
      className={`${styles.button} ${variantClass} ${sizeClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button