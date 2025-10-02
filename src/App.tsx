import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{
          background: '#333',
          padding: '1rem',
          marginBottom: '2rem',
          borderRadius: '8px'
        }}>
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            justifyContent: 'center',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link 
                to="/" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  transition: 'color 0.3s'
                }}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  fontSize: '1.1rem'
                }}
              >
                О себе
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  fontSize: '1.1rem'
                }}
              >
                Проекты
              </Link>
            </li>
          </ul>
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