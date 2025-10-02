import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  username: string
}

function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data.slice(0, 5)) // Берем только 5 пользователей
        setError('')
      } catch (err) {
        setError('Ошибка загрузки данных')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, []) // Пустой массив = выполнится один раз при монтировании

  if (loading) {
    return <div className="card"><h2>Загрузка...</h2></div>
  }

  if (error) {
    return <div className="card"><h2 style={{ color: 'red' }}>{error}</h2></div>
  }

  return (
    <div className="card">
      <h2>👥 Список пользователей</h2>
      <div style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
        {users.map(user => (
          <div 
            key={user.id} 
            style={{ 
              padding: '1rem', 
              margin: '0.5rem 0', 
              background: '#f5f5f5', 
              borderRadius: '8px' 
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{user.name}</h3>
            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
              📧 {user.email}
            </p>
            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#666' }}>
              @{user.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users