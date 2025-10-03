import { useTheme } from '../context/ThemeContext'
import styles from './Card.module.css'
import { type ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
}

function Card({ title, children }: CardProps) {
  const { theme } = useTheme()
  
  return (
    <div className={`${styles.card} ${theme === 'dark' ? styles.cardDark : ''}`}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  )
}

export default Card