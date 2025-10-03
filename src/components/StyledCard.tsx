import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { type ReactNode } from 'react'

const CardWrapper = styled.div<{ $isDark: boolean }>`
  background: ${props => props.$isDark ? '#2a2a2a' : '#f9f9f9'};
  border-radius: 12px;
  padding: 2rem;
  margin: 1rem auto;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`

const CardTitle = styled.h2<{ $isDark: boolean }>`
  color: ${props => props.$isDark ? '#fff' : '#333'};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const CardContent = styled.div<{ $isDark: boolean }>`
  color: ${props => props.$isDark ? '#ccc' : '#666'};
  line-height: 1.6;
`

interface StyledCardProps {
  title: string
  children: ReactNode
}

function StyledCard({ title, children }: StyledCardProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <CardWrapper $isDark={isDark}>
      <CardTitle $isDark={isDark}>{title}</CardTitle>
      <CardContent $isDark={isDark}>{children}</CardContent>
    </CardWrapper>
  )
}

export default StyledCard