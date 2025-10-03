import { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const WeatherContainer = styled.div<{ $isDark: boolean }>`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${props => props.$isDark ? '#2a2a2a' : '#fff'};
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
`

const Input = styled.input<{ $isDark: boolean }>`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid ${props => props.$isDark ? '#444' : '#ddd'};
  border-radius: 8px;
  background: ${props => props.$isDark ? '#1a1a1a' : '#fff'};
  color: ${props => props.$isDark ? '#fff' : '#333'};
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const WeatherInfo = styled.div<{ $isDark: boolean }>`
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${props => props.$isDark ? '#1a1a1a' : '#f9f9f9'};
  border-radius: 12px;
  text-align: center;
`

const Temperature = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin: 1rem 0;
`

const Description = styled.div`
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 1rem;
`

interface WeatherData {
  name: string
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
  wind: {
    speed: number
  }
}

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608' // OpenWeather demo key

  const fetchWeather = async () => {
    if (!city.trim()) return

    try {
      setLoading(true)
      setError('')
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=ru`
      )
      
      if (!response.ok) {
        throw new Error('Город не найден')
      }

      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки данных')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      fetchWeather()
    }
  }

  return (
    <WeatherContainer $isDark={isDark}>
      <h1>Погода</h1>
      <Input
        $isDark={isDark}
        type="text"
        placeholder="Введите название города..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={fetchWeather}>
        {loading ? 'Загрузка...' : 'Найти'}
      </Button>

      {error && (
        <WeatherInfo $isDark={isDark}>
          <p style={{ color: '#ff4757' }}>{error}</p>
        </WeatherInfo>
      )}

      {weather && (
        <WeatherInfo $isDark={isDark}>
          <h2>{weather.name}</h2>
          <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
          <Description>{weather.weather[0].description}</Description>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Ощущается</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{Math.round(weather.main.feels_like)}°C</p>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Влажность</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{weather.main.humidity}%</p>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Ветер</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{weather.wind.speed} м/с</p>
            </div>
          </div>
        </WeatherInfo>
      )}
    </WeatherContainer>
  )
}

export default Weather