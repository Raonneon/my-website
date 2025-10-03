import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
    
    
  useEffect(() => {
  let interval: ReturnType<typeof setInterval> | undefined

  if (isRunning) {
    interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
  }

     // Cleanup функция - выполнится при размонтировании
  return () => {
    if (interval) clearInterval(interval)
  }
}, [isRunning])  // Зависимости - перезапускается когда меняется isRunning

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`
  }

  return (
    <div className="card">
      <h2>⏱️ Таймер</h2>
      <h1 style={{ fontSize: '3rem', margin: '1rem 0' }}>
        {formatTime(seconds)}
      </h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Пауза' : 'Старт'}
        </button>
        <button onClick={() => { setSeconds(0); setIsRunning(false); }}>
          Сбросить
        </button>
      </div>
    </div>
  )
}

export default Timer