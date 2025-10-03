import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme()

  const appStyle = {
    minHeight: '100vh',
    background: theme === 'light' ? '#fff' : '#1a1a1a',
    color: theme === 'light' ? '#333' : '#fff',
    transition: 'all 0.3s ease'
  }

  return (
    <BrowserRouter>
      <div className="App" style={appStyle}>
        <nav style={{
          background: theme === 'light' ? '#333' : '#2a2a2a',
          padding: '1rem',
          marginBottom: '2rem',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>
                О себе
              </Link>
            </li>
            <li>
              <Link to="/projects" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>
                Проекты
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={
            <div className="card">
              <h1>404</h1>
              <p>Страница не найдена</p>
              <Link to="/">Вернуться на главную</Link>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App