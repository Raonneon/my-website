import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        background: theme === 'light' ? '#333' : '#fff',
        color: theme === 'light' ? '#fff' : '#333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem'
      }}
    >
      {theme === 'light' ? '🌙 Темная' : '☀️ Светлая'}
    </button>
  )
}

export default ThemeToggle