import { useState } from 'react'

interface CounterProps {
  initialValue?: number
  title: string
}

function Counter({ initialValue = 0, title }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue)

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>Значение: {count}</h3>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count + 5)}>+5</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Сбросить</button>
      </div>
    </div>
  )
}

export default Counter