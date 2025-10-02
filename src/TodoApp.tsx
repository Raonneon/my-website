import { useState, useEffect } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

type FilterType = 'all' | 'active' | 'completed'

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>('')
  const [filter, setFilter] = useState<FilterType>('all')

  // Загрузка из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem('react-todos')
    if (saved) {
      setTodos(JSON.parse(saved))
    }
  }, [])

  // Сохранение в localStorage при изменении todos
  useEffect(() => {
    localStorage.setItem('react-todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (input.trim() === '') return
    
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    
    setTodos([...todos, newTodo])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeTodosCount = todos.filter(t => !t.completed).length

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>📝 React ToDo</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Добавить задачу..."
          style={{ 
            flex: 1, 
            padding: '10px', 
            fontSize: '16px',
            borderRadius: '4px',
            border: '2px solid #ddd'
          }}
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem', justifyContent: 'center' }}>
        <button 
          onClick={() => setFilter('all')}
          style={{ background: filter === 'all' ? '#667eea' : '#ccc' }}
        >
          Все
        </button>
        <button 
          onClick={() => setFilter('active')}
          style={{ background: filter === 'active' ? '#667eea' : '#ccc' }}
        >
          Активные
        </button>
        <button 
          onClick={() => setFilter('completed')}
          style={{ background: filter === 'completed' ? '#667eea' : '#ccc' }}
        >
          Завершенные
        </button>
      </div>

      <div style={{ textAlign: 'left' }}>
        {filteredTodos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999' }}>Нет задач</p>
        ) : (
          filteredTodos.map(todo => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                margin: '5px 0',
                background: '#f9f9f9',
                borderRadius: '8px',
                gap: '10px'
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#999' : '#333'
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ background: '#ff4757', padding: '5px 10px' }}
              >
                Удалить
              </button>
            </div>
          ))
        )}
      </div>

      <div style={{ 
        marginTop: '1rem', 
        paddingTop: '1rem', 
        borderTop: '2px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '14px', color: '#666' }}>
          Активных задач: {activeTodosCount}
        </span>
        <button
          onClick={clearCompleted}
          style={{ background: '#ff4757', padding: '8px 16px' }}
        >
          Очистить завершенные
        </button>
      </div>
    </div>
  )
}

export default TodoApp